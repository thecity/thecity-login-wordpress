<?php
/*
Plugin Name: The City Login Widget
Plugin URI: http://developer.onthecity.org/thecity-plugins/the-city-login-wordpress/
Description: A WordPress plugin that allows users to login directly to The City from your WordPress website.
Author: Wes Hays
Version: 0.1
Author URI: http://www.OnTheCity.org
*/

include_once 'thecity_login_scripts.php';


class The_City_Login_Widget extends WP_Widget {
  
  function __construct() {
    $widget_ops = array('classname' => 'the_city_login_widget', 
                        'description' => 'A WordPress plugin that allows users to login directly to The City from your WordPress website.' );
    $this->WP_Widget('the-city-login-widget', 'The City Login', $widget_ops);
  }
  

  function form($instance) {
    /* Set up some default widget settings. */
		$defaults = array( 'subdomain_key' => '', 
                       'login_display_choice' => '');

		$instance = wp_parse_args( (array) $instance, $defaults );    

    $subdomain_key = strip_tags($instance['subdomain_key']);
    $login_display_choice = strip_tags($instance['login_display_choice']);

    ?>

   <p>
     <label for="<?php echo $this->get_field_id('subdomain_key'); ?>">
       Subdomain: 
       <input class="widefat" 
              id="<?php echo $this->get_field_id('subdomain_key'); ?>" 
              name="<?php echo $this->get_field_name('subdomain_key'); ?>" 
              type="text" 
              value="<?php echo attribute_escape($subdomain_key); ?>" />
      </label>
      <i>Ex: https://[subdomain].OnTheCity.org</i>
    </p>


    <?php 
      $plain_s = $inline_s = '';
      switch($instance['plaza_display']) {
        case 'plain':
          $plain_s = 'selected="selected"'; 
          break;
        case 'inline':
          $inline_s = 'selected="selected"'; 
          break;
      }
    ?> 

    <p>    
      <label for="<?php echo $this->get_field_id('login_display_choice'); ?>">
        Display:        			
        <select class="widefat" 
                id="<?php echo $this->get_field_id('login_display_choice'); ?>" 
                name="<?php echo $this->get_field_name('login_display_choice'); ?>">
            <option value="plain" <?php echo $plain_s; ?> >Plain</option>
        		<option value="inline" <?php echo $inline_s; ?> >Inline</option>
        </select>
      </label>    
    </p>    
    <?php
  }
  

  function update($new_instance, $old_instance) {
    $instance = $old_instance;
    $instance['subdomain_key'] = strip_tags($new_instance['subdomain_key']);
    $instance['login_display_choice'] = strip_tags($new_instance['login_display_choice']);
    return $instance;
  }
  


  function widget($args, $instance) {
    extract($args);
    $subdomain_key = empty($instance['subdomain_key']) ? ' ' : $instance['subdomain_key'];
    $login_display_choice = empty($instance['login_display_choice']) ? 'plain' : $instance['login_display_choice'];
    include dirname(__FILE__).'/widget_info.php';
    echo $after_widget;
  }
  
}

add_action('widgets_init', create_function('', 'return register_widget("The_City_Login_Widget");'));

?>