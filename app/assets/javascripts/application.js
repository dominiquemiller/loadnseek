// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).on("page:change", function() {
  $('.photo-index').on('mouseenter', function() {
    $('.title-pop').animate({'top': '-100px', 'opacity': '1'}, 'fast');
  });
  $('.photo-index').on('mouseleave', function() {
    $('.title-pop').animate({'top': '0px', 'opacity': '0'}, 'fast');
  });
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      alert("latitude:" + lat + "  longitude:" + lon);
   });
  }
});
