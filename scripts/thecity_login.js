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
      $.extend(this.defaults, options)  
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
      $('#'+this.defaults['city_login_div_id']).html("Loading login form....");
    }

    var self = this; // Need object scope at this point
    $.getJSON(this._class_vars['login_form_url'], function(response){        
        var form = response['form'];
        form = form.replace(/[\r\n]/g, '');
        form = $.base64.decode(form);
        $('#'+self.defaults['city_login_div_id']).html(form);

        if(!self.defaults['show_remember_me']) {
          $('#'+self.defaults['city_login_div_id']+' #authcity #remember-me').hide();
        }

        if(self.defaults['use_placeholder_text']) {
          $('#'+self.defaults['city_login_div_id']+' label[for="login"]').hide();
          $('#'+self.defaults['city_login_div_id']+' label[for="password"]').hide();
          $('#'+self.defaults['city_login_div_id']+' #authcity #login').attr('placeholder','Login');
          $('#'+self.defaults['city_login_div_id']+' #authcity #password').attr('placeholder','Password');
        }
        
        self._add_meta_tag_csrf_token();
        self._add_login_link_listener();
      }
    )   
  },

  _add_meta_tag_csrf_token : function() {
    var csrf_token = document.createElement('meta');
    csrf_token.name = "csrf-token";
    csrf_token.content = $('[name="authenticity_token"]').val()
    document.getElementsByTagName('head')[0].appendChild(csrf_token);
  },  

  _remove_errors : function() {
    $(".city_error").remove();
  },  

  _add_error : function(msg) {
    var self = this; // Need object scope at this point
    var error_li = document.createElement("li");
    error_li.setAttribute("class","city_error");
    error_li.innerHTML = msg;
    $("#authcity ul ").prepend( error_li );
  },  

  _add_login_link_listener : function() {
    var self = this; // Need object scope at this point
    $("#city_login_link").click(function() {
      self._remove_errors();

      var params = {
        'login' : $("#login").val(),
        'password' : $("#password").val(),
        'authenticity_token' : $('[name="authenticity_token"]').val()
      };

      $.getJSON(self._class_vars['login_url'], params, function(response){   
        if(response["success"] != undefined) {
          window.location = "https://" + self.defaults['subdomain'] + ".onthecity.org";
        } else {
          self._add_error(response["errors"]);
        }          
      });      
    });
  }
  
}
