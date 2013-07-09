jQuery(function() {  
  var subdomain = jQuery("#thecity_login").attr("subdomain");
  var show_remember_me = jQuery("#thecity_login").attr("show_remember_me") == "1";
  var use_placeholder_text = jQuery("#thecity_login").attr("use_placeholder_text") == "1";
  
  if( !(!subdomain || /^\s*$/.test(subdomain)) ) {
	  TheCityLogin.start({"subdomain" : subdomain, 
	                      "show_remember_me" : show_remember_me, 
	                      "use_placeholder_text" : use_placeholder_text});
	}
});