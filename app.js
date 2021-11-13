const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const width  = window.innerWidth || document.documentElement.clientWidth || 
	document.body.clientWidth;
	
	let flag = false;
	//Toggle Nav

	burger.addEventListener('click', () => {
		nav.style.opacity = 1;
		nav.classList.toggle('nav-active'); //thats move our side nav
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''; //if the we click on the button and it has a animation on it,deletes it,thats why our animation will be repeated every time if we a open a burger
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});
		burger.classList.toggle('toggle'); //this rotates the lines
	}); /*The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - This creates a toggle effect. ... Tip: This method can also be used to toggle between custom functions.*/

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if(width<671){	
			nav.classList.toggle('nav-active');
			flag = true;
			//if the we click on the button and it has a animation on it,deletes it,thats why our animation will be repeated every time if we a open a burger
			if (flag === true) {
				navLinks.forEach((linke) => {
					linke.style.animation = '';
					// nav.style.opacity = 0;
				});
			}

			burger.classList.toggle('toggle');
		}else{
			console.log("oalala");
			link.style.backgroundColor="red";
		}
		});
	});
	// window.addEventListener('resize', () => {
	// 	nav.style.opacity = 1;
	// });
	// console.log(`The width of the screen is ${window.screen.width}`);

};


navSlide();

/*JavaScript classList

JavaScript classList is a DOM property of JavaScript that allows for styling the CSS (Cascading Style Sheet) classes of an element. JavaScript classList is a read-only property that returns the names of the CSS classes.*/

// https://www.javatpoint.com/javascript-classlist
