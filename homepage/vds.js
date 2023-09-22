document.addEventListener('DOMContentLoaded', (event) => {
	
});

function VDS_on() {
	const menu = document.getElementById("VDS_menu");
	const vds_button = document.querySelector(".VDS_button");

	const main_blocks0 = document.querySelectorAll(".main_block");
	const main_blocks = Array.from(main_blocks0);

	main_blocks.forEach(function (main_block) {
		main_block.style.transform = "translate(0px, 100px)";
	});

	const vds_control1 = document.querySelector(".group1");
	const vds_control2 = document.querySelector(".group2");
	const vds_control3 = document.querySelector(".group3");

	VDS_white(document.querySelector(".vds_sb4"));
	VDS_size1(document.querySelector(".vds_sb1"));
	VDS_space1(document.querySelector(".vds_sb7"));
	menu.style.display = "block";
	vds_button.style.display = "none";
}
function VDS_off() {
	location.reload();
}

/////////////////////////////////VDS_COLOR///////////////////////////////////////////////////////////////

function VDS_white(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group2");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);
	const flower0 = page.querySelectorAll(".flower");
	const flower = Array.from(flower0);
	const pic0 = page.querySelectorAll("img");
	const pic = Array.from(pic0);

	p.forEach(function (p_elem) {
		p_elem.style.color = "black";
	});
	a.forEach(function (a_elem) {
		a_elem.style.color = "black";
	});
	div.forEach(function (div_elem) {
		div_elem.style.background = "white";
	});
	flower.forEach(function (flower_elem) {
		flower_elem.style.display = "none";
	});
	pic.forEach(function (pic_elem) {
		pic_elem.style.filter = "grayscale(1)";
	});
	
}
function VDS_black(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group2");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);
	const flower0 = page.querySelectorAll(".flower");
	const flower = Array.from(flower0);
	const pic0 = page.querySelectorAll("img");
	const pic = Array.from(pic0);

	
	p.forEach(function (p_elem) {
		p_elem.style.color = "white";
	});
	a.forEach(function (a_elem) {
		a_elem.style.color = "white";
	});
	div.forEach(function (div_elem) {
		div_elem.style.background = "black";
	});
	flower.forEach(function (flower_elem) {
		flower_elem.style.display = "none";
	});
	pic.forEach(function (pic_elem) {
		pic_elem.style.filter = "grayscale(1)";
	});
}
function VDS_blue(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group2");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);
	const flower0 = page.querySelectorAll(".flower");
	const flower = Array.from(flower0);
	const pic0 = page.querySelectorAll("img");
	const pic = Array.from(pic0);


	p.forEach(function (p_elem) {
		p_elem.style.color = "#063462";
	});
	a.forEach(function (a_elem) {
		a_elem.style.color = "#063462";
	});
	div.forEach(function (div_elem) {
		div_elem.style.background = "#9dd1ff";
	});
	flower.forEach(function (flower_elem) {
		flower_elem.style.display = "none";
	});
	pic.forEach(function (pic_elem) {
		pic_elem.style.filter = "grayscale(1)";
	});
}
///////////////////////////////VDS_FONTSIZE//////////////////////////
function VDS_size1(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group1");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);

	p.forEach(function (p_elem) {
		p_elem.classList.add("vds_font_1");
		p_elem.classList.remove("vds_font_2");
		p_elem.classList.remove("vds_font_3");
		p_elem.style.fontFamily = "Raleway";
		p_elem.style.fontWeight = "normal";
		p_elem.style.fontSize = "20px";
	});
	a.forEach(function (a_elem) {
		a_elem.classList.add("vds_font_1");
		a_elem.classList.remove("vds_font_2");
		a_elem.classList.remove("vds_font_3");
		a_elem.style.fontFamily = "Raleway";
		a_elem.style.fontWeight = "normal";
		a_elem.style.fontSize = "20px";
		a_elem.style.textDecoration = "underline";
	});
	div.forEach(function (div_elem) {
		div_elem.classList.add("vds_font_1");
		div_elem.classList.remove("vds_font_2");
		div_elem.classList.remove("vds_font_3");
	});
}
function VDS_size2(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group1");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);

	p.forEach(function (p_elem) {
		p_elem.classList.add("vds_font_2");
		p_elem.classList.remove("vds_font_1");
		p_elem.classList.remove("vds_font_3");
		p_elem.style.fontFamily = "Raleway";
		p_elem.style.fontWeight = "normal";
		p_elem.style.fontSize = "25px";
	});
	a.forEach(function (a_elem) {
		a_elem.classList.add("vds_font_2");
		a_elem.classList.remove("vds_font_1");
		a_elem.classList.remove("vds_font_3");
		a_elem.style.fontFamily = "Raleway";
		a_elem.style.fontWeight = "normal";
		a_elem.style.fontSize = "25px";
		a_elem.style.textDecoration = "underline";
	});
	div.forEach(function (div_elem) {
		div_elem.classList.add("vds_font_2");
		div_elem.classList.remove("vds_font_1");
		div_elem.classList.remove("vds_font_3");
	});
}
function VDS_size3(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group1");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);

	p.forEach(function (p_elem) {
		p_elem.classList.add("vds_font_3");
		p_elem.classList.remove("vds_font_1");
		p_elem.classList.remove("vds_font_2");
		p_elem.style.fontFamily = "Raleway";
		p_elem.style.fontWeight = "normal";
		p_elem.style.fontSize = "30px";
	});
	a.forEach(function (a_elem) {
		a_elem.classList.add("vds_font_3");
		a_elem.classList.remove("vds_font_1");
		a_elem.classList.remove("vds_font_2");
		a_elem.style.fontFamily = "Raleway";
		a_elem.style.fontWeight = "normal";
		a_elem.style.fontSize = "30px";
		a_elem.style.textDecoration = "underline";
	});
	div.forEach(function (div_elem) {
		div_elem.classList.add("vds_font_3");
		div_elem.classList.remove("vds_font_1");
		div_elem.classList.remove("vds_font_2");
	});
}
///////////////////////////////VDS_SYMBOLMARGIN///////////////////////////
function VDS_space1(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group3");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);

	p.forEach(function (p_elem) {
		p_elem.classList.add("vds_space_1");
		p_elem.classList.remove("vds_space_2");
		p_elem.classList.remove("vds_space_3");
		p_elem.style.letterSpacing = "0em";
	});
	a.forEach(function (a_elem) {
		a_elem.classList.add("vds_space_1");
		a_elem.classList.remove("vds_space_2");
		a_elem.classList.remove("vds_space_3");
		a_elem.style.letterSpacing = "0em";
	});
	div.forEach(function (div_elem) {
		div_elem.classList.add("vds_space_1");
		div_elem.classList.remove("vds_space_2");
		div_elem.classList.remove("vds_space_3");
	});
}
function VDS_space2(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group3");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);

	p.forEach(function (p_elem) {
		p_elem.classList.add("vds_space_2");
		p_elem.classList.remove("vds_space_1");
		p_elem.classList.remove("vds_space_3");
		p_elem.style.letterSpacing = "0.2em";
	});
	a.forEach(function (a_elem) {
		a_elem.classList.add("vds_space_2");
		a_elem.classList.remove("vds_space_1");
		a_elem.classList.remove("vds_space_3");
		a_elem.style.letterSpacing = "0.2em";
	});
	div.forEach(function (div_elem) {
		div_elem.classList.add("vds_space_2");
		div_elem.classList.remove("vds_space_1");
		div_elem.classList.remove("vds_space_3");
	});
}
function VDS_space3(vds) {
	const page = document.querySelector(".page");

	const vds_control = document.querySelector(".group3");
	const vds0 = vds_control.querySelectorAll(".vds_settings_button");
	vds1 = Array.from(vds0);
	vds1.forEach(function (vds_elem) {
		vds_elem.classList.remove("vds_sb_on");
	});
	vds.classList.add("vds_sb_on");

	const p0 = page.querySelectorAll("p");
	const p = Array.from(p0);
	const a0 = page.querySelectorAll("a");
	const a = Array.from(a0);
	const div0 = page.querySelectorAll("div");
	const div = Array.from(div0);

	p.forEach(function (p_elem) {
		p_elem.classList.add("vds_space_3");
		p_elem.classList.remove("vds_space_2");
		p_elem.classList.remove("vds_space_1");
		p_elem.style.letterSpacing = "0.4em";
	});
	a.forEach(function (a_elem) {
		a_elem.classList.add("vds_space_3");
		a_elem.classList.remove("vds_space_2");
		a_elem.classList.remove("vds_space_1");
		a_elem.style.letterSpacing = "0.4em";
	});
	div.forEach(function (div_elem) {
		div_elem.classList.add("vds_space_3");
		div_elem.classList.remove("vds_space_2");
		div_elem.classList.remove("vds_space_1");
	});
}