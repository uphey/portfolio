window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    const greeting = document.getElementById("greeting");

    // Array of greeting sentences
    const greetings = [
        "Hello, World!",
        "Enjoy your visit!",
        "Loading some magic...",
        "Greetings, Earthling!",
        "Loading awesomeness...",
        "Hold on tight, it's loading!",
        "Get ready to be amazed!",
        "Did someone say 'loading'?",
        "Just a moment...",
        "Brewing coffee while loading...",
        "Almost there, don't blink!",
        "Spinning up the hyperspace drive...",
        "Counting to infinity...",
        "Brace yourself, awesomeness incoming!",
    ];

    // Function to get a random greeting
    function getRandomGreeting() {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        return greetings[randomIndex];
    }

    // Update the greeting with a random sentence with a smooth transition
    greeting.style.opacity = 0;
    setTimeout(function () {
        greeting.textContent = getRandomGreeting();
        greeting.style.opacity = 1;
    }, 200); // You can adjust the duration as needed

    setTimeout(function () {
        preloader.classList.add("hidden");
    }, 1000); // You can adjust the duration as needed
});


//=========Let's Go! Button
const button = document.getElementById("highlight-button");

button.addEventListener("mouseover", () => {
    button.classList.add("smooth-transition-button");
    button.style.fontSize = "1.4rem"; // Change font size to small
    button.textContent = "Let's go!";
    button.style.width = "140px"; // Adjust the width value as needed
});

button.addEventListener("mouseout", () => {
    button.classList.add("smooth-transition-button");
    button.style.fontSize = "1.2rem"; // Change font size back to big
    button.textContent = "↓";
    button.style.width = "60px"; // Adjust the width value to match the initial width
});

//======Copy Email
const emailLink = document.getElementById('email');
const copyButton = document.getElementById('copyButton');

const text = emailLink.innerHTML;

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');

    // Change the button text to "Copied!" on successful copy
    copyButton.textContent = 'Copied!👏';

    // Add a CSS class for the bounce animation
    copyButton.classList.add('bounce');

    // Remove the bounce class after a short delay (1 second in this example)
    setTimeout(() => {
      copyButton.textContent = 'Copy Email';
      copyButton.classList.remove('bounce');
    }, 1000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}


//========FilterButton
const filterButtons = document.querySelectorAll(".filter-button");
const items = document.querySelectorAll(".item");
const tagWrapper = document.querySelectorAll(".tag-wrapper");
const workImg = document.querySelectorAll(".inside-img");
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

        tagWrapper.forEach(tag => {
            if (filterValue === "all" || tag.classList.contains(filterValue)) {
                tag.classList.remove("hide");
            } else {
                tag.classList.add("hide");
            }
        });

        workImg.forEach(img => {
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
  };

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
const items1 = document.querySelectorAll('.item');

// Get the elements with the class 'scroll-element'
const scrollElements1 = document.querySelectorAll('.scroll-element');

// Add a click event listener to each 'item'
items1.forEach(item => {
  item.addEventListener('click', () => {
    // Hide the 'scroll-element' elements
    scrollElements1.forEach(scrollElement => {
      scrollElement.style.display = 'none';
    });
  });
});

// Get the modal element
const modal = document.querySelector('.modal');

// Function to handle the display of scroll elements
function toggleScrollElementsDisplay() {
  const displayValue = modal.classList.contains('show') ? 'none' : 'block';

  // Set the display value for each scroll element
  scrollElements1.forEach(scrollElement => {
    scrollElement.style.display = displayValue;
  });
}

// Initial call to set the display based on the modal's class
toggleScrollElementsDisplay();

// Add an event listener to handle changes in modal visibility
modal.addEventListener('transitionend', toggleScrollElementsDisplay);


//============Nav Item add Animation

// Function to add animation classes and delays
function addAnimationClasses() {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach((navItem, index) => {
      const delay = index * 0.1;
      navItem.classList.add("animate__animated", "animate__fadeInDown", "animate__faster");
      navItem.style.animationDelay = `${delay}s`;
    });
  }
  
  // Function to remove animation classes and delays
  function removeAnimationClasses() {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach(navItem => {
      navItem.classList.remove("animate__animated", "animate__fadeInDown", "animate__faster");
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



//============Lazy Load Image
        // Get all img and video elements on the page
        const mediaElements = document.querySelectorAll("img");

        // Get the "skills" section by its ID
        const skillsSection = document.getElementById("skills");

        mediaElements.forEach(element => {
            // Check if the element is not within the "skills" section
            if (!skillsSection.contains(element)) {
                element.setAttribute("loading", "lazy");
            }
        });



//=============Navbar Collapse
// Get references to the navbar toggle button and the navbar itself
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-collapse');

// Function to close the navbar when a click occurs outside
const closeNavbarOnClickOutside = (event) => {
    if (navbarNav.classList.contains('show') &&
        event.target !== navbarToggle &&
        !navbarToggle.contains(event.target) &&
        !navbarNav.contains(event.target)) {
        // Close the navbar
        navbarToggle.click();
    }
};

// Function to close the navbar when scrolling
const closeNavbarOnScroll = () => {
    if (navbarNav.classList.contains('show')) {
        // Close the navbar
        navbarToggle.click();
    }
};

// Add a click event listener to the document
document.addEventListener('click', closeNavbarOnClickOutside);

// Add a scroll event listener to the document
document.addEventListener('scroll', closeNavbarOnScroll);

// Cleanup the event listeners when the page is unloaded (optional)
window.addEventListener('beforeunload', () => {
    document.removeEventListener('click', closeNavbarOnClickOutside);
    document.removeEventListener('scroll', closeNavbarOnScroll);
});


//=========Expand All
const toggleAccordionButton = document.getElementById('toggleAccordionButton');
        const accordionItems = document.querySelectorAll('.accordion-item');

        let isAccordionExpanded = true;

        toggleAccordionButton.addEventListener('click', () => {
            if (isAccordionExpanded) {
                // Collapse all accordion items
                accordionItems.forEach(item => {
                    const collapseElement = item.querySelector('.accordion-collapse');
                    if (collapseElement.classList.contains('show')) {
                        const accordionButton = item.querySelector('.accordion-button');
                        collapseElement.classList.remove('show');
                        accordionButton.setAttribute('aria-expanded', 'false');
                    }
                });
                toggleAccordionButton.innerText = 'Show All';
            } else {
                // Expand all accordion items
                accordionItems.forEach(item => {
                    const collapseElement = item.querySelector('.accordion-collapse');
                    if (!collapseElement.classList.contains('show')) {
                        const accordionButton = item.querySelector('.accordion-button');
                        collapseElement.classList.add('show');
                        accordionButton.setAttribute('aria-expanded', 'true');
                    }
                });
                toggleAccordionButton.innerText = 'Hide All';
            }
            isAccordionExpanded = !isAccordionExpanded;

            // Scroll to the #skills section
            document.querySelector('#skills').scrollIntoView({
                behavior: 'smooth'
            });
        });

        
//========Video Controls
// Get all video elements on the page
const videoElements = document.querySelectorAll("video");

// Add the "controls" attribute to each video element
videoElements.forEach(video => {
    video.setAttribute("controls", true);
});

// Remove the "controls" attribute after 0.1 seconds
setTimeout(() => {
    videoElements.forEach(video => {
        video.removeAttribute("controls");
    });
}, 100);




///////////////////Load Modal Content

// Define an array of URLs and corresponding data-bs-target values
const contentInfo = [
    { url: "assets/modal/mod1.html", target: "#mod1" },
    { url: "assets/modal/mod2.html", target: "#mod2" },
    // Add more entries for additional content containers
];

        // Function to load and insert external HTML content
        function loadExternalContent(url, target) {
            // Find the modal body element inside the parent modal
            const modal = document.querySelector(target);
            const modalBody = modal ? modal.querySelector(".modal-body") : null;

            if (modalBody) {
                // Use fetch to load the external HTML content
                fetch(url)
                    .then(response => response.text())
                    .then(externalHTML => {
                        // Insert the external HTML content into the modal body
                        modalBody.innerHTML = externalHTML;

                        // Add the 'controls' attribute to video elements
                        const videoElements = modalBody.querySelectorAll("video");
                        videoElements.forEach(video => {
                            video.setAttribute("controls", "controls");

                            // Remove the 'controls' attribute after 0.1 seconds
                            setTimeout(() => {
                                video.removeAttribute("controls");
                            }, 400);
                        });
                    })
                    .catch(error => {
                        console.error("Error loading external content:", error);
                    });
            }
        }

        // Function to unload content with a delay
        function unloadContent(target) {
            const modal = document.querySelector(target);
            const modalBody = modal ? modal.querySelector(".modal-body") : null;
            if (modalBody) {
                setTimeout(() => {
                    modalBody.innerHTML = ""; // Remove content after a delay
                }, 0);
            }
        }

        // Add click event listeners for each link to trigger loading and unloading
        contentInfo.forEach(info => {
            const loadLink = document.querySelector(`a[data-bs-target="${info.target}"]`);
            if (loadLink) {
                loadLink.addEventListener("click", function (e) {
                    e.preventDefault(); // Prevent the default link behavior
                    loadExternalContent(info.url, info.target); // Load the external content
                });
            }
        });

        // Add event listener to handle modal hide event and unload content
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('hidden.bs.modal', function () {
                const target = `#${modal.id}`;
                unloadContent(target); // Unload the content when modal is hidden
            });
        });