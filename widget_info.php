<?php
  $subdomain_key = trim($subdomain_key);
  if( empty($subdomain_key)) { echo 'Subdomain not set'; } else {  ?>
  <div id="thecity_login" subdomain="<?php echo $subdomain_key; ?>"></div>
<?php } ?>