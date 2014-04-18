$(document).ready(function(){

  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    pager: false,
    auto: true,
    autoHover: true
  });
  
  if($('.calendar').length > 0) {
    var eventsArray = [
      { start: '2013-10-02', end: '2013-10-03', title: 'Blend Web Mix' },
      { start: '2013-12-10', end: '2013-12-12', title: 'LeWeb 13' }
    ],
    calendar = $('.calendar').clndr({
      template: $('#template-calendar').html(),
      weekOffset: 1,
      daysOfTheWeek: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      events: eventsArray,
      multiDayEvents: {
        startDate: 'start',
        endDate: 'end'
      }
    });
  }

  $(".btn-nav").click(function(e){
    e.preventDefault();
    $(this).toggleClass("open");
    $('[role="navigation"]').stop().slideToggle("600");
  });

  $('#contact-form').submit(function(){
    alert('Formulaire en construction');
    return false;
  });

});