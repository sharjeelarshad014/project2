var winWidth = $(window).width(),
winHeight = $(window).height(),
popCls,
arrayUrl = window.location.href.split("/"),
baseUrl = arrayUrl[0] + "//" + arrayUrl[2],
ccount = 0;

$(function () {
	// Do after Page ready
	doOnReady();
});

$(window).on('load', function () {
	// Do after Page ready
	doOnLoad();
});

$(window).on('resize orientationchange', function () {
	// Do on resize
	doOnResize();
});

$(window).on('scroll', function () {
	// Do on scroll
	doOnScroll();
});

$(document).keyup(function (e) {
	if (e.keyCode == 27) {
		// Do on ESC press
	}
});

function doOnReady() {
	// OnReady Functions
	AOS.init();
	initCarousel('.js-carousel', 3, 1, false, true ,false, false, false);
	// NavFor(target, slideShowFor, targetNavFor, slideShowNav, centerStatus, verticalStatus) 
	headerFixed();
	tabsInit();
	acordianInit();
	dropInit();
	// initSwiper();
	getCopyYear();
	initMenuActive('.js-menu');
	$('body').on('click', '.js-menubtn:not(.is--active)', function () {
		sideMenuOpen();
	}).on('click', '.js-menubtn.is--active', function () {
		sideMenuClose();
	}).on('click', '.js-menuclose', function () {
		sideMenuClose();
	}).on('click', '.js-defaultOverlay', function () {
		sideMenuClose();
	}).on('click', '.js-dropdownbtn:not(.is--active)', function () {
        dropdownclose();
        dropdownopen($(this));
    }).on('click', '.js-dropdownbtn.is--active', function () {
        dropdownclose();
    }).on('click', function (e) {
        var gdd = $('.dropdown-box');
        if (!gdd.is(e.target) && gdd.has(e.target).length === 0) {
            dropdownclose();
        }
    });
}

function doOnLoad() {
	// OnLoad Functions
	AOS.init();
	headerFixed();
	activeLink();
	initLazyLoad('[data-src]');
	$('.js-loaderscreen').fadeOut();
}

function doOnResize() {
	// OnResize Functions
	AOS.init();
	winWidth = $(window).width(), winHeight = $(window).height();
	initLazyLoad('[data-src]');
	initMenuActive('.js-menu');
	dropInit();

}

function doOnScroll() {
	// OnScroll Functions
	AOS.init();
	headerFixed();
	initLazyLoad('[data-src]');
	initMenuActive('.js-menu');
}

function sideMenuOpen() {
	$('.js-menubtn').addClass('is--active');
	$('.navigation').not('.is--open').addClass('is--open');
	$('body').addClass('is--menu');
}

function sideMenuClose() {
	$('.js-menubtn').removeClass('is--active');
	$('.navigation.is--open').removeClass('is--open');
	$('body').removeClass('is--menu');
}

function tabsInit() {
    $('.js-tab-link').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var targetId = $this.attr('data-tab-id');
        var tabsName = $this.attr('data-tab-name');
        $('[data-tab-name="' + tabsName + '"]').removeClass('is-active');
        // $this.addClass('is-active');
        $('[data-tab-id="'+targetId+'"]').addClass('is-active');
        $('.tab-'+targetId).addClass('is-active');
    });
}

function acordianInit() {
    $('body').on('click','.js-accor-link:not(.is-active)',function(e) {
        e.preventDefault();
        var $this = $(this);
        var targetId = $this.attr('data-accor-id');
        var accorsName = $this.attr('data-accor-name');
        $('[data-accor-name="' + accorsName + '"]').removeClass('is-active');
        $('[data-accor-name="' + accorsName + '"]').parents('.accor-row').removeClass('open-acordian');
        $this.addClass('is-active');
        $this.parents('.accor-row').addClass('open-acordian');
        $this.parents('.accor-row').next('.accor-'+targetId).addClass('is-active');
    }).on('click','.js-accor-link.is-active',function(e) {
        e.preventDefault();
        var $this = $(this);
        var targetId = $this.attr('data-accor-id');
        $this.removeClass('is-active');
        $this.parents('.accor-row').removeClass('open-acordian');
        $this.parents('.accor-row').next('.accor-'+targetId).removeClass('is-active');
    });
}

function initCarousel(target, stshow, stscroll, centerstatus, dotstatus, verticalStatus,focusOnSelect,variableWidth) {
	var $target = $(target).not('.slick-initialized');
	$target.each(function (i, e) {
		var $e = $(e);
		var itemDesktop = $e.data('item-desktop');
		var desktopMini = $e.data('item-desktopmini');
		var itemIpadPro = $e.data('item-ipad-pro');
		var itemTablet = $e.data('item-tablet');
		var itemMobile = $e.data('item-mobile');
		var sliderArrows = $e.parents('.carousel-sec').find('.js-sliderArrows');
		var sliderDots = $e.parents('.carousel-sec').find('.js-sliderDots');
		var sliderArrowLeft = $e.parents('.carousel-sec').find('.js-sliderArrows').data('arrow-left');
		var sliderArrowsRight = $e.parents('.carousel-sec').find('.js-sliderArrows').data('arrow-right');
		var bannerPrev = '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="'+sliderArrowLeft+'"></i></button>';
		var bannerNext = '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="'+sliderArrowsRight+'"></i></button>';
		$e.slick({
			infinite: true,
			slidesToShow: stshow,
			slidesToScroll: stscroll,
			appendArrows: sliderArrows,
			appendDots: sliderDots,
			prevArrow: bannerPrev,
            nextArrow: bannerNext,
			centerMode: centerstatus,
			centerPadding: '0',
			focusOnSelect: focusOnSelect,
			variableWidth: variableWidth,
			dots: dotstatus,
			vertical: verticalStatus,
			autoplay: true,
			cssEase: 'cubic-bezier(0, 0, 0.250, 0.800)',
			autoplaySpeed: 3000,
			responsive: [{
				breakpoint: 1600,
				settings: {
					slidesToShow: itemDesktop
				}
			}, {
				breakpoint: 1200,
				settings: {
					slidesToShow: desktopMini
				}
			},  {
				breakpoint: 992,
				settings: {
					slidesToShow: itemIpadPro,
					vertical: false
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: itemTablet,
					vertical: false
				}
			}, {
				breakpoint: 375,
				settings: {
					slidesToShow: itemMobile,
					vertical: false
					// arrows: false,
					// dots: true
				}
			}]
		});
	});
}

function headerFixed() {
    var scroll = $(window).scrollTop();
	var headerht = $('.header').outerHeight();
	if (scroll > headerht) {
		$('.js-fixed').addClass("sticky-header");
	} else {
		$('.js-fixed').removeClass("sticky-header");
	}
}

function activeLink(){
	var currentUrl = window.location.pathname;
	$('[href="'+currentUrl+'"]').parent('li').siblings().removeClass('is--active');
	$('[href="'+currentUrl+'"]').parent('li').addClass('is--active');
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function getCopyYear() {
    var copyright = new Date().getFullYear();
    $(".copyrightyear").text(copyright);
}

function initLazyLoad(target){
	var $target = $(target);
	$target.each(function (i, e) {
		var $e = $(e);
		if ($e.isInViewport()){
			var datasrc = $e.data('src');
			$e.attr('src', datasrc);
			$e.removeAttr('data-src');
		}
	});
}

function dropdownopen(target) {
    $('body').addClass('is--dropdown');
    $(target).addClass('is--active');
    $(target).parent('.dropdown-box').addClass('show-dd');
}

function dropdownclose() {
    $('body').removeClass('is--dropdown');
    $('.js-dropdownbtn').removeClass('is--active');
    $('.js-dropdownbtn').parent('.dropdown-box').removeClass('show-dd');
}

function initMenuActive(target) {
	var sections = $('[data-scrolltarget]'),
		nav = $(target),
		nav_height = nav.outerHeight(),
		sec_pos = $(this).scrollTop(),
		oTop = 0,
		top,
		bottom,
		winWidth = $(window).width();
	sections.each(function(i,e) {
		var $e = $(e);
		if(winWidth < 992){
			oTop = $e.attr('data-md-ofsettop');
		} else {
			oTop = $e.attr('data-ofsettop');
		}
		if(oTop){
			top = $e.offset().top - (nav_height + parseInt(oTop));
		} else {
			top = $e.offset().top - nav_height;
		}
		bottom = top + $e.outerHeight();
		if (sec_pos >= top && sec_pos <= bottom) {
			nav.find('li').removeClass('is--active');
			sections.removeClass('is--oTop');
			$e.addClass('is--oTop');
			nav.find('[data-scrollbtn="'+$e.attr('data-scrolltarget')+'"]').parent('li').addClass('is--active');
		}
	});
}
function dropInit(){
	if(winWidth < 992){
		$('.js-menu').click(function(){
			$('.js-menu').find('.dropdown').slideToggle();
			$('.js-menu').siblings().find('.dropdown').slideUp();
		});
	}
}


