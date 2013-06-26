<?php
  if( empty($subdomain_key) ) { echo 'Subdomain not set'; } else {  ?>

  <div id="thecity_login"></div>
  <script type="text/javascript">
    // jQuery.noConflict();
    // jQuery(document).ready(function($) {
    //   TheCityLogin.start({"subdomain" : "<?php echo $subdomain_key; ?>"});
    // });    
  </script>

<?php } ?>