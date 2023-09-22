document.addEventListener('DOMContentLoaded', (event) => {
	Copy();
	Copy2();
});
window.addEventListener("resize", function () {
	if (window.innerWidth >= 1024) {
		const menu = document.getElementById("menu");
		menu.style.left = "0%";
	}
	else {
		CloseMenu();
	}
}, true);

function Copy() {
	const forCopyText2 = document.getElementById('mail');
	forCopyText2.onclick = function () {
		const copyText = document.getElementById("ForCopy");
		const anim = document.getElementById("message");
		copyText.select();
		document.execCommand("copy");
		anim.classList.add("mess_on");
		anim.addEventListener('animationend', function () {
			anim.classList.remove('mess_on')
		})
	}
}
function Copy2() {
	const forCopyText2 = document.getElementById('phone');
	forCopyText2.onclick = function () {
		const copyText = document.getElementById("ForCopy2");
		const anim = document.getElementById("message");
		copyText.select();
		document.execCommand("copy");
		anim.classList.add("mess_on");
		anim.addEventListener('animationend', function () {
			anim.classList.remove('mess_on')
		})
	}
}


function OpenMenu() {
	const menu = document.getElementById("menu");
	const menu2 = document.getElementById("menu2");
	w = window.innerWidth;
	menu.style.left = "0%";
	menu2.style.left = "50%";
}
function CloseMenu() {
	w = window.innerWidth;
	if (w < 1024) {
		const menu = document.getElementById("menu");
		const menu2 = document.getElementById("menu2");
		menu.style.left = "-100%";
		menu2.style.left = "100%";
	}
}