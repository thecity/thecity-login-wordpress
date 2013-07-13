function formatter_city_style_normal(self) { _city_style_render(self); }
function formatter_city_style_inline(self) { _city_style_render(self); }

function _city_style_render(self) {
  console.log("DISPLAY: " + self.defaults['display_style'] );
  if(self.defaults['display_style'] == 'city_style_inline') {
    jQuery('#'+self.defaults['city_login_div_id']+' li:first').addClass('grid-6-12');
    jQuery('#'+self.defaults['city_login_div_id']+' li:nth-child(2)').addClass('grid-6-12');
  } else { // city_style_normal
    jQuery('#'+self.defaults['city_login_div_id']+' li:first').addClass('grid-12-12');
    jQuery('#'+self.defaults['city_login_div_id']+' li:nth-child(2)').addClass('grid-12-12');
  }

  // Universal styling
  jQuery('#'+self.defaults['city_login_div_id']+' form').css({"padding": "10px", "background-color": "#FFFFFF"});
  jQuery('#'+self.defaults['city_login_div_id']+' li:nth-child(3)').addClass('formee-list');
  jQuery('#'+self.defaults['city_login_div_id']+' li:last').addClass('form-footer');
  jQuery('#'+self.defaults['city_login_div_id']+' #city_login_link').addClass('btn').addClass('btn_go').addClass('right');    
}