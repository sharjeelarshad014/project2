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
	browserDetect();
	addClassIOS();
	initCarousel('.js-carousel', 3, 1, false, true ,false, false, false);
	// NavFor(target, slideShowFor, targetNavFor, slideShowNav, centerStatus, verticalStatus) 
	headerFixed();
	parallaxeffect('.js-parallax');
	targetScroll();
	tabsInit();
	acordianInit();
	dropInit();
	// initSwiper();
	initTimer('.js-timer');
	ChangeToSvg();
	getCopyYear();
	checkviewport('.js-viewport');
	initEqualHeight();
	bindPopupEve();
	dataTrim();
	initToggleClass('.ac-hold','is--active','.pAc-hold');
	initSameOnWhatsapp();
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
    }).on('paste','.js-byphone', function(event) {
		if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
			event.preventDefault();
		}
	}).on('keypress','.js-byphone', function(event) {
		if (event.which < 48 || event.which > 58) {
			return false;
		}
	}).on('drop','.js-byphone', function(event) {
		event.preventDefault();
	});

	$(document).on("focus", ".js-input-check", function (e) {
        $(this).parent().addClass('is--focus');
    }).on("blur", ".js-input-check", function (e) {
        $(this).parent().removeClass('is--focus');
    });
}

function doOnLoad() {
	// OnLoad Functions
	AOS.init();
	checkFieldval($('.js-input-check'));
	headerFixed();
	ChangeToSvg();
	activeLink();
    initEqualHeight();
	initIntlInput('.js-byphone');
	checkviewport('.js-viewport');
	initLazyLoad('[data-src]');
	initRatioHeight('.js-ratio169','16','9');
	initRatioHeight('.js-ratio43','4','3');
	$('.js-loaderscreen').fadeOut();
}

function doOnResize() {
	// OnResize Functions
	AOS.init();
	winWidth = $(window).width(), winHeight = $(window).height();
	initLazyLoad('[data-src]');
	initRatioHeight('.js-ratio169','16','9');
	initRatioHeight('.js-ratio43','4','3');
	initEqualHeight();
	targetScroll();
	initMenuActive('.js-menu');
	ChangeToSvg();
	dropInit();

}

function doOnScroll() {
	// OnScroll Functions
	AOS.init();
	headerFixed();
	parallaxeffect('.js-parallax');
	checkviewport('.js-viewport');
	initLazyLoad('[data-src]');
	initRatioHeight('.js-ratio169.jsratioScroll','16','9');
	initRatioHeight('.js-ratio43.jsratioScroll','4','3');
	initMenuActive('.js-menu');
}

function browserDetect() {
	navigator.sayswho = function () {
		var ua = navigator.userAgent,
		tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE ' + (tem[1] || '');
		}
		if (M[1] === 'Chrome') {
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if (tem != null) return tem.slice(1).join('').replace('OPR', 'Opera');
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
		if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
		return M.join(' ');
	}();
	$('body').addClass(navigator.sayswho);
}

function addClassIOS() {
    if (navigator.appVersion.indexOf('iPhone') >= 0 || navigator.appVersion.indexOf('iPad') >= 0) {
        $('body').addClass('browserIos');
    } else {
        $('body').removeClass('browserIos');
    }
}

function ChangeToSvg() {
	jQuery('img.js-tosvg').each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function (data) {
			var $svg = jQuery(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			}
			$img.replaceWith($svg);
		}, 'xml');
	});
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

function checkFieldval(element) {
    $(element).each(function(i, index) {
        inputValue = $(index).val().length;
        if(inputValue > 0) {
            $(index).parent().addClass('is--used');
        } else {
            $(index).parent().removeClass('is--used');
        }
    });
    $(element).keyup(function(i, index){
        var getTar = $(i.currentTarget);
        inputValue = $(getTar).val().length;
        if(inputValue > 0) {
            $(getTar).parent().addClass('is--used');
        } else {
            $(getTar).parent().removeClass('is--used');
        }
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

function initCarousalNavFor(target, slideShowFor, targetNavFor, slideShowNav, centerStatus, verticalStatus) {
    var $target = $(target).not('.slick-initialized');
    var $targetNav = $(targetNavFor).not('.slick-initialized');
    $target.on('init', function (event, slick, direction) {
        console.log(slick.currentSlide + 1, slick.$slides.length);
    });
    $target.each(function (i,e) {
		var $e = $(e);
		var sliderArrows = $e.parents('.carousel-navfor').find('.js-sliderArrows');
		var sliderArrowLeft = sliderArrows.data('arrow-left');
		var sliderArrowsRight = sliderArrows.data('arrow-right');
		var bannerPrev = '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="' + sliderArrowLeft + '"></i></button>';
		var bannerNext = '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="' + sliderArrowsRight + '"></i></button>';
        $e.slick({
            slidesToShow: slideShowFor,
            slidesToScroll: 1,
            arrows: true,
            appendArrows: sliderArrows,
			infinite: true,
            dots: false,
			centerPadding: '2px',
			prevArrow: bannerPrev,
            nextArrow: bannerNext,
            centerMode: centerStatus,
			vertical: verticalStatus,
            asNavFor: targetNavFor,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
    $targetNav.each(function (i,e) {
		var $e = $(e);
        $e.slick({
            slidesToShow: slideShowNav,
            slidesToScroll: 1,
            arrows: false,
			infinite: true,
            dots: false,
			centerPadding: '2px',
            asNavFor: target,
            centerMode: centerStatus,
			vertical: verticalStatus,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
    $target.on('afterChange', function (event, slick, direction) {
        console.log(slick.currentSlide + 1, slick.$slides.length);
        var slickCurrentSlide = slick.currentSlide + 1;
        var slickTotal = slick.$slides.length;
        $('.js-count-text').text('Video ' + slickCurrentSlide + ' of ' + slickTotal);
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

function parallaxeffect(target){
	$(target).css('background-position', "-" + (1920 - $(window).width()) / 2 + "px " + -(Math.max(document.body.scrollTop, document.documentElement.scrollTop) / 4) + "px");
}

function targetScroll() {
    $('[data-scrollbtn]').on('click',function () {
		var t = $(this).data('scrollbtn'),
			o = $('[data-scrolltarget='+t+']'),
			oTop = 0;
		if(winWidth < 992){
			oTop = o.attr('data-md-ofsettop');
		} else {
			oTop = o.attr('data-ofsettop');
		}
		if(oTop){
			$('html,body').stop().animate({
				scrollTop: o.offset().top - oTop
			}, 500, 'swing');
		} else {
			$('html,body').stop().animate({
				scrollTop: o.offset().top
			}, 500, 'swing');
		}
	});
}

function initTimer(target){
	var self = $(target);
	if(self.length){
		if (self.isInViewport()) {
			if(ccount == 0){
				self.countTo();
			}
			ccount = 1;
		}
	}
}

function activeLink(){
	var currentUrl = window.location.pathname;
	$('[href="'+currentUrl+'"]').parent('li').siblings().removeClass('is--active');
	$('[href="'+currentUrl+'"]').parent('li').addClass('is--active');
}

function initIntlInput(target) {
	if ($(target).length > 0) {
		var $target = $(target);
		$target.each(function(i,e){
			var $e = $(e);
			var dcountry = $e.data('defaultcountry');
			$e.intlTelInput({
				geoIpLookup: function(callback) {
					var referrer;
					$.ajax({
						url: 'https://crmalert.gocrmlive.com/api/GeoLocations/FindGeoLocation',
						type: 'GET',		
						data: {}, // Additional parameters here
						dataType: 'json',
						aync: false,
						success: function (data) {	
							referrer = document.referrer;
							const JsonLocation = JSON.stringify(data);			
							createCookie('ipcountrydata', JSON.stringify(data), 0.5);			
							if (data.country_code) {								
								callback(data.country_code);
							}
							sendVisitor(data.ip,data.country_code,JsonLocation);
						},
						error: function (err) {
							console.log(err);
						}
					});
				},
				initialCountry: 'auto',
				nationalMode: true,
				separateDialCode: true,
				autoPlaceholder: 'polite',
				utilsScript: "/junaid1/assets/js/utils.js",
			});
			setTimeout(function(){
				var changeCountry = $e.intlTelInput("getSelectedCountryData");
				$e.parents('.iti-group').find('.countryname').val(changeCountry.name);
				$e.parents('.iti-group').find('.countrycode').val(changeCountry.iso2);
				$e.parents('.iti-group').find('.dialcode').val(changeCountry.dialCode);
			},1000);
		});
		$target.on('countrychange', function(e, countryData){
			var $e = $(e.currentTarget);
			var changeCountry = $e.intlTelInput("getSelectedCountryData");
			$e.parents('.iti-group').find('.countryname').val(changeCountry.name);
			$e.parents('.iti-group').find('.countrycode').val(changeCountry.iso2);
			$e.parents('.iti-group').find('.dialcode').val(changeCountry.dialCode);
		});
	}
}

function initSameOnWhatsapp(){
	$('.js-sameonwhatsapp').on('change', function () {
        var self = $(this);
		self.each(function(i, e){
			var $e = $(e);
			var selform = $e.parents('form');
			var intlgroupnotwhatsapp = selform.find('.iti-group:not(.whatsappfield)');
			var intlgroupwithwhatsapp = selform.find('.iti-group.whatsappfield');
			var intl01 = intlgroupnotwhatsapp.find('.js-byphone');
			var intl02 = intlgroupwithwhatsapp.find('.js-byphone');
			var intl01get = intl01.intlTelInput("getSelectedCountryData");
			if ($e.is(":checked") == true) {
				intl02get = intl02.intlTelInput("getSelectedCountryData");
				oldnumber = intlgroupwithwhatsapp.find('.form-control').val();
				oldcountryname = intlgroupwithwhatsapp.find('.countryname').val();
				oldcountrycode = intlgroupwithwhatsapp.find('.countrycode').val();
				olddialcode = intlgroupwithwhatsapp.find('.dialcode').val();
				intl02.intlTelInput("setCountry", intl01get.iso2);
				intlgroupwithwhatsapp.find('.form-control').val(intl01.val());
				intlgroupwithwhatsapp.find('.countryname').val(intl01get.name.replace(/ .*/,''));
				intlgroupwithwhatsapp.find('.countrycode').val(intl01get.iso2);
				intlgroupwithwhatsapp.find('.dialcode').val(intl01get.dialCode);
			} else if ($e.is(":not(:checked)")) {
				intl02.intlTelInput("setCountry", intl02get.iso2);
				intlgroupwithwhatsapp.find('.form-control').val(oldnumber);
				intlgroupwithwhatsapp.find('.countryname').val(oldcountryname);
				intlgroupwithwhatsapp.find('.countrycode').val(oldcountrycode);
				intlgroupwithwhatsapp.find('.dialcode').val(olddialcode);
			}
		});
    });
}



$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function checkviewport(target){
	var $target = $(target);
	$target.each(function (i, ele) {
		var $ele = $(ele);
		if ($ele.isInViewport()){
			$ele.addClass('isOnScreen');
		} else {
			$ele.removeClass('isOnScreen');
		}
	});
}

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

function initRatioHeight(target,ratio1,ratio2) {
	if ($(target).length > 0) {
		setTimeout(function(){
			var $target = $(target);
			$target.each(function(i,e) {
				var $e = $(e);
				if ($e.isInViewport()){
					var width = $e.width();
					var height = $e.height();
					var rat1 = ratio1;
					var rat2 = ratio2;
					var ratio  = width / rat1;
					var calculated_height = ratio * rat2;
					$e.css("height", calculated_height);
					$e.parent('.js-ratioHtP').css("height", calculated_height);
					$e.removeClass('jsratioScroll');
				}
			});
		},100);
	}
}

function openPopup(target) {
    var popnam = target;
    popCls = popnam.substring(1, popnam.length);
    $('body').addClass(popCls);
    $('html').addClass('popup-is-active');
    $(target).show();
    $(target).closest('.c-popup').show();
    setTimeout(function() {
        $(target).addClass('active');
        $(target).closest('.c-popup').addClass('popup--open');
    }, 10);
}

function closePopup() {
    $('body').removeClass(popCls);
    if ($('.c-popup .active').length) {
        // Close Popup
        $('.c-popup .active').removeClass('active');
        $('.c-popup').removeClass('popup--open');
        setTimeout(function() {
            $('.c-popup .popup').hide();
            $('.c-popup').hide();
            $('html').removeClass('popup-is-active');
        }, 310);
    }
}

function closeSelfPopup(target) {
    var self = $(target.currentTarget); 
    $('body').removeClass(popCls);
    self.parent('.popup').removeClass('active');
    setTimeout(function() {
        self.parent('.popup').hide();
        if($('.popup').hasClass('active') == false){
            $('.c-popup').removeClass('popup--open');
            $('.c-popup').hide();
            $('html').removeClass('popup-is-active');
        }
    },310);
}

function bindPopupEve() {
    // Popup Open
    $('.js-popup-link').click(function(e) {
        e.preventDefault();
        if ($(this).data('popup')) {
            var target = $(this).data('popup');
        } else {
            var target = $(this).attr('href');
        }
        openPopup(target);
        ChangeToSvg();
    });
    // Popup Close
    $('.js-close-popup').click(function(e) {
        e.preventDefault();
        closePopup();
    });
    $('.js-close-selfpopup').click(function(e) {
        e.preventDefault();
        closeSelfPopup(e);
    });
}

function dataTrim() {
    var ellipsis = "...";
    $('[data-trim]').each(function() {
        //if (!$(this).hasClass('is--trimmed')) {
        var text = $(this).html();
        var charLimit = parseInt($(this).attr('data-trim'));
        $(this).html(TrimLength(text, charLimit));
        $(this).addClass('is--trimmed');
        //}
    });

    function TrimLength(text, maxLength) {
        text = $.trim(text);
        if (text.length > maxLength) {
            text = text.substring(0, maxLength - ellipsis.length)
            return text.substring(0, text.lastIndexOf(" ")) + ellipsis;
        } else return text;
    }
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

function initEqualHeight(){
    $('.js-eqRow').each(function(){  
        var highestBox = 0;
        $('.js-eqColumn', this).each(function(){
            var htmlString = $( this ).html();
            $(this).height('auto');
            if($(this).height() > highestBox) 
                highestBox = $(this).height(); 
        });  
        $('.js-eqColumn',this).height(highestBox);
    }); 
}

function initToggleClass(targrt,tClass,tParent){
    $('body').on('click',targrt,function(){
        var self = $(this);
		self.parents(tParent).toggleClass(tClass);
        self.toggleClass(tClass);
    });
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


