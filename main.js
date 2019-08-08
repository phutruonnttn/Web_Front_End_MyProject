$(document).ready(function(){

	$('body').scrollspy({
		target: '#mainNav',
		offset: 75,
	})
	lightbox.option({
		'fadeDuration': 400,
		'imageFadeDuration': 500,
		'wrapAround': true,
	})
	var ngang  = $(window).width();
	var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 80 || ngang <=992) {
			$("#mainNav").addClass("navbar-scrolled");
			$(".titLogo").removeClass("actLogo");
			$(".logoZent").removeClass("actLogo");
			$(".content12").addClass("actLogo");
			
			$(".content11").addClass("actLogo");
			
		} else{
			$("#mainNav").removeClass("navbar-scrolled");
			$(".content12").removeClass("actLogo");
			$(".logoZent").addClass("actLogo");
			$(".titLogo").addClass("actLogo");
			$(".content11").removeClass("actLogo");
		}
	};
	navbarCollapse();
	$(window).scroll(navbarCollapse);

	setInterval(function(){
		ngang  = $(window).width();
		navbarCollapse();
	}, 1000);

	$("a[href*='#']:not([href='#])").click(function() {
		let target = $(this).attr("href");
		$('html,body').stop().animate({
			scrollTop: ($(target).offset().top - 71)
		}, 1000);
		event.preventDefault();
	});
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});
	$('#status').fadeOut();
	$('.containerpre').fadeOut();
	$('#preloader').delay(350).fadeOut('<sl></sl>ow');
	$('body').delay(350).css({
		'overflow': 'visible'
	});

	if($(".backToTop").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 100) {
				$(".backToTop").show()
			} else {
				$(".backToTop").hide()
			}
		});
		$(".backToTop").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}	
	$(function() {
		var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
		$('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
		$('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
		$('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
		$('.color-container-4').filterizr({ controlsSelector: '.color-controls-4', layout: 'packed' });
		$('.color-container-5').filterizr({ controlsSelector: '.color-controls-5', layout: 'horizontal' });
		$('.color-container-6').filterizr({ controlsSelector: '.color-controls-6', layout: 'vertical' });
		window.filterizr = f;
	});

	var section = document.getElementsByClassName("secClick");
	for (var i = 0; i < section.length; i++) {
		document.getElementsByClassName("secClick")[i].addEventListener("click", function(){
			var active = document.getElementsByClassName("active412")[0];
			active.classList.remove("active412");
			active = document.getElementsByClassName("act412")[0];
			active.classList.remove("act412");
			this.classList.add("active412");
			var vl = this.getAttribute('value');
			document.getElementsByClassName(vl)[0].classList.add("act412");
		})
	}
	$("#formSubcr").validate({
		submitHandler: function() {
			fDone();	
		}
	})
	function fDone(){
		swal({
			title: "Done!",
			text: "You have successfully subcribe!",
			icon: "success",
			button: "OK",
		});
	}

	$("#ordersForm").validate({
		rules: {
			name11:{
				required: true,
				minlength: 8,
			},
			Mail: {
				required: true,
				email: true,
			},
			Addr: {
				required: true,
			}
		},
		submitHandler: function() {
			$('#exampleModal').modal('hide');
			fDone2();	
		}
	})

	$("#contactForm1").validate({
		rules: {
			name:{
				required: true,
				minlength: 8,
			},
			email: {
				required: true,
				email: true,
			},
			subject: {
				required: true,
			},
			message: {
				required: true,
			},
		},
		submitHandler: function() {
			fDone3();	
		}
	})
	function fDone2(){
		swal({
			title: "Done!",
			text: "You have successfully order!",
			icon: "success",
			button: "OK",
		});
	}
	function fDone3(){
		swal({
			title: "Done!",
			text: "You have successfully send message!",
			icon: "success",
			button: "OK",
		});
	}
	
	$("#replyForm").validate({
		rules: {
			name:{
				required: true,
				minlength: 8,
			},
			email: {
				required: true,
				email: true,
			},
			subject: {
				required: true,
			},
			message: {
				required: true,
			},
		},
		submitHandler: function() {
			fDone4();	
		}
	})
	function fDone4(){
		swal({
			title: "Done!",
			text: "You have successfully post comment!",
			icon: "success",
			button: "OK",
		});
	}
	new WOW().init();
})