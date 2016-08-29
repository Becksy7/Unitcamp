function parseGetParams() { 

   
   var $_GET = []; 
   var __GET = window.location.search.substring(1).split("&"); 
   if(__GET != ""){
	   for(var i=0; i<__GET.length; i++) { 
			var getVar = __GET[i].split("="); 
			var r = {}; 
			r.name = getVar[0];
			r.value = typeof(getVar[1])=="undefined" ? "" : getVar[1];
			$_GET.push(r)
	   } 
   } 
   
   return $_GET; 
} 
function checkUsernameForLength(e) {
    var r = $(e.parentNode),
        a = e.value,
        t = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(a);
    return "" === a.trim() ? (void r.removeClass("valid _wrong"), $(document).trigger('robotUsernameSuccess')) : void(t ? (r.addClass("valid"), r.removeClass("error _wrong _empty"), r.removeClass("_empty")) : (r.removeClass("valid"), r.addClass("error _wrong"), $(document).trigger('robotUsernameError'), r.trigger('showError')))
}

function checkTime(e) {
    var r = $(e.parentNode),
        a = e.value,
        t = /^[A-zA-я0-9\- \:\.]+$/.test(a);
    return "" === a.trim() ? void r.removeClass("valid _wrong") : void(t ? (r.addClass("valid"), r.removeClass("error _wrong _empty"), r.removeClass("_empty")) : (r.removeClass("valid"), r.addClass("error _wrong"), r.trigger('showError')))
}

function checkTel(e) {
    var r = $(e.parentNode),
        a = e.value;
    return "" === a.trim() ? (r.removeClass("valid _wrong"), void r.addClass("error _empty") , $(document).trigger('robotTelError')) : void(/^((8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{5,15}$/.test(a.replace(/\s/gi, "")) ? (r.addClass("valid"), r.removeClass("error _wrong _empty"), r.removeClass("_empty"), $(document).trigger('robotTelsuccess')) : (r.removeClass("valid"), r.addClass("error _wrong"), $(document).trigger('robotTelError'), r.trigger('showError')))
}

function checkEmail(e) {
    var r = $(e.parentNode),
        a = e.value;
    return "" === a.trim() ? (r.removeClass("valid _wrong"), void r.addClass("error _empty"), r.trigger('showError')) : void(/^([a-zёа-я0-9_-]+\.)*[a-zёа-я0-9_-]+@[a-zёа-я0-9_-]+(\.[a-zёа-я0-9_-]+)*\.[a-zёа-я]{2,6}$/i.test(a.trim()) ? (r.addClass("valid"), r.removeClass("error _wrong _empty _address")) : (r.removeClass("valid _wrong _empty"), r.addClass("error  _address"), r.trigger('showError')))
}

function checkUsernameForLengthRealTime(e) {
    var r = $(e.parentNode),
        a = e.value.trim(),
        t = /^[a-zA-Zа-яА-Я' ]+$/.test(a);
    t && r.find('[data-toggle="tooltip"]').tooltip('hide');
    ("" == a) && r.find('[data-toggle="tooltip"]').tooltip('hide');
    return "" === a ? void r.removeClass("valid error _wrong _empty") : void(t ? (r.removeClass("valid error _wrong _empty"), $(document).trigger('robotUsernameSuccess')) : (r.removeClass("valid _wrong"), r.addClass("error _wrong"), $(document).trigger('robotUsernameError'), r.trigger('showError')))
}

function checkTimeRealTime(e) {
    var r = $(e.parentNode),
        a = e.value.trim(),
        t = /^[A-zA-я0-9\- \:\.]+$/.test(a);
        t && r.find('[data-toggle="tooltip"]').tooltip('hide');
        ("" == a) && r.find('[data-toggle="tooltip"]').tooltip('hide');
    return "" === a ? void r.removeClass("valid error _wrong _empty") : void(t ? r.removeClass("valid error _wrong _empty") : (r.removeClass("valid _wrong"), r.addClass("error _wrong"), r.trigger('showError')))
}

function checkTelRealTime(e) {
    var r = $(e.parentNode),
        a = e.value.trim(),
        t = /^[-+()0-9 ]+$/g.test(a);
        t && r.find('[data-toggle="tooltip"]').tooltip('hide');
        ("" == a) && r.find('[data-toggle="tooltip"]').tooltip('hide');
    return "" === a ? void (r.removeClass("valid error _wrong _empty"),r.trigger('showError')) : void(t ? (r.removeClass("valid error _wrong _empty"), $(document).trigger('robotTelSuccess')) : (r.removeClass("valid _wrong"), r.addClass("error _wrong"), $(document).trigger('robotTelError'), r.trigger('showError')))
}

function checkEmailRealTime(e) {
    var r = $(e.parentNode),
        a = e.value.trim(),
        t = /^[0-9A-zA-я-_.@]+$/.test(a);
        t && r.find('[data-toggle="tooltip"]').tooltip('hide');
        ("" == a) && r.find('[data-toggle="tooltip"]').tooltip('hide');
        $(document).trigger('robotEmailSuccess');
    return "" === a ? void (r.removeClass("valid error _wrong _empty _address"), r.trigger('showError'), $(document).trigger('robotEmailError')) : void(t ? (r.removeClass("valid error _wrong _empty _address"), $(document).trigger('robotEmailSuccess')) : (r.removeClass("valid _wrong _address"), r.addClass("error _wrong"), r.trigger('showError'), $(document).trigger('robotEmailError')))
}
$(function() {
    $(document).on("click", ".description__btn", function () { // автоскролл 
        $('html, body').animate({
            scrollTop: $("#formAnchor").offset().top
        }, 2000);
    });
    $(".slider-2").slick({
        dots: false,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: !0,
        autoplay: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slider-1 .slider-1__wrap").on('init', function(event, slick){
        var hideCommon = $(slick.$slides.get(0)).attr('no-common-info');
        if (hideCommon == 'true'){
            $('.slider-1__common').addClass('hidden');
        } else {
            $('.slider-1__common').removeClass('hidden');
        }
    });
    $(".slider-1 .slider-1__wrap").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // автоскролл 
        pauseOnHover: true, // поменять на false, если нужно чтоб по наведению слайдер не останавливался
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){//мигание стрелки при переходе от одного слайда к другому

        var $prev = $(slick.$prevArrow),
            $next = $(slick.$nextArrow);
        if ($prev.length){
            if ((currentSlide < nextSlide)) {
                $next.addClass('go');
                window.setTimeout(function(){
                    $next.removeClass('go');
                },100);
            } else if (currentSlide > nextSlide){
                $prev.addClass('go');
                window.setTimeout(function(){
                    $prev.removeClass('go');
                },100);
            }
        }

       var hideCommon = $(slick.$slides.get(nextSlide)).attr('no-common-info');

            if (hideCommon == 'true'){
                    $('.slider-1__common').addClass('hidden');
            } else {
                window.setTimeout(function(){
                    $('.slider-1__common').removeClass('hidden');
                },500)
            }
    });

    var e = 1,
        r = null,
        $textBlock = $('#text_block'),
        h = $textBlock.find('.list__item').height()*4,
        a = function() {

            null !== r && (r.removeClass("open_text").find(".show-all__text").text("Посмотреть все"), $textBlock.animate({
                height: h
            }, 500, function() {
                r = null
            }), e = 0)
        },
        t = function(a) {
            var t = $("#text_height").height();
            $textBlock.animate({
                height: t
            }, {
                duration: 500,
                queue: !0,
                complete: function() {
                    a.addClass("open_text").find(".show-all__text").text("Свернуть")
                }
            }), e = 1, r = a
        };
    /*$("#hide_text").click(function() {
        return 0 === e ? t($(this)) : h === $textBlock.height() ? t($(this)) : a(), !1
    })*/
     $('[data-toggle="tooltip"]').tooltip(), $("#call").submit(function(e) {
        var r, a = [],
            t = !1,
            o = $(this);
        e.preventDefault();
        for (var s = 0; s < this.length; s++) "text" === this[s].type && (this[s].onblur && this[s].onblur(), r = {}, r.name = this[s].name, r.value = this[s].value, a.push(r));
		
		
		var GETArr = parseGetParams();
		a = a.concat(GETArr);
		
        t = !a.some(function(e) {
            return "time" === e.name || "name" === e.name ? !1 : "" === e.value.trim()
        }), o.find(".error").length && (t = !1), a.push({
            name: "form",
            value: o.context.id
        }), t && $.ajax({
            url: "/ajax/script.php",
            data: a,
            type: "POST",
            dataType: "json"
        }).done(function() {
            o.hide(), o.parent().find(".done").show();
            ga('send', 'event', 'call_order', 'send_call'); 
            yaCounter34462125.reachGoal('CALLFORM');
        }).fail(function(e) {
            alert(e.responseText)
        })
    }), $("#r2d2__form").submit(function(e) {
        var r, a = [],
            t = !1,
            o = $(this);
        e.preventDefault();
        for (var s = 0; s < this.length; s++) "text" === this[s].type && (this[s].onblur && this[s].onblur(), r = {}, r.name = this[s].name, r.value = this[s].value, a.push(r));
		
		
		var GETArr = parseGetParams();
		a = a.concat(GETArr);
		
        a.push({
            name: "form",
            value: o.context.id
        }), t = !a.some(function(e) {
            if (o.find(".error").length || (t = !1)) {$(document).trigger('roboterror');}
            return "time" === e.name || "name" === e.name ? !1 : "" === e.value.trim()
        }), $(this).find(".error").length && (t = !1), t && $.ajax({
            url: "/ajax/script.php",
            data: a,
            type: "POST",
            dataType: "json"
        }).done(function() {
            o.hide(), o.parent().find(".done").show();
            ga('send', 'event', 'order', 'send_form'); 
            yaCounter34462125.reachGoal('BUYFORM');
            $(document).trigger('robotsuccess');
        }).fail(function(e) {
            alert(e.responseText)
        })
    }), $("#subscribe, #p-subscribe").submit(function(e) {
        var r, a = [],
            t = !1,
            o = $(this);
        e.preventDefault();
        for (var s = 0; s < this.length; s++) "text" === this[s].type && (checkEmail(this[s]), r = {}, r.name = this[s].name, r.value = this[s].value,a.push(r));
		
		
		var GETArr = parseGetParams();
		a = a.concat(GETArr);

        a.push({
            name: "form",
            value: o.context.id
        }), t = !a.some(function(e) {
            if (o.find(".error").length || (t = !1)) { $(document).trigger('roboterror');}
            return "" === e.value.trim()
        }), $(this).find(".error").length && (t = !1), t && $.ajax({
            url: "/ajax/script.php",
            data: a,
            type: "POST",
            dataType: "json"
        }).done(function() {
            o.hide(), o.parent().find(".subscribe-done").show();
            ga('send', 'event', 'program_order', 'send_program');
            yaCounter34462125.reachGoal('SUBSCRIBEFORM');
            $(document).trigger('robotsuccess');
        }).fail(function(e) {
            alert(e.responseText)
        })
    });
    $('#subscribe .form-group, #p-subscribe .form-group, #call .form-group, #r2d2__form .form-group').on('showError',function(){
        var windowsWidth = $(window).width(),
            scrollbarWidth = $.getScrollbarWidth();
        if ((windowsWidth + scrollbarWidth) <767){
            $(this).find('[data-toggle="tooltip"]:visible').tooltip('show');
        }
    });
    $('#subscribe .form-group input, #p-subscribe .form-group input, #call .form-group input, #r2d2__form .form-group input').on('focus',function(){
        var windowsWidth = $(window).width(),
            scrollbarWidth = $.getScrollbarWidth();
        if ((windowsWidth + scrollbarWidth) <767){
            $(this).parent().find('[data-toggle="tooltip"]:visible').tooltip('show');
        }
    });
    $(document).on('robotUsernameError',function(){
       var $robot = $('#r2d2');
        if ( !$robot.hasClass('error')){
            $robot.removeClass('success').addClass('error').attr('usererror',true);
        }
    }).on('robotEmailError',function(){
            var $robot = $('#r2d2');
            if ( !$robot.hasClass('error')){
                $robot.removeClass('success').addClass('error').attr('emailerror',true);
            }
    }).on('robotTelError',function(){
            var $robot = $('#r2d2');
            if ( !$robot.hasClass('error')){
                $robot.removeClass('success').addClass('error').attr('telerror',true);
            }
    }).on('robotUsernameSuccess',function(){
        var $robot = $('#r2d2');
        //if ( !$robot.hasClass('success')){
            $robot.removeAttr('usererror');
            if ( !$robot.attr('telerror')){
                $robot.removeClass('error').addClass('success');
            }
        //}
    }).on('robotTelSuccess',function(){
        var $robot = $('#r2d2');
        //if ( !$robot.hasClass('success')){
            $robot.removeAttr('telerror');
            if ( !$robot.attr('usererror')){
                $robot.removeClass('error').addClass('success');
            }
        //}
    }).on('robotEmailSuccess',function(){
        var $robot = $('#r2d2');
        if ( !$robot.hasClass('success')){
            $robot.removeAttr('emailerror').removeClass('error').addClass('success');
        }
    }).on('robotsuccess',function(e){
        var $robot = $('#r2d2');
        if ( !$robot.hasClass('success')){
            $robot.removeClass('error').addClass('success');
        }
        playOkSound();
    }).on('roboterror',function(e){
            var $robot = $('#r2d2');
            if ( !$robot.hasClass('error')){
                $robot.removeClass('success').addClass('error');
            }
            playErrSound();
        });
    var playErrSound = function() {
        $('#r2d2__err-sound').get(0).play();
    },
        playOkSound = function() {
            $('#r2d2__ok-sound').get(0).play();
        };

    $(document).ready(function(){
        $('.placebox-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
    });
    });
});