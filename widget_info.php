<?php
  if( empty($subdomain_key) ) { echo 'Subdomain not set'; } else {  ?>

  <form method="post" action="<?php echo 'https://'.$subdomain_key.'.onthecity.org/session/'; ?>">
    <div class="">Login</div>
    <input type="text" name="login" id="login">
    <div class="">Password</div>
    <input type="password" name="password" id="password">
    <div id="remember-me"><input type="checkbox" value="yes" name="remember_me" id="remember_me" class="">
    <label for="remember_me">Keep me logged in</label>
    </div>      
    <input type="submit" value="Login" />
  </form>

<?php } ?>