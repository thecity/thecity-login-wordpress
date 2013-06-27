<?php
  $subdomain_key = trim($subdomain_key);
  $login_display_choice = trim($login_display_choice);
  $show_remember_me = $show_remember_me == 'on' ? '1' : '0';
  $use_placeholder_text = $use_placeholder_text == 'on' ? '1' : '0';

  $form_display = '';
  switch($login_display_choice) {
    case "inline":
      $form_display = 'thecity_login_inline_plain';
      break;

    default: // normal
      $form_display = 'thecity_login_normal_plain';
  }

  if( empty($subdomain_key)) { echo 'Subdomain not set'; } else {  ?>
  <div id="thecity_login" 
       class="<?php echo $form_display; ?>" 
       subdomain="<?php echo $subdomain_key; ?>" 
       show_remember_me="<?php echo $show_remember_me; ?>" 
       use_placeholder_text="<?php echo $use_placeholder_text; ?>" ></div>
<?php } ?>