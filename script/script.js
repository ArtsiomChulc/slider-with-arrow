document.addEventListener('DOMContentLoaded', () => {

	const slides = document.querySelectorAll('.slider__item'),
		current = document.querySelector('.current'),
		total = document.querySelector('.total'),
		prevBtn = document.querySelector('#prev'),
		nextBtn = document.querySelector('#next');

	let slideIndex = 1;

	showSlides(slideIndex);

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
	} else {
		total.textContent = slides.length;
	}

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		slides.forEach(slide => {
			slide.style.display = 'none';
		});
		slides[slideIndex - 1].style.display = 'block';

		if (slideIndex < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	}

	function plusSlide(e) {
		showSlides(slideIndex += e);
	}

	prevBtn.addEventListener('click', () => {
		plusSlide(-1);
	});
	nextBtn.addEventListener('click', () => {
		plusSlide(1);
	});






});


