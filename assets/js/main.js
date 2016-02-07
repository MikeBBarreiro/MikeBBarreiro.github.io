;(function(){

	var backImg = [
    'assets/img/stormtrooper.jpg',
    'assets/img/Space-Beautiful-Design.jpg',
    'assets/img/darth_vader_snow_.jpg',
		'assets/img/tropics_palm.jpg',
		'assets/img/neb.jpg',
		'assets/img/obi-wan-kenobi-vs-darth-vadewallpaper.jpg'
  ];
	var today = new Date();
  var day = today.getDate();
	var bkgrndimg = backImg[day % backImg.length];
  document.getElementById('daily').style.backgroundImage = 'url(' +backImg[day % backImg.length]+ ')'
	$('.bg').setAttribute('data-ibg-bg', bkgrndimg);
  console.log('Date: ', day, today);


	$(".bg").interactive_bg({
		 strength: 15,
		 scale: 1.05,
		 animationSpeed: "100ms",
		 contain: true,
		 wrapContent: false
	 });

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

	var versionNumb = $('#version').html();

	$(document).ready(function(){
		Command: toastr["info"]('This site is at version ' + versionNumb);
   	animateDiv();
 		$('.a').click(function(){
       var explotion = $(".a").addClass("changeBackground");
       explotion.fadeOut( 200, function() {
     		// Animation complete.
   		});
			setTimeout(function(){ explotion.remove() }, 3000);
  	});
	});

  // change background size on window resize
  // $(window).resize(function() {
  //     $(".bg > .ibg-bg").css({
  //       width: $(window).outerWidth(),
  //       height: $(window).outerHeight()
  //     })
  //  })



	toastr.options = {
		"closeButton": true,
	  "debug": false,
	  "newestOnTop": false,
	  "progressBar": true,
	  "positionClass": "toast-bottom-center",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "5000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
};
//
// toastr.info("This is a message <img src=\"http://news.bbcimg.co.uk/media/images/71977000/jpg/_71977649_71825880.jpg\" />", "Toaster Popup");


function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 30;
    var w = $(window).width() - 30;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

window.playSound = function(){
	var audio = document.getElementById("audio");
	audio.volume = 0.1;
	audio.play();

	// gameInit();
}

// function gameInit(){
// 	var enemy = $('.b');
// 	enemy.clone().insertAfter(enemy) * 2;
//
// 	if(enemy > 5){
// 		enemy.remove();
// 	}
// }

})(jQuery)
