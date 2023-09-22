document.addEventListener('DOMContentLoaded', (event) => {
	Slider();
	GalleryPortfolio();
	Gallery();
});

function Slider() {
	const slider = document.getElementById("g_container_media");
	const sliderItems = Array.from(slider.children);
	const next_button = document.getElementById("next_button");
	const back_button = document.getElementById("back_button");

	sliderItems.forEach(function (slide, index) {

		if (index !== 0 && index !== 1 && index !== 2) slide.classList.add('hidden');

		slide.dataset.index = index;

		
	});

	next_button.onclick = function (slide) {
		const thisSlide = slider.querySelector('.thisSlide')
		const thisSlideIndex = +thisSlide.dataset.index;
		let nextSlideIndex = thisSlideIndex + 1 === sliderItems.length ? 0 : thisSlideIndex + 1;
		let backSlideIndex = thisSlideIndex === 0 ? sliderItems.length - 1 : thisSlideIndex - 1;
		let next2SlideIndex = nextSlideIndex + 1 === sliderItems.length ? 0 : nextSlideIndex + 1;
		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
		const backSlide = slider.querySelector(`[data-index="${backSlideIndex}"]`);
		const next2Slide = slider.querySelector(`[data-index="${next2SlideIndex}"]`);

		
		backSlide.classList.add('hidden');
		backSlide.classList.remove('backSlide');
		thisSlide.classList.remove('thisSlide');
		thisSlide.classList.add('backSlide');
		nextSlide.classList.remove('nextSlide');
		nextSlide.classList.add('thisSlide');
		next2Slide.classList.remove('hidden');
		next2Slide.classList.add('nextSlide');
	
	}
	back_button.onclick = function (slide) {
		const thisSlide = slider.querySelector('.thisSlide')
		const thisSlideIndex = +thisSlide.dataset.index;
		let nextSlideIndex = thisSlideIndex + 1 === sliderItems.length ? 0 : thisSlideIndex + 1;
		let backSlideIndex = thisSlideIndex === 0 ? sliderItems.length - 1 : thisSlideIndex - 1;
		let back2SlideIndex = backSlideIndex === 0 ? sliderItems.length - 1 : backSlideIndex - 1;
		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
		const backSlide = slider.querySelector(`[data-index="${backSlideIndex}"]`);
		const back2Slide = slider.querySelector(`[data-index="${back2SlideIndex}"]`);


		backSlide.classList.add('thisSlide');
		backSlide.classList.remove('backSlide');
		thisSlide.classList.remove('thisSlide');
		thisSlide.classList.add('nextSlide');
		nextSlide.classList.remove('nextSlide');
		nextSlide.classList.add('hidden');
		back2Slide.classList.remove('hidden');
		back2Slide.classList.add('backSlide');

	}
}


function GalleryPortfolio() {
	const portfolio = document.querySelectorAll("#diplom");
	const diploms = Array.from(portfolio);
	const next_button = document.getElementById("rightbtn");
	const back_button = document.getElementById("leftbtn");
	const close_button = document.getElementById("closebtn");

	diploms.forEach(function (diplom, index) {

		diplom.dataset.index = index;

		diplom.onclick = function () {
			const expandImg = document.getElementById("expandedImg");
			expandImg.src = diplom.src;
			expandImg.parentElement.style.display = "block";
			diplom.classList.add('thisDiplom');
		}
	});
	next_button.onclick = function (diplom) {
		const expandImg = document.getElementById("expandedImg");
		
		const thisDiplom = document.querySelector('.thisDiplom');
		const thisDiplomIndex = +thisDiplom.dataset.index;
		let nextDiplomIndex = thisDiplomIndex + 1 === diploms.length ? 0 : thisDiplomIndex + 1;
		const nextDiplom = document.querySelector(`[data-index="${nextDiplomIndex}"]`);

		thisDiplom.classList.remove('thisDiplom');
		nextDiplom.classList.add('thisDiplom');
		expandImg.src = nextDiplom.src;

	}
	back_button.onclick = function (diplom) {
		const expandImg = document.getElementById("expandedImg");

		
		const thisDiplom = document.querySelector('.thisDiplom');
		const thisDiplomIndex = +thisDiplom.dataset.index;
		let backDiplomIndex = thisDiplomIndex === 0 ? diploms.length - 1 : thisDiplomIndex - 1;
		const backDiplom = document.querySelector(`[data-index="${backDiplomIndex}"]`);

		thisDiplom.classList.remove('thisDiplom');
		backDiplom.classList.add('thisDiplom');
		expandImg.src = backDiplom.src;


	}
	close_button.onclick = function () {
		const expandImg = document.getElementById("expandedImg");
		expandImg.src = "";
		close_button.parentElement.style.display = 'none';
	}
	
}

function Gallery() {
	const portfolio = document.getElementById("g_container_media");
	const diploms = Array.from(portfolio.children);
	const next_button = document.getElementById("rightbtn2");
	const back_button = document.getElementById("leftbtn2");
	const close_button = document.getElementById("closebtn2");

	diploms.forEach(function (diplom, index) {

		diplom.dataset.index = index;

		diplom.onclick = function () {
			const expandImg = document.getElementById("expandedImg2");
			expandImg.src = diplom.src;
			expandImg.parentElement.style.display = "block";
			diplom.classList.add('thisDiplom');

			const imageWidth = diplom.naturalWidth;
			const imageHeight = diplom.naturalHeight;

			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			if (windowWidth < 1024) {
				if (imageWidth >= imageHeight) {
					expandImg.style.width = '75%';
					expandImg.style.height = 'auto';
				}
				else {
					expandImg.style.height = '70%';
					expandImg.style.width = 'auto';
				}
			}
			else if (windowWidth < 1280 && windowWidth >= 1024) {
				if (imageWidth >= imageHeight) {
					expandImg.style.width = '80%';
					expandImg.style.height = 'auto';
				}
				else {
					expandImg.style.height = '90%';
					expandImg.style.width = 'auto';
				}
			}
			
			else if (windowWidth >= 1280 && windowWidth < 1480) {
				if (imageWidth >= imageHeight) {
					expandImg.style.width = '70%';
					expandImg.style.height = 'auto';
				}
				else {
					expandImg.style.height = '90%';
					expandImg.style.width = 'auto';
				}
			}
			else if (windowWidth >= 1480) {
				if (imageWidth >= imageHeight) {
					expandImg.style.width = '60%';
					expandImg.style.height = 'auto';
				}
				else {
					expandImg.style.height = '90%';
					expandImg.style.width = 'auto';
				}
			}
		}
	});
	next_button.onclick = function (diplom) {
		const expandImg = document.getElementById("expandedImg2");

		const thisDiplom = portfolio.querySelector('.thisDiplom');
		const thisDiplomIndex = +thisDiplom.dataset.index;
		let nextDiplomIndex = thisDiplomIndex + 1 === diploms.length ? 0 : thisDiplomIndex + 1;
		const nextDiplom = portfolio.querySelector(`[data-index="${nextDiplomIndex}"]`);

		thisDiplom.classList.remove('thisDiplom');
		nextDiplom.classList.add('thisDiplom');
		expandImg.src = nextDiplom.src;

		const imageWidth = nextDiplom.naturalWidth;
		const imageHeight = nextDiplom.naturalHeight;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		if (windowWidth < 1024) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '75%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '70%';
				expandImg.style.width = 'auto';
			}
		}
		else if (windowWidth < 1280) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '80%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '90%';
				expandImg.style.width = 'auto';
			}
		}
		else if (windowWidth >= 1280 && windowWidth < 1480) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '70%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '90%';
				expandImg.style.width = 'auto';
			}
		}
		else if (windowWidth >= 1480) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '60%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '90%';
				expandImg.style.width = 'auto';
			}
		}
	}
	back_button.onclick = function (diplom) {
		const expandImg = document.getElementById("expandedImg2");


		const thisDiplom = portfolio.querySelector('.thisDiplom');
		const thisDiplomIndex = +thisDiplom.dataset.index;
		let backDiplomIndex = thisDiplomIndex === 0 ? diploms.length - 1 : thisDiplomIndex - 1;
		const backDiplom = portfolio.querySelector(`[data-index="${backDiplomIndex}"]`);

		thisDiplom.classList.remove('thisDiplom');
		backDiplom.classList.add('thisDiplom');
		expandImg.src = backDiplom.src;

		const imageWidth = backDiplom.naturalWidth;
		const imageHeight = backDiplom.naturalHeight;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		if (windowWidth < 1024) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '75%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '70%';
				expandImg.style.width = 'auto';
			}
		}

		else if (windowWidth < 1280) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '80%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '90%';
				expandImg.style.width = 'auto';
			}
		}
		else if (windowWidth >= 1280 && windowWidth < 1480) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '70%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '90%';
				expandImg.style.width = 'auto';
			}
		}
		else if (windowWidth >= 1480) {
			if (imageWidth >= imageHeight) {
				expandImg.style.width = '60%';
				expandImg.style.height = 'auto';
			}
			else {
				expandImg.style.height = '90%';
				expandImg.style.width = 'auto';
			}
		}

	}
	close_button.onclick = function () {
		const expandImg = document.getElementById("expandedImg2");
		expandImg.src = "";
		close_button.parentElement.style.display = 'none';
	}

}
