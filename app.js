const sections = document.querySelectorAll('.section'); 
const sectBtn = document.querySelectorAll('.controls'); 
const sectionBtns = document.querySelectorAll('.control'); 
const allSections = document.querySelectorAll('.main-content'); 


function pageTransition() {
	// button clicked active class 
	for(let i=0; i<sectionBtns.length; ++i){
		//listen event whether current btn has been clickeed  or not 
		sectionBtns[i].addEventListener('click', function (){

			// remove the active-btn class from the control that was possessing it 
			let currentBtn = document.querySelectorAll('.active-btn'); 
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); 

			sectionBtns[i].className += '  active-btn'; // added active-btn class to the clicked btn 
			
		}); 
	}
}

pageTransition(); 
