const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
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
		});
	});
};
const anchorColor=()=>{
	const anchor=document.querySelectorAll('.link_to_other_page');
	const currentPage=window.location.href.split("/")[3];	
	switch(currentPage){
		case "":
			anchor[0].style.borderBottom="1px solid red";
			break;
		case "index.html":
			anchor[0].style.borderBottom="1px solid red";
			break;
		case "bevezetes.html":
			anchor[1].style.borderBottom="1px solid red";
			break;
		case "monitorok.html":
			anchor[2].style.borderBottom="1px solid red";
			break;
		case "grafikus_kartyak.html":
			anchor[3].style.borderBottom="1px solid red";
			break;
		case "nyomtatok.html":
			anchor[4].style.borderBottom="1px solid red";
			break;
		case "plotterek.html":
			anchor[5].style.borderBottom="1px solid red";
			break;
		case "projektorok.html":
			anchor[6].style.borderBottom="1px solid red";
			break;
		case "hangszorok.html":
			anchor[7].style.borderBottom="1px solid red";
			break;
		default:
			anchor[0].style.borderBottom="1px solid red";
			break;
			

	}
}
navSlide();
anchorColor();

