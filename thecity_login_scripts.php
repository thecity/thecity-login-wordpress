<?php

function thecity_login_wordpress_scripts() {     
  wp_register_script('thecity_login_js', plugins_url('/the-city-login/scripts/thecity_login.js'));   
  wp_register_script('thecity_login_load_js', plugins_url('/the-city-login/scripts/thecity_login_load.js')); 

  wp_enqueue_script( array('jquery') );  
  wp_enqueue_script('thecity_login_js');    
  wp_enqueue_script('thecity_login_load_js');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_scripts');  



function thecity_login_wordpress_styles() {  
  wp_register_style('thecity_login_wordpress_style', plugins_url( '/the-city-login/scripts/thecity_login.css'));   
  wp_enqueue_style('thecity_login_wordpress_style');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_styles');  


?>