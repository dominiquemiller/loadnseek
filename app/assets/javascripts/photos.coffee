# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on "page:change", ->
  $('#photos-section').fadeIn(1200)

$(document).on "page:change", ->
  $('#large-photo').fadeIn(1200)
  
