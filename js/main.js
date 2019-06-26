$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
      

  $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));

  
 

  $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function(){
    $('.tabs').tabs();
  });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $('#textarea1').val('');
  M.textareaAutoResize($('#textarea1'));

  $('#textarea2').val('English');
  M.textareaAutoResize($('#textarea2'));

  $(document).ready(function(){
    $('select').formSelect();
  });

  