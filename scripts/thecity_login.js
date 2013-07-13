// **************************************************
// TheCity Login JavaScript Wrapper
// **************************************************
TheCityLogin = {
  defaults : { 'subdomain' : null,
               'city_login_div_id' : 'thecity_login',
               'display_form_loading_message' : true,
               'show_remember_me' : true,
               'use_placeholder_text' : false},
               
  _class_vars : {'login_form_url' : 'http://authentication.onthecity.org/sessions/remote_form.json?callback=?',
                 'login_url' : 'http://authentication.onthecity.org/sessions/remote_login.json?callback=?'}, 
  
  start : function(options) {
    if(options !== undefined) { 
      jQuery.extend(this.defaults, options)  
    }
    
    if(this.defaults['subdomain'] == null) {
      alert('Subdomain must be set');
      return;
    }

    if(this.defaults['city_login_div_id'] == null || this.defaults['city_login_div_id'] == '') {
      alert('Div ID not specified');
      return;
    }    

    if(this.defaults['display_form_loading_message']) {
      jQuery('#'+this.defaults['city_login_div_id']).html("Loading login form....");
    }

    var self = this; // Need object scope at this point
    jQuery.getJSON(this._class_vars['login_form_url'], function(response){        
        var form = response['form'];
        form = form.replace(/[\r\n]/g, '');
        form = TCBase64.decode(form);
        jQuery('#'+self.defaults['city_login_div_id']).html(form);

        if(!self.defaults['show_remember_me']) {
          jQuery('#'+self.defaults['city_login_div_id']+' #authcity #remember-me').hide();
        }

        if(self.defaults['use_placeholder_text']) {
          jQuery('#'+self.defaults['city_login_div_id']+' label[for="login"]').hide();
          jQuery('#'+self.defaults['city_login_div_id']+' label[for="password"]').hide();
          jQuery('#'+self.defaults['city_login_div_id']+' #authcity #login').attr('placeholder','Login');
          jQuery('#'+self.defaults['city_login_div_id']+' #authcity #password').attr('placeholder','Password');
        }
        
        self._add_meta_tag_csrf_token();
        self._add_login_link_listener();
        self._apply_styling_formatter();
      }
    )   
  },

  _add_meta_tag_csrf_token : function() {
    var csrf_token = document.createElement('meta');
    csrf_token.name = "csrf-token";
    csrf_token.content = jQuery('[name="authenticity_token"]').val()
    document.getElementsByTagName('head')[0].appendChild(csrf_token);
  },  

  _remove_errors : function() {
    jQuery(".city_error").remove();
  },  

  _add_error : function(msg) {
    var self = this; // Need object scope at this point
    var error_li = document.createElement("li");
    error_li.setAttribute("class","city_error");
    error_li.innerHTML = msg;
    jQuery("#authcity ul ").prepend( error_li );
  },  

  _add_login_link_listener : function() {
    var self = this; // Need object scope at this point
    jQuery("#city_login_link").click(function() {
      self._remove_errors();

      var params = {
        'login' : jQuery("#login").val(),
        'password' : jQuery("#password").val(),
        'authenticity_token' : jQuery('[name="authenticity_token"]').val()
      };

      jQuery.getJSON(self._class_vars['login_url'], params, function(response){   
        if(response["success"] != undefined) {
          window.location = "https://" + self.defaults['subdomain'] + ".onthecity.org";
        } else {
          self._add_error(response["errors"]);
        }          
      });      
    });
  },

  _apply_styling_formatter : function() {
    var func = 'formatter_' + this.defaults['display_style'];
    if (typeof(window[func]) === 'function') { window[func](this); }
  }
  
}




// **************************************************
// Base64 Utility Section
// **************************************************
var TCBase64 = {
 
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
  // public method for encoding
  encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
 
    input = TCBase64._utf8_encode(input);
 
    while (i < input.length) {
 
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
 
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
 
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
 
      output = output +
      this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
      this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
    }
 
    return output;
  },
 
  // public method for decoding
  decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
 
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
    while (i < input.length) {
 
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
 
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
 
      output = output + String.fromCharCode(chr1);
 
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
 
    }
 
    output = TCBase64._utf8_decode(output);
 
    return output;
 
  },
 
  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";
 
    for (var n = 0; n < string.length; n++) {
 
      var c = string.charCodeAt(n);
 
      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
 
    }
 
    return utftext;
  },
 
  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
 
    while ( i < utftext.length ) {
 
      c = utftext.charCodeAt(i);
 
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
 
    }
 
    return string;
  }
 
}
