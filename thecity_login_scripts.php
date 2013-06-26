<?php

function thecity_login_wordpress_scripts() {  
  wp_register_script('thecity_login_jquery19_js', plugins_url('/the-city-login/scripts/jquery-1.9.1.min.js'));   
  wp_register_script('thecity_login_jquery_base64_js', plugins_url('/the-city-login/scripts/jquery.base64.min.js'));   
  wp_register_script('thecity_login_js', plugins_url('/the-city-login/scripts/thecity_login.js'));   
  wp_enqueue_script('thecity_login_jquery19_js');  
  wp_enqueue_script('thecity_login_jquery_base64_js');  
  wp_enqueue_script('thecity_login_js');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_scripts');  



function thecity_login_wordpress_styles() {  
  wp_register_style('thecity_login_wordpress_style', plugins_url( '/the-city-login/scripts/thecity_login.css'));   
  wp_enqueue_style('thecity_login_wordpress_style');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_styles');  


?>