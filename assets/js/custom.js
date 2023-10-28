//========FilterButton
const filterButtons = document.querySelectorAll(".filter-button");
const items = document.querySelectorAll(".item");
const portfolioContent = document.querySelector(".portfolio-title"); // Assuming you have a single portfolio content element

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

        // Scroll to the top of the portfolio content
        portfolioContent.scrollIntoView({ behavior: "smooth" });
    });
});



//=============Show and Hide the Carousel Button
const elementsToHide = document.querySelectorAll(".element-to-hide");
const triggerElements = document.querySelectorAll(".trigger-element");
const isHiddenArray = Array(elementsToHide.length).fill(true);

function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function hideElement(index) {
    const elementToHide = elementsToHide[index];
    elementToHide.style.opacity = "0";
    elementToHide.style.maxHeight = "0px";
    isHiddenArray[index] = true;
}

function showElement(index) {
    const elementToHide = elementsToHide[index];
    elementToHide.style.display = "flex";
    elementToHide.style.opacity = "1";
    elementToHide.style.maxHeight = "180px"; // Adjust the value to match your element's height
    isHiddenArray[index] = false;
}

triggerElements.forEach((triggerElement, index) => {
    window.addEventListener("scroll", function () {
        if (isHiddenArray[index] && isElementInView(triggerElement)) {
            showElement(index);
        } else if (!isHiddenArray[index] && !isElementInView(triggerElement)) {
            hideElement(index);
        }
    });
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
const scrollElements = document.querySelectorAll(".scroll-element");
let lastScrollY = window.scrollY;
let isHovered = false;
let hideTimer;

function showScrollElement(element) {
  element.style.opacity = 1;
  element.style.bottom = "30px";
}

function hideScrollElement(element) {
  element.style.opacity = 0;
  element.style.bottom = "-50px";
}

function checkScrollDirection() {
  const currentScrollY = window.scrollY;
  if (currentScrollY < lastScrollY) {
    // Scrolling up
    scrollElements.forEach((element) => {
      showScrollElement(element);
      clearTimeout(hideTimer);
    });
  } else {
    // Scrolling down
    scrollElements.forEach((element) => hideScrollElement(element));
  }
  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", checkScrollDirection);

scrollElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    isHovered = true;
    showScrollElement(element);
    clearTimeout(hideTimer);
  });

  element.addEventListener("mouseleave", () => {
    isHovered = false;
    hideTimer = setTimeout(() => hideScrollElement(element), 1000);
  });
});

let isScrolling = false;
window.addEventListener("scroll", () => {
  if (isScrolling) {
    clearTimeout(hideTimer);
    isScrolling = false;
  } else {
    isScrolling = true;
    scrollElements.forEach((element) => {
      hideTimer = setTimeout(() => hideScrollElement(element), 1500);
    });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    scrollElements.forEach((element) => hideScrollElement(element));
  }
});


//=======Scroll for Filist
// let lastScrollPosition = window.scrollY;
// const filist = document.querySelector('.filist');

// function handleScroll() {
//   const currentScrollPosition = window.scrollY;

//   if (currentScrollPosition > lastScrollPosition) {
//     // Scrolling down
//     filist.style.transform = 'translateY(-200%)';
//   } else {
//     // Scrolling up
//     filist.style.transform = 'translateY(0)';
//   }

//   lastScrollPosition = currentScrollPosition;
// }

// window.addEventListener('scroll', handleScroll);



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



//============Lazy Load Modal
document.addEventListener('show.bs.modal', function (event) {
    const modal = event.target.querySelector('.modal-content');
    
    // Check if the modal content is already loaded
    if (!modal.hasChildNodes()) {
        const contentURL = event.target.getAttribute('data-content-url');
        // Fetch the content you want to load
        fetch(contentURL)
            .then(response => response.text())
            .then(data => {
                modal.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading modal content:', error);
            });
    }
});



