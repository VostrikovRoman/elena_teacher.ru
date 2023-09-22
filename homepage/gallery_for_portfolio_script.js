document.addEventListener('DOMContentLoaded', (event) => {
	GalleryPortfolio1();
});


function GalleryPortfolio1() {
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
		const expandImg = document.getElementById("expandedImg");

		
		const thisDiplom = document.querySelector('.thisDiplom');
		const thisDiplomIndex = +thisDiplom.dataset.index;
		let backDiplomIndex = thisDiplomIndex === 0 ? diploms.length - 1 : thisDiplomIndex - 1;
		const backDiplom = document.querySelector(`[data-index="${backDiplomIndex}"]`);

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
		const expandImg = document.getElementById("expandedImg");
		const thisDiplom = document.querySelector('.thisDiplom');
		expandImg.src = "";
		close_button.parentElement.style.display = 'none';
		thisDiplom.classList.remove('thisDiplom');
	}
	
}
