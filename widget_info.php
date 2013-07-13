<?php
  $subdomain_key = trim($subdomain_key);
  $login_display_choice = trim($login_display_choice);
  $show_remember_me = $show_remember_me == 'on' ? '1' : '0';
  $use_placeholder_text = $use_placeholder_text == 'on' ? '1' : '0';

  $form_display = '';
  switch($login_display_choice) {
    case "plain":
      $form_display = 'thecity_login_normal_plain';
      break;

    case "inline":
      $form_display = 'thecity_login_inline_plain';
      break;

    case "city_style_normal":
      $form_display = 'city_style_normal';
      break;  

    case "city_style_inline":
      $form_display = 'city_style_inline';
      break;        

    default: // plane
      $form_display = 'thecity_login_normal_plain';
  }

  if( empty($subdomain_key)) { echo 'City subdomain not set'; } else {  ?>
  <div id="thecity_login" 
       class="<?php echo $form_display; ?>" 
       subdomain="<?php echo $subdomain_key; ?>" 
       show_remember_me="<?php echo $show_remember_me; ?>" 
       use_placeholder_text="<?php echo $use_placeholder_text; ?>" ></div>
<?php } ?>