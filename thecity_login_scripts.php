<?php

function thecity_login_wordpress_scripts() {  
  wp_register_script('thecity_login_wordpress_js', plugins_url( '/the-city-login/scripts/thecity_login_wordpress.js'));   
  wp_enqueue_script('thecity_login_wordpress_js');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_scripts');  



function thecity_login_wordpress_styles() {  
  wp_register_style('thecity_login_wordpress_style', plugins_url( '/the-city-login/scripts/thecity_login_wordpress.css'));   
  wp_enqueue_style('thecity_login_wordpress_style');  
}

add_action('wp_enqueue_scripts', 'thecity_login_wordpress_styles');  


?>