/////////
document.addEventListener('DOMContentLoaded', function () {
    const fadeInUp = document.querySelectorAll('.ani-fade-in-up');

    function handleScroll() {
        fadeInUp.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const triggerOffset = windowHeight * 0.85;

            if (itemTop < triggerOffset) {
                item.classList.add('fade-in-up');
            } else {
                item.classList.remove('fade-in-up');
            }
        });
    }

    // Initial check for items in the viewport
    handleScroll();

    window.addEventListener('scroll', handleScroll);
});

  
////////
document.addEventListener('DOMContentLoaded', function () {
    const zoomInUp = document.querySelectorAll('.ani-zoom-in-up');

    function handleScroll() {
        zoomInUp.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const triggerOffset = windowHeight;

            if (itemTop < triggerOffset) {
                item.classList.add('zoom-in-up');
            } else {
                item.classList.remove('zoom-in-up');
            }
        });
    }

    // Initial check for items in the viewport
    handleScroll();

    window.addEventListener('scroll', handleScroll);
});



////////
document.addEventListener('DOMContentLoaded', function () {
    const flipUp = document.querySelectorAll('.ani-flip-up');

    function handleScroll() {
        flipUp.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const triggerOffset = windowHeight * 0.9;

            if (itemTop < triggerOffset) {
                item.classList.add('flip-up');
            } else {
                item.classList.remove('flip-up');
            }
        });
    }

    // Initial check for items in the viewport
    handleScroll();

    window.addEventListener('scroll', handleScroll);
});


//===========Load img after page load
window.addEventListener('load', function () {
    // Function to load images within a section
    function loadImagesInSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (!section) return;
  
      const images = section.querySelectorAll('img');
      images.forEach(image => {
        const src = image.getAttribute('data-src');
        if (src) {
          image.src = src;
        }
      });
    }
  
    // Call the function for each section
    loadImagesInSection('projects');
    loadImagesInSection('skills');
    loadImagesInSection('about');
  });

//===============Load video when modal show
// document.addEventListener('DOMContentLoaded', function () {
//     // Function to load media elements within a modal
//     function loadMediaInModal(target) {
//       const modal = document.querySelector(target);
//       if (!modal) return;
  
//       // Load videos and iframes
//       const mediaElements = modal.querySelectorAll('video[data-src], iframe[data-src]');
//       mediaElements.forEach(media => {
//         const src = media.getAttribute('data-src');
//         if (src) {
//           media.src = src;
//         }
//       });
//     }
  
//     // Function to unload iframes within a modal
//     function unloadIframesInModal(target) {
//       const modal = document.querySelector(target);
//       if (!modal) return;
  
//       const iframes = modal.querySelectorAll('iframe[data-src]');
//       iframes.forEach(iframe => {
//         iframe.src = ''; // Unload the iframe by clearing its src
//       });
//     }
  
//     // Add click event listeners for each modal trigger
//     const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"]');
//     modalTriggers.forEach(trigger => {
//       trigger.addEventListener('click', function () {
//         const target = this.getAttribute('data-bs-target');
//         loadMediaInModal(target);
//       });
//     });
  
//     // Add event listener to handle modal hide event and unload iframes
//     const modals = document.querySelectorAll('.modal');
//     modals.forEach(modal => {
//       modal.addEventListener('hidden.bs.modal', function () {
//         unloadIframesInModal(`#${modal.id}`);
//       });
//     });
//   });
  


//================NavBrand Transition

  document.addEventListener('DOMContentLoaded', function () {
    const navName = document.querySelector('.nav-name');
    const navLogo = document.querySelector('.nav-logo');
  
    // Get the offset of the #home section
    const homeSection = document.getElementById('home');
    const homeSectionOffset = homeSection.offsetTop + homeSection.offsetHeight;
  
    // Initial state based on scroll position
    updateNavVisibility();
  
    // Listen for scroll events
    window.addEventListener('scroll', function () {
      updateNavVisibility();
    });
  
    // Function to update the visibility of nav elements based on scroll position
    function updateNavVisibility() {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition <= homeSectionOffset * 0.95) {
        // At the top of the page or within the #home section
        navName.style.opacity = '0';
        navName.style.transform = 'translateY(8px)';
        navLogo.style.opacity = '1';
        navLogo.style.transform = 'translateY(0)';
      } else {
        // Scrolled away from the #home section
        navName.style.opacity = '1';
        navName.style.transform = 'translateY(0)';
        navLogo.style.opacity = '0';
        navLogo.style.transform = 'translateY(8px)';
      }
    }
  });
  

//=========Let's Go! Button
const button = document.getElementById("highlight-button");

button.addEventListener("mouseover", () => {
  button.style.fontSize = "1.4rem";
  button.textContent = "Let's go!";
  console.log("Welcome to my website!");
});

button.addEventListener("mouseout", () => {
  button.style.fontSize = "1.2rem";
  button.textContent = "↓";
});
  

//======Copy Email
const emailLink = document.getElementById("email");
const copyButton = document.getElementById("copyButton");

const text = emailLink.innerHTML;

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");

    // Change the button text to "Copied!" on successful copy
    copyButton.textContent = "Copied!👏";

    // Add a CSS class for the bounce animation
    copyButton.classList.add("bounce");

    // Remove the bounce class after a short delay (1 second in this example)
    setTimeout(() => {
      copyButton.textContent = "Copy Email";
      copyButton.classList.remove("bounce");
    }, 1000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

//========FilterButton
const filterButtons = document.querySelectorAll(".filter-button");
const items = document.querySelectorAll(".item");
const tagWrapper = document.querySelectorAll(".tag-wrapper");
const workImg = document.querySelectorAll(".inside-img");
const portfolioContent = document.querySelector(".portfolio-title"); // Assuming you have a single portfolio content element

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");

    // Remove "active" class from all filter buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add "active" class to the clicked button
    button.classList.add("active");

    // Apply transition effect to items
    items.forEach((item) => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });

    tagWrapper.forEach((tag) => {
      if (filterValue === "all" || tag.classList.contains(filterValue)) {
        tag.classList.remove("hide");
      } else {
        tag.classList.add("hide");
      }
    });

    workImg.forEach((img) => {
      if (filterValue === "all" || img.classList.contains(filterValue)) {
        img.classList.remove("hide");
      } else {
        img.classList.add("hide");
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
  return (
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
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
  element.style.bottom = "2.8rem";
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

  // Check if you've scrolled to the footer
  const footer = document.querySelector("footer");
  const windowHeight = window.innerHeight;
  const footerOffset = footer.getBoundingClientRect().top;

  if (footerOffset < windowHeight) {
    scrollElements.forEach((element) => {
      showScrollElement(element);
      clearTimeout(hideTimer);
    });
  }
});

//================Hide Back to Top Button when modal show

// Get all elements with the class 'item'
const customItems = document.querySelectorAll(".item");

// Get the elements with the class 'scroll-element'
const customScrollElements = document.querySelectorAll(".scroll-element");

// Get all modal elements
const customModals = document.querySelectorAll(".modal");

// Function to handle the display of scroll elements
function toggleScrollElementsDisplay(displayValue) {
  customScrollElements.forEach((scrollElement) => {
    scrollElement.style.display = displayValue;
  });
}

// Add a click event listener to each 'item'
customItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Hide the 'scroll-element' elements
    toggleScrollElementsDisplay("none");
  });
});

// Add event listeners to handle the display of scroll elements when modals are shown/hidden
customModals.forEach((modal) => {
  modal.addEventListener("hide.bs.modal", () => {
    toggleScrollElementsDisplay("block");
  });
});

//============Nav Item add Animation

// Function to add animation classes and delays
function addAnimationClasses() {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((navItem, index) => {
    const delay = index * 0.1;
    navItem.classList.add(
      "animate__animated",
      "animate__fadeInDown",
      "animate__faster"
    );
    navItem.style.animationDelay = `${delay}s`;
  });
}

// Function to remove animation classes and delays
function removeAnimationClasses() {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((navItem) => {
    navItem.classList.remove(
      "animate__animated",
      "animate__fadeInDown",
      "animate__faster"
    );
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
const navLinks = document.querySelectorAll(".nav-link");
const navbarHeight = 150; // Adjust this value to match your navbar height

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Get the current scroll position with navbar offset
  const scrollPosition = window.scrollY + navbarHeight;

  // Loop through the sections, excluding the #highlight section
  for (const section of document.querySelectorAll("section:not(#highlight)")) {
    const sectionTop = section.offsetTop;
    const sectionId = section.getAttribute("id");

    // Check if the current scroll position is within the section
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + section.offsetHeight
    ) {
      // Remove the 'active' class from all nav-links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add the 'active' class to the nav-link corresponding to the section
      document
        .querySelector(`.nav-link[href="#${sectionId}"]`)
        .classList.add("active");
    }
  }
});

//=============Navbar Collapse
// Get references to the navbar toggle button and the navbar itself
const navbarToggle = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-collapse");

// Function to close the navbar when a click occurs outside
const closeNavbarOnClickOutside = (event) => {
  if (
    navbarNav.classList.contains("show") &&
    event.target !== navbarToggle &&
    !navbarToggle.contains(event.target) &&
    !navbarNav.contains(event.target)
  ) {
    // Close the navbar
    navbarToggle.click();
  }
};

// Function to close the navbar when scrolling
const closeNavbarOnScroll = () => {
  if (navbarNav.classList.contains("show")) {
    // Close the navbar
    navbarToggle.click();
  }
};

// Add a click event listener to the document
document.addEventListener("click", closeNavbarOnClickOutside);

// Add a scroll event listener to the document
document.addEventListener("scroll", closeNavbarOnScroll);

// Cleanup the event listeners when the page is unloaded (optional)
window.addEventListener("beforeunload", () => {
  document.removeEventListener("click", closeNavbarOnClickOutside);
  document.removeEventListener("scroll", closeNavbarOnScroll);
});

//========Video Controls
// Get all video elements on the page
const videoElements = document.querySelectorAll("video");

// Add the "controls" attribute to each video element
videoElements.forEach((video) => {
  video.setAttribute("controls", true);
});

// Remove the "controls" attribute after 0.1 seconds
setTimeout(() => {
  videoElements.forEach((video) => {
    video.removeAttribute("controls");
  });
}, 100);




  


  