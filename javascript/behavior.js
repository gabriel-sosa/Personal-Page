/******** class scroll toggle *********/

const navbar = document.querySelectorAll('nav div');

const navbarFunc = (upperNavButton, lowerNavButton, className) => {
	const unb = document.getElementById(upperNavButton);
	const lnb = document.getElementById(lowerNavButton);
	return e => {
		navbar.forEach(button => {
			button.className = '';
		});
		if (e.scrollDirection === 'REVERSE'){
			unb.className = className;
		} else {
			lnb.className = className;
		}
	}
}

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: '#about'})
	.on('start', navbarFunc('nav-intro', 'nav-about', 'selected'))
	.addTo(controller);

new ScrollMagic.Scene({triggerElement: '#skills'})
	.on('start', navbarFunc('nav-about', 'nav-skills', 'selected'))
	.addTo(controller);

new ScrollMagic.Scene({triggerElement: '#projects'})
	.on('start', navbarFunc('nav-skills', 'nav-projects', 'selected'))
	.addTo(controller);

new ScrollMagic.Scene({triggerElement: '#contact'})
	.on('start', navbarFunc('nav-projects', 'nav-contact', 'selected'))
	.addTo(controller);

/******* scroll to ******/

controller.scrollTo(function (newpos) {
	TweenMax.to(window, 1, {scrollTo: {y: newpos}})
});

const scrollToFunc = section => {
	return e => {
		controller.scrollTo(section);
	}
}

navbar[0].addEventListener('click', scrollToFunc('#intro'));
navbar[1].addEventListener('click', scrollToFunc('#about'));
navbar[2].addEventListener('click', scrollToFunc('#skills'));
navbar[3].addEventListener('click', scrollToFunc('#projects'));
navbar[4].addEventListener('click', scrollToFunc('#contact'));