<?php

function thecity_login_wordpress_scripts() {     
  wp_register_script('thecity_login_js', plugins_url('/the-city-login/scripts/thecity_login.js'));   
  wp_register_script('thecity_login_load_js', plugins_url('/the-city-login/scripts/thecity_login_load.js')); 
  wp_register_script('formatter_city_style_js', plugins_url('/the-city-login/scripts/formatter_city_style.js')); 

  wp_enqueue_script( array('jquery') );  
  wp_enqueue_script('thecity_login_js');    
  wp_enqueue_script('thecity_login_load_js');  
  wp_enqueue_script('formatter_city_style_js');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_scripts');  



function thecity_login_wordpress_styles() {  
  wp_register_style('thecity_login_wordpress_style', plugins_url( '/the-city-login/scripts/thecity_login.css'));   
  wp_register_style('thecity_appkit', plugins_url( '/the-city-login/scripts/thecity_appkit.css'));     
  wp_register_style('formatter_city_style_css', plugins_url( '/the-city-login/scripts/formatter_city_style.css'));   

  wp_enqueue_style('thecity_login_wordpress_style'); 
  wp_enqueue_style('thecity_appkit');  
  wp_enqueue_style('formatter_city_style_css');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_styles');  

?>