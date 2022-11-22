const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

window.onload = function () {
	if (
	  document.querySelectorAll(".progress").length > 0 &&
	  document.querySelectorAll(".progress [data-progress]").length > 0
	) {
	  // Get all elements with 'data-progress' attribute and run the 'AnimateProgress' funcion with each one
	  document
		.querySelectorAll(".progress [data-progress]")
		.forEach((x) => AnimateProgress(x));
	}
  };

function AnimateProgress(el) {
  // Get the element that came as parameter and add the class 'animated-progress' on it
  el.className = "animate-progress";
  // Set the attribute 'style' of this element with the custom attribute '--animate-progress' and the value of 'data-progress' as the width value
  el.setAttribute(
    "style",
    `--animate-progress:${el.getAttribute("data-progress")}%;`
  );
  // After this the CSS make its magic
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'bottom'})

sr.reveal('.sub-service,.about,.portfolio,.skills,.contact',{delay:200, origin:'bottom'})

