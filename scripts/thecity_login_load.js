$(function() {  
  var subdomain = $("#thecity_login").attr("subdomain");
  var show_remember_me = $("#thecity_login").attr("show_remember_me") == "1";
  var use_placeholder_text = $("#thecity_login").attr("use_placeholder_text") == "1";
  
  TheCityLogin.start({"subdomain" : subdomain, 
                      "show_remember_me" : show_remember_me, 
                      "use_placeholder_text" : use_placeholder_text});
});