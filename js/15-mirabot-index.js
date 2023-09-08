
$(function(){
	//$('header').addClass('white');
    //fullpage
    $('#fullpage').fullpage({
		responsiveWidth: 520,
        normalScrollElements: '.scrollable-element',
        navigation:true,
        navigationPosition: 'right',
        navigationTooltips: ['HOME', 'BEAUTY SOLUTION', 'RESERVATION' , 'FEATURES' , 'MANAGEMENT', 'BENEFITS'],
        afterLoad : function(anchorLink, index){
            setTimeout(function() {
                $('.fp-completely').addClass('com');
            }, 100);
        },
		onLeave: function(index, nextIndex, direction) {
			if (nextIndex == 1 || nextIndex == 3 || nextIndex == 6 || nextIndex == 7) {
				$('header').addClass('white');
			} else {
				$('header').removeClass('white');
			}
		}
    });

	//section0
	var vis = new Swiper(".vis .swiper",{
		effect: "fade",
		loop:true,
		autoplay:{
			delay:5000,
			disableOnInteraction: false,
        },
	});		
	
	//section3
	var feat = new Swiper(".feat .mySwiper", {
	    slidesPerView: 2,
	    spaceBetween:10,
	    centeredSlides:true,
		
		
	  //slidesPerView: 3,
      //centeredSlides: true,
      //spaceBetween: 30,
	  loop:true,
	  loopedSlides: 5,
      //breakpoints: {
       
      //  768: {
      //    spaceBetween: 20,
      //  },
      //  1279: {
       //   spaceBetween: 30,
       // },
      //},
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
			
	
	
	$(document).ready(function() {
	  $('.sect4-tit').hover(
		function() {
		  var $thisParent = $(this);
		  var index = $thisParent.index();

		  // Remove 'on' class from all titles and images
		  $('.sect4-tit').removeClass('on');
		  $('.sect4-right-img').removeClass('on');

		  // Add 'on' class to the hovered title and corresponding image
		  $thisParent.addClass('on');
		  $('.sect4-right-img').eq(index).addClass('on');
		},
		function() {
		  // Remove 'on' class from all titles and images when mouse leaves
		  $('.sect4-tit').removeClass('on');
		  $('.sect4-right-img').removeClass('on');
		}
	  );
	});


	  $('.slideshow').slick({
	    autoplay: false,
		slidesToShow : 5,	
		slidesToScroll : 5,
		autoplaySpeed: 2000,
		dots: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 786,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		  ]
	  });
});

document.addEventListener("DOMContentLoaded", function(){
	//chat
		const chat = document.querySelector(".chat-bot");
		const chatCont = document.querySelector(".chat-bot-cont");
		const chatBg = document.querySelector(".chat-pop-up-box");

		chat.addEventListener("click",() => {
			console.log('ss');
			const isChatContOn = chatCont.classList.contains("chat-cont-on");
			const isChatBgOn = chatBg.classList.contains("chat-pop-up-box-on");
			
			if(isChatContOn){
				chatCont.classList.remove("chat-cont-on");
			} else{
				chatCont.classList.add("chat-cont-on");
			}
			
			if(isChatBgOn){
				chatBg.classList.remove("chat-pop-up-box-on");
			} else{
				chatBg.classList.add("chat-pop-up-box-on");
			}
		});
		
		chatBg.addEventListener("click", () => {
			chatCont.classList.remove("chat-cont-on");
			chatBg.classList.remove("chat-pop-up-box-on");
		});
})