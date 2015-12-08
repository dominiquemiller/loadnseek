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
//= require jquery-ui
//= require jquery-ui/draggable
//= require bootstrap
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).on("page:change", function() {
  $('.photo-index').on('mouseenter', function() {
    $('.title-pop').animate({'top': '1px', 'opacity': '0'}, 'fast');
  });
  $('.photo-index').on('mouseleave', function() {
    $('.title-pop').animate({'top': '0px', 'opacity': '0'}, 'fast');
  });
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var apiKey = "6caa0cf4dc9351c606b054d9e94cdb6f";
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + apiKey, function(data){
        console.log(data.weather[0].description);
        $(".weather").html("In " + data.name + " it is currently: " + Math.round((data.main.temp * 9/5) - 459.67));
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $(".weather-icon").html("<img src='" + icon + "'>");
      });
   });
 }
 $.getJSON("/photos.json", function(data){
   console.log(data[0].title);
 });
});

$(document).on("page:change", function() {
  $('.photo-index').draggable({
    cursur: 'move',
    snap: '#content',
  });
  $('#content').droppable({
    drop: handleDropEvent
  });
  function handleDropEvent(event, ui){
    var draggable = ui.draggable;
    console.log(draggable);
    alert('Testing, my picture is' + draggable.attr('id'));

  }
});
