$(function() {

	var App = (function(){

		return {
			init : function() {
				Squares.init();
				$("#hide_text").click(function() {
					$('#text_height').toggleClass('shown');
					var msgShow = 'Свернуть',
							msgHide = 'Показать все',
							h = $('#text_height').attr('data-height');
					if ($('#text_height').hasClass('shown')){
						$('#text_height').animate({
							height: h*2
						}, 500);
						$('#hide_text').addClass('open_text').find('.show-all__text').text(msgShow);
					} else {
						$('#text_height').animate({
							height: h
						}, 500);
						$('#hide_text').removeClass('open_text').find('.show-all__text').text(msgHide);
					}
				});

			}
		}
	})()
		,Squares = (function(){
			var getRealww = function(){
				var windowsWidth = $(window).width(),
						scrollbarWidth = $.getScrollbarWidth();
				return windowsWidth + scrollbarWidth;
			},
					recalcDim = function(){
				var ww = getRealww(),
					$textBlock = $('#text_block'),
					$items = $textBlock.find('.list__item'),
					sideLength = $items.eq(0).width(),
						$textHeight = $('#text_height');

					if ( ($textHeight.hasClass('slick-initialized')) && (ww >767)) {
						$textHeight.slick('unslick');
						$('#s-counter').remove();
					}
					if ((ww < 1023) && (ww > 767)) {

						$items.each(function(i, el) {
							$(el).css('height', sideLength * 2);
							$(el).find('._img').css('height', sideLength);
							$(el).find('._vertical').css('height', sideLength);
							if ($(el).find('._vertical').hasClass('ns')) {
								$(el).find('._vertical').getNiceScroll().resize();
							} else {
								$(el).find('._vertical').addClass('ns').niceScroll({cursorcolor: '#bebebe'});
							}
						});
					} else {
						if (!$textHeight.hasClass('slick-initialized')) {
							$items.each(function(i, el) {
								$(el).removeAttr('style');
								$(el).find('._img').removeAttr('style');
								if ($(el).find('._vertical').hasClass('ns')) {
									$(el).find('._vertical').getNiceScroll().resize();
								}
								$(el).find('._vertical').removeAttr('style');
							});
						}
					}
					if (ww > 767){
						if (!$textHeight.hasClass('shown')){
							$textHeight.css('height',sideLength*4);
						} else {
							$textHeight.css('height',sideLength*8);
						}
						$textHeight.attr('data-height',sideLength*4);

					} else {
						$textHeight.removeAttr('style');
						if (!$textHeight.hasClass('slick-initialized')){
							$textHeight.on('init',function(event, slick){
								$('#s-counter').remove();
								$(this).append('<div class="slick-counter" id="s-counter">1'+'/'+slick.slideCount+'</div>');
							});
							$textHeight.slick({
								slidesToShow: 1,
								slidesToScroll: 1,
								swipeToSlide: true
							});

							$textHeight.on('beforeChange', function(event, slick, currentSlide, nextSlide){
								$('#s-counter').text((nextSlide+1)+'/'+slick.slideCount);
							});
						}


						}
			};
			return {
				init : function() {
					recalcDim();
					$(window).on('resize',recalcDim);
				}
			}
		})()
			,ReviewTxtCrop = (function(){
				return {
					init : function() {
						var height = $('.review__txt').css('height');
						$('.review__txt').dotdotdot({
							watch: 'window',
							height: height
						});
					}
				}
			})()
	/**
	 * Dummy Module Example
	 */
		,DummyModule = (function(){
			return {
				init : function() {
					// do something
				}
			}
		})()

		;App.init();

});