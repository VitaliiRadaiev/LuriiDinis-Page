var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

window.onload = function() {
	// === Burger Handler =====================================================================
{
	let burg = document.querySelector('.burger');
	let sidePanel = document.querySelector('.side-panel');
	if(burg) {
		burg.addEventListener('click',function() {
			if(sidePanel) {
				sidePanel.classList.toggle('open');
			}
		})
	}
	
	if(sidePanel) {
		window.addEventListener('click', function(e) {
			if(!e.target.closest('.side-panel') && !e.target.closest('.burger')) {
				sidePanel.classList.remove('open');
			}
		})
	}
}
// === Burger Handler =====================================================================	;

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

	// === Плавная прокрута якорей ==================================================================
	if($('.anchor').length>0) {

		$(".anchor").click(function() {
		  var elementClick = $(this).attr("href")
		  var destination = $(elementClick).offset().top - 20;
		  jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		  }, 400);
		  return false;
		});

	}
	// === // Плавная прокрута якорей ==================================================================

	{
	let slider = document.querySelector('.slider .swiper-container')
	if(slider) {
		let swiper = new Swiper(slider, {
		  slidesPerView: 1,
		  loop: true,
		  autoHeight: true,
		})

		let btnPrev = slider.querySelector('.slider__button-prev');
		let btnNext = slider.querySelector('.slider__button-next');

		btnPrev.addEventListener('click', () => {
			swiper.slideNext();
		});

		btnNext.addEventListener('click', () => {
			swiper.slidePrev();
		});
	}
};
	{
	const slider = document.querySelector('.blog-block .swiper-container');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					centeredSlides: true,
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

};
	{
	let card = document.querySelectorAll('.card-blog');
	if(card.length>0) {
		card.forEach( function(elem, index) {
			let textBlock = elem.querySelector('.card-blog__text');

			let span = textBlock.querySelector('span')
			if(span) {
				span.remove();
			}
			
			let text = textBlock.innerText;
			if(text.length > 405) {
				textBlock.innerHTML = [...text].splice(0, 405).join('') + ' <span>… more</span>';
			} else {
				textBlock.innerHTML = text + ' <span>… more</span>';
			}

		});
	}
};
	{
	const slider = document.querySelector('.products-block .swiper-container');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					centeredSlides: true,
					pagination: {
					    el: slider.querySelector('.swiper-pagination'),
					    clickable: true,
					  },
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

};


};