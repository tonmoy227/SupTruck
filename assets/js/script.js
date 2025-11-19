/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.st-scrollup').fadeIn();
		} else {
			$('.st-scrollup').fadeOut();
		}
	});
	$('.st-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.marquee-left').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});

	const menuItems = document.querySelectorAll('#main-nav > li');
	let originalActive = document.querySelector('#main-nav > li.active');
	menuItems.forEach(li => {
		li.addEventListener('mouseenter', () => {
			menuItems.forEach(item => item.classList.remove('active'));
			li.classList.add('active');
		});
	});
	document.querySelector('#main-nav').addEventListener('mouseleave', () => {
		menuItems.forEach(item => item.classList.remove('active'));
		originalActive.classList.add('active');
	});

	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});
	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});
	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
	});
	if($('.st-split-1').length) {
		var txtSplit = $('.st-split-1');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});
		});
	}
	if($('.st-split-2').length) {
		var txtSplit = $('.st-split-2');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words",
				linesClass: "split-line"
			});
		});
	}
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){


			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ; 

			}
			setTimeout(function() {
				var swiper2 = new Swiper(".st-hero-slider", {
					loop: true,
					spaceBetween: 0,
					speed: 1000,
					slidesPerView: 1,
					effect: "fade",
					autoplay: {
						enabled: true,
						delay: 5000
					},
				}); 
			}, 700);
		})		
	});
	if($('.tx-split-text').length) {
		var st = jQuery(".tx-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			gsap.set(el, { perspective: 400 });
			if( jQuery(el).hasClass('split-in-up') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					x: 15,
					ease: "back.out",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				rotationX: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: .5, 
				stagger: 0.02,
			});
		});
	};
	if ($('.st-spon-slider').length > 0 ) {
		var slider = new Swiper('.st-spon-slider', {
			spaceBetween: 0,
			slidesPerView: 7,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 6,
				},
				'1200': {
					slidesPerView: 6,
				},
				'992': {
					slidesPerView: 5,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 3,
				},
				'480': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}; 


	if ($('.st-testi-slider').length > 0 ) {
		var slider = new Swiper('.st-testi-slider', {
			spaceBetween: 28,
			slidesPerView: 3,
			loop: true,
			// autoplay: {
			// 	enabled: true,
			// 	delay: 6000
			// },
			speed: 1000,
			pagination: {
				el: ".st-testi-pagi",
				clickable: true,
			},
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 2,
				},
				'1200': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'992': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'992': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'768': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};

	$(window).on("load",function(){
		$(".content").mCustomScrollbar();
	});

	gsap.utils.toArray(' .rotate_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 80%",
				end: "top 10%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, rotate: -180})
	});

	gsap.utils.toArray(' .left_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 80%",
				end: "top 10%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, x: "300"})
	});

	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "300"})
	});
	gsap.utils.toArray(' .top_view_2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 50%",
				end: "top 20%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "-300"})
	});
	gsap.utils.toArray(' .workp').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 70%",
				end: "top 20%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'left'})
		.from(el, {  scale: 1, marginLeft: "-40%"})
	});

	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		}); 
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		}); 
	});

	if($('.ed-footer-1-menu').length) {
		document.querySelector('.ed-footer-1-menu').addEventListener('click', function(event) {
			const link = event.target.closest('li a');
			if (!link) return;
			event.preventDefault();
			const dropdown = link.nextElementSibling;
			if (!dropdown || !dropdown.classList.contains('has-dropdown')) return;
			document.querySelectorAll('.has-dropdown').forEach(ul => {
				if (ul !== dropdown) ul.style.display = 'none';
			});
			dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
		});
	}


})(jQuery);