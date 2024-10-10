
 function toggleLangDropdown() {
	var dropdown = document.getElementById('langDropdown');
	dropdown.classList.toggle('hidden');
     }
   
  
     function showForm(formType) {
	var loginForm = document.getElementById('loginForm');
	var registerForm = document.getElementById('registerForm');
	
	
	loginForm.classList.add('hidden');
	registerForm.classList.add('hidden');

	if (formType === 'login') {
	  loginForm.classList.remove('hidden');
	} else if (formType === 'register') {
	  registerForm.classList.remove('hidden');
	}
     }

     const menuBtn = document.getElementById('menu-btn');
     const navMenu = document.getElementById('nav-menu');
     const mobileMenu = document.getElementById('mobile-menu');
 
     menuBtn.addEventListener('click', () => {
	  mobileMenu.classList.toggle('hidden');
     });