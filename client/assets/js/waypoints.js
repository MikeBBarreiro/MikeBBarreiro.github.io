(function(){
  'use strict';

  $(document).ready(function(){
  });
////////////////// WAYPOINTS START ///////////////////

  $('.wp1').waypoint(function(){
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '100%'
  });

  $('.wp2').waypoint(function(){
    $('.wp2').addClass('animated fadeInRight');
  }, {
    offset: '100%'
  });

  $('.wp3').waypoint(function(){
    $('.wp3').addClass('animated flipInY');
  }, {
    offset: '100%'
  });

  $('.wp4').waypoint(function(){
    $('.wp4').addClass('animated swing');
  }, {
    offset: '100%'
  });

  $('.wp5').waypoint(function(){
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });

  $('.wp6').waypoint(function(){
    $('.wp6').addClass('animated zoomIn');
  }, {
    offset: '100%'
  });


////////////////// WAYPOINTS END ///////////////////

  //function onClick(){
    //debugger;
    //document.getElementById('bleeP').play();
    //var bleep = new Audio();
    //bleep.src = '/audio/bleep.mp3';
  //}

})();
