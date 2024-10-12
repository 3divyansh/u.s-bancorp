
 function toggleLangDropdown() {
	var dropdown = document.getElementById('langDropdown');
	dropdown.classList.toggle('hidden');
     }
   
  
      // Show form function
//       function showForm(formType) {
// 	const loginForm = document.getElementById('loginForm');
// 	const registerForm = document.getElementById('registerForm');
// 	const overlay = document.getElementById('overlay');

// 	loginForm.classList.add('hidden');
// 	registerForm.classList.add('hidden');
// 	overlay.classList.remove('hidden');
	
// 	if (formType === 'login') {
// 	    loginForm.classList.remove('hidden');
// 	} else {
// 	    registerForm.classList.remove('hidden');
// 	}
//    }

//    // Close form function
//    function closeForm() {
// 	document.getElementById('loginForm').classList.add('hidden');
// 	document.getElementById('registerForm').classList.add('hidden');
// 	document.getElementById('overlay').classList.add('hidden');
//    }

//    // Submit Login
//    function submitLogin() {
// 	const username = document.getElementById('loginUsername').value;
// 	const password = document.getElementById('loginPassword').value;
// 	console.log('Login:', { username, password });
//    }

//    // Submit Register
//    function submitRegister() {
// 	const fullName = document.getElementById('registerName').value;
// 	const email = document.getElementById('registerEmail').value;
// 	const password = document.getElementById('registerPassword').value;
// 	console.log('Register:', { fullName, email, password });
//    }

//    function showForm(formType) {
// 	// Clear the input fields
// 	if (formType === 'login') {
// 	    document.getElementById('loginUsername').value = '';
// 	    document.getElementById('loginPassword').value = '';
// 	    document.getElementById('loginForm').classList.remove('hidden');
// 	    document.getElementById('overlay').classList.remove('hidden');
// 	} else if (formType === 'register') {
// 	    document.getElementById('registerName').value = '';
// 	    document.getElementById('registerEmail').value = '';
// 	    document.getElementById('registerPassword').value = '';
// 	    document.getElementById('registerForm').classList.remove('hidden');
// 	    document.getElementById('overlay').classList.remove('hidden');
// 	}
//    }
   
//    function closeForm() {
// 	document.getElementById('loginForm').classList.add('hidden');
// 	document.getElementById('registerForm').classList.add('hidden');
// 	document.getElementById('overlay').classList.add('hidden');
//    }
   







function showForm(formType) {
	// Clear input fields before showing the form
	if (formType === 'login') {
	    document.getElementById('loginUsername').value = '';
	    document.getElementById('loginPassword').value = '';
	} else if (formType === 'register') {
	    document.getElementById('registerName').value = '';
	    document.getElementById('registerEmail').value = '';
	    document.getElementById('registerPassword').value = '';
	}
   
	// Hide both forms initially
	const loginForm = document.getElementById('loginForm');
	const registerForm = document.getElementById('registerForm');
	const overlay = document.getElementById('overlay');
   
	loginForm.classList.add('hidden');
	registerForm.classList.add('hidden');
	overlay.classList.remove('hidden');
   
	// Show the selected form
	if (formType === 'login') {
	    loginForm.classList.remove('hidden');
	} else {
	    registerForm.classList.remove('hidden');
	}
   }
   
   // Close form function
   function closeForm() {
	const loginForm = document.getElementById('loginForm');
	const registerForm = document.getElementById('registerForm');
	const overlay = document.getElementById('overlay');
   
	loginForm.classList.add('hidden');
	registerForm.classList.add('hidden');
	overlay.classList.add('hidden');
   }
   
   // Submit Login
   function submitLogin() {
	const username = document.getElementById('loginUsername').value;
	const password = document.getElementById('loginPassword').value;
	console.log('Login:', { username, password });
   
	// Optionally clear inputs after submission
	document.getElementById('loginUsername').value = '';
	document.getElementById('loginPassword').value = '';
   }
   
   // Submit Register
   function submitRegister() {
	const fullName = document.getElementById('registerName').value;
	const email = document.getElementById('registerEmail').value;
	const password = document.getElementById('registerPassword').value;
	console.log('Register:', { fullName, email, password });
   
	// Optionally clear inputs after submission
	document.getElementById('registerName').value = '';
	document.getElementById('registerEmail').value = '';
	document.getElementById('registerPassword').value = '';
   }
   



























//--------------------------------------------------------



     const menuBtn = document.getElementById('menu-btn');
     const navMenu = document.getElementById('nav-menu');
     const mobileMenu = document.getElementById('mobile-menu');
 
     menuBtn.addEventListener('click', () => {
	  mobileMenu.classList.toggle('hidden');
     });


     //========================================================


     document.querySelectorAll('.accordion-header').forEach(header => {
	header.addEventListener('click', () => {
	    // Toggle active header style
	    header.querySelector('.header-text').classList.toggle('active-header');
	    
	    // Toggle the corresponding content
	    const content = header.nextElementSibling;
	    content.style.display = content.style.display === 'block' ? 'none' : 'block';

	    // Change the text of the header
	    const span = header.querySelector('.header-text');
	    if (span.textContent.startsWith('+')) {
		 span.textContent = span.textContent.replace('+', '-');
	    } else {
		 span.textContent = span.textContent.replace('-', '+');
	    }
	});
   });

//=============================



   document.addEventListener('DOMContentLoaded', function () {
	const observerOptions = {
	  root: null, // Use viewport as root
	  threshold: 0.1, // Trigger when 10% of the element is visible
	};
   
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
	    if (entry.isIntersecting) {
	      if (entry.target.classList.contains('left-slide')) {
		 entry.target.classList.add('animate-slide-in-left');
	      } else if (entry.target.classList.contains('right-slide')) {
		 entry.target.classList.add('animate-slide-in-right');
	      }
	      // Stop observing after animation triggers
	      observer.unobserve(entry.target);
	    }
	  });
	}, observerOptions);
   
	// Selecting elements to observe
	const slideElements = document.querySelectorAll('.left-slide, .right-slide');
	slideElements.forEach(element => {
	  observer.observe(element);
	});
     })


     const cards = document.querySelectorAll('[data-animate]');
    
     const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
	      if (entry.isIntersecting) {
		   entry.target.style.opacity = 1;
		   entry.target.style.transform = 'translateY(0)';
		   observer.unobserve(entry.target);
	      }
	  });
     });
 
     cards.forEach(card => {
	  observer.observe(card);
     });


     

     document.addEventListener("DOMContentLoaded", function() {
	const achievementItems = document.querySelectorAll('.achievement-item');
   
	// Create an intersection observer
	const observer = new IntersectionObserver((entries) => {
	    entries.forEach(entry => {
		 if (entry.isIntersecting) {
		     const index = Array.from(achievementItems).indexOf(entry.target);
		     const delay = index * 100; // 100ms delay between items
   
		     entry.target.style.animationDelay = `${delay}ms`;
   
		     // Add the classes based on the index (even: left, odd: right)
		     if (index % 2 === 0) {
			  entry.target.classList.add('slide-left');
		     } else {
			  entry.target.classList.add('slide-right');
		     }
   
		     // Unobserve the target after adding classes to avoid repeated animations
		     observer.unobserve(entry.target);
		 }
	    });
	});
   
	// Observe each achievement item
	achievementItems.forEach(item => {
	    observer.observe(item);
	});
   });
   
   



   document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
	    if (entry.isIntersecting) {
	      entry.target.classList.add('in-view');
	      observer.unobserve(entry.target); // Stop observing once in view
	    }
	  });
	}, { threshold: 0.1 });
     
	// Select all elements with class 'animated'
	const animatedElements = document.querySelectorAll('.animated, .image-container');
     
	// Observe each animated element
	animatedElements.forEach(element => {
	  observer.observe(element);
	});
     });
     



     document.addEventListener("DOMContentLoaded", function () {
	const newsItems = document.querySelectorAll('.news-item');
   
	const observerOptions = {
	    root: null, // Use the viewport as the root
	    rootMargin: '0px',
	    threshold: 0.1 // Trigger when 10% of the item is visible
	};
   
	const observerCallback = (entries, observer) => {
	    entries.forEach(entry => {
		 if (entry.isIntersecting) {
		     entry.target.classList.add('visible'); // Add visible class when intersecting
		     observer.unobserve(entry.target); // Stop observing once animated
		 }
	    });
	};
   
	const observer = new IntersectionObserver(observerCallback, observerOptions);
   
	newsItems.forEach(item => {
	    observer.observe(item); // Start observing each news item
	});
   });

   





   document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll('.card[data-animate]');
	
	const options = {
	  root: null, // Use the viewport as the root
	  rootMargin: '0px',
	  threshold: 0.1 // Trigger when 10% of the card is visible
	};
     
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
	    if (entry.isIntersecting) {
	      entry.target.classList.add('active'); // Add the active class to trigger the animation
	      observer.unobserve(entry.target); // Stop observing the element after it is animated
	    }
	  });
	}, options);
     
	cards.forEach(card => {
	  observer.observe(card); // Observe each card for scroll events
	});
     });
     











     function subscribe() {
	const emailInput = document.querySelector('.input-email');
	const messageContainer = document.getElementById('message-container');
	const messageContainers = document.getElementById('message-containers');

	if (emailInput.value) {
	    // Show success message
	    messageContainer.textContent = "Mail sent successfully!";
	    messageContainer.classList.remove('hidden');

	    // Log to console
	    console.log("Mail sent successfully to:", emailInput.value);

	    // Clear the input field
	    emailInput.value = '';

	    // Hide message after 3 seconds
	    setTimeout(() => {
		 messageContainer.classList.add('hidden');
	    }, 3000);
	} else {
	    // Show error message if the email is empty
	    messageContainers.textContent = "Please enter a valid email address.";
	    messageContainers.classList.remove('hidden');

	    // Clear the input field
	    emailInput.value = '';

	    // Hide message after 3 seconds
	    setTimeout(() => {
		 messageContainers.classList.add('hidden');
	    }, 3000);
	}
   }




   document.addEventListener("DOMContentLoaded", function () {
	const investButtons = document.querySelectorAll("button");
     
	investButtons.forEach(button => {
	  button.addEventListener("click", function () {
	    // Displaying the message in the console
	    console.log("Not a licensed investment. You cannot invest.");
     
	    // Creating a toast message
	    const toast = document.createElement("div");
	    toast.textContent = "Not a licensed investment. You cannot invest.";
	    toast.style.position = "fixed";
	    toast.style.top = "1rem";
	    toast.style.left = "50%";
	    toast.style.transform = "translateX(-50%)";
	    toast.style.backgroundColor = "#ff4444";
	    toast.style.color = "white";
	    toast.style.padding = "1rem 2rem";
	    toast.style.borderRadius = "8px";
	    toast.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
	    toast.style.zIndex = "9999";
	    document.body.appendChild(toast);
     
	    // Removing the toast after 3 seconds
	    setTimeout(() => {
	      toast.remove();
	    }, 3000);
	  });
	});
     });



 