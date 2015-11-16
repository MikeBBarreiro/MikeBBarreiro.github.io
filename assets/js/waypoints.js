(function(){
  'use strict';

  $(document).ready(function(){
    // $(".a").delay(1100).animate({left:'1850px', top:'1500px'}, 1000, function(){
    //
    // });
    // $(".a").delay(1100).animate({left:'80%', top:'120%'}, 1000, function(){
    //
    // });
  });
////////////////// WAYPOINTS START ///////////////////

  $('.wp1').waypoint(function(){
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '100%'
  });

  $('.wp2').waypoint(function(){
    $('.wp2').addClass('animated fadeIn');
  }, {
    offset: '100%'
  });

  $('.wp3').waypoint(function(){
    $('.wp3').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });

///////////// My Latest Works ////////////
//   $('.wp4').waypoint(function(){
//     $('.wp4').addClass('animated rubberBand');
//   }, {
//     offset: '100%'
//   });
//
//   $('.wp5').waypoint(function(){
//     $('.wp5').addClass('animated fadeInUp');
//   }, {
//     offset: '100%'
//   });
//
//   $('.wp6').waypoint(function(){
//     $('.wp6').addClass('animated zoomIn');
//   }, {
//     offset: '100%'
//   });
// //////////// END my latest works //////////
//
//   $('.wp7').waypoint(function(){
//     $('.wp7').addClass('animated zoomIn');
//   }, {
//     offset: '90%'
//   });
//
// // More Info //
//   $('.wp8').waypoint(function(){
//     $('.wp8').addClass('animated bounceInUp');
//   }, {
//     offset: '100%'
//   });
//
//   $('.wp9').waypoint(function(){
//     $('.wp9').addClass('animated fadeInRight');
//   }, {
//     offset: '100%'
//   });
//
//   $('.wp10').waypoint(function(){
//     $('.wp10').addClass('animated fadeInRightBig');
//   }, {
//     offset: '100%'
//   });
//

////////////////// WAYPOINTS END ///////////////////

})();
