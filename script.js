
 function toggleLangDropdown() {
	var dropdown = document.getElementById('langDropdown');
	dropdown.classList.toggle('hidden');
     }
   
  
      // Show form function
      function showForm(formType) {
	const loginForm = document.getElementById('loginForm');
	const registerForm = document.getElementById('registerForm');
	const overlay = document.getElementById('overlay');

	loginForm.classList.add('hidden');
	registerForm.classList.add('hidden');
	overlay.classList.remove('hidden');
	
	if (formType === 'login') {
	    loginForm.classList.remove('hidden');
	} else {
	    registerForm.classList.remove('hidden');
	}
   }

   // Close form function
   function closeForm() {
	document.getElementById('loginForm').classList.add('hidden');
	document.getElementById('registerForm').classList.add('hidden');
	document.getElementById('overlay').classList.add('hidden');
   }

   // Submit Login
   function submitLogin() {
	const username = document.getElementById('loginUsername').value;
	const password = document.getElementById('loginPassword').value;
	console.log('Login:', { username, password });
   }

   // Submit Register
   function submitRegister() {
	const fullName = document.getElementById('registerName').value;
	const email = document.getElementById('registerEmail').value;
	const password = document.getElementById('registerPassword').value;
	console.log('Register:', { fullName, email, password });
   }

     const menuBtn = document.getElementById('menu-btn');
     const navMenu = document.getElementById('nav-menu');
     const mobileMenu = document.getElementById('mobile-menu');
 
     menuBtn.addEventListener('click', () => {
	  mobileMenu.classList.toggle('hidden');
     });