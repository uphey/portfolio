// const heroImage = document.getElementById("heroImage");

// // Function to change the background size based on scroll position
// function changeBackgroundSize() {
//   const scrollPosition = window.scrollY;
//   heroImage.style.backgroundSize = `cover ${100 + scrollPosition * 0.2}%`;
// }

// // Add a scroll event listener to detect scroll and update background size
// window.addEventListener("scroll", changeBackgroundSize);

//========FilterButton
const filterButtons = document.querySelectorAll(".filter-button");
const items = document.querySelectorAll(".item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");

        // Remove "active" class from all filter buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add "active" class to the clicked button
        button.classList.add("active");

        // Apply transition effect to items
        items.forEach(item => {


            if (filterValue === "all" || item.classList.contains(filterValue)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    });
});


//=============Show and Hide the Carousel Button
const elementToHide = document.getElementById("elementToHide");
const triggerElement = document.getElementById("triggerElement");
let isHidden = true;

function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function hideElement() {
  elementToHide.style.opacity = "0";
  elementToHide.style.maxHeight = "0px";
  isHidden = true;
}

function showElement() {
  elementToHide.style.display = "flex";
  elementToHide.style.opacity = "1";
  elementToHide.style.maxHeight = "180px"; // Adjust the value to match your element's height
  isHidden = false;
}

window.addEventListener("scroll", function () {
  if (isHidden && isElementInView(triggerElement)) {
    showElement();
  } else if (!isHidden && !isElementInView(triggerElement)) {
    hideElement();
  }
});


//========Show on Hover

const hoveredElements = document.querySelectorAll(".hoveredElement");
const hiddenElement = document.getElementById("hiddenElement");

// Function to show the hidden element
function showHiddenElement() {
  hiddenElement.style.opacity = 1;
}

// Function to hide the hidden element
function hideHiddenElement() {
  hiddenElement.style.opacity = 0;
}

// Add event listeners to both hovered elements
hoveredElements.forEach((element) => {
  element.addEventListener("mouseover", showHiddenElement);
  element.addEventListener("mouseout", hideHiddenElement);
});



// =========Show on Scroll
const scrollElement = document.getElementById("scrollElement");
let lastScrollY = window.scrollY;
let isHovered = false;
let hideTimer;

// Function to show the element
function showScrollElement() {
  scrollElement.style.opacity = 1;
  scrollElement.style.bottom = "30px";
}

// Function to hide the element
function hideScrollElement() {
  scrollElement.style.opacity = 0;
  scrollElement.style.bottom = "-50px";
}

// Check scroll direction and toggle opacity
function checkScrollDirection() {
  const currentScrollY = window.scrollY;
  if (currentScrollY < lastScrollY) {
    // Scrolling up
    showScrollElement();
    clearTimeout(hideTimer);
  } else {
    // Scrolling down
    hideScrollElement();
  }
  lastScrollY = currentScrollY;
}

// Add a scroll event listener to detect scroll direction
window.addEventListener("scroll", checkScrollDirection);

// Add a hover event listener to show the element on hover
scrollElement.addEventListener("mouseenter", () => {
  isHovered = true;
  showScrollElement();
  clearTimeout(hideTimer);
});

// Add a mouseleave event listener to hide the element after no hover for 1s
scrollElement.addEventListener("mouseleave", () => {
  isHovered = false;
  hideTimer = setTimeout(hideScrollElement, 1000);
});

// Check if the user has stopped scrolling up after 1.5s and hide the element
let isScrolling = false;
window.addEventListener("scroll", () => {
  if (isScrolling) {
    clearTimeout(hideTimer);
    isScrolling = false;
  } else {
    isScrolling = true;
    hideTimer = setTimeout(hideScrollElement, 1500);
  }
});

// Hide the element when it reaches the top of the webpage
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    hideScrollElement();
  }
});



//============Nav Item add Animation

// Function to add animation classes and delays
function addAnimationClasses() {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach((navItem, index) => {
      const delay = index * 0.1;
      navItem.classList.add("animate__animated", "animate__fadeInDown");
      navItem.style.animationDelay = `${delay}s`;
    });
  }
  
  // Function to remove animation classes and delays
  function removeAnimationClasses() {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach(navItem => {
      navItem.classList.remove("animate__animated", "animate__fadeInDown");
      navItem.style.animationDelay = "";
    });
  }
  
  // Function to check screen width and add/remove animation classes
  function checkScreenWidth() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 768) {
      // Screen width is smaller than 768px, add animation classes and delays
      addAnimationClasses();
    } else {
      // Screen width is 768px or larger, remove animation classes and delays
      removeAnimationClasses();
    }
  }
  
  // Add an event listener to check the screen width when the window is resized
  window.addEventListener("resize", checkScreenWidth);
  
  // Initial check when the page loads
  checkScreenWidth();
  


//=============Change the active state of a navbar item
    // Get all the nav-links
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = 150; // Adjust this value to match your navbar height

    // Listen for scroll events
    window.addEventListener('scroll', () => {
        // Get the current scroll position with navbar offset
        const scrollPosition = window.scrollY + navbarHeight;

        // Loop through the sections
        for (const section of document.querySelectorAll('section')) {
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');

            // Check if the current scroll position is within the section
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
                // Remove the 'active' class from all nav-links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add the 'active' class to the nav-link corresponding to the section
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
            }
        }
    });

  



