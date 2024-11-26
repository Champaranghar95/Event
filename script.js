// Smooth scrolling functionality
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
        });
    } else {
        console.warn(`Target element "${target}" not found.`);
    }
}

// Highlight navigation link for the current section
function highlightNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}

// Add smooth scrolling to navigation links
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target.startsWith('#')) {
                smoothScroll(target);
            }
        });
    });
}

// Setup event listeners for buttons
function setupButtons() {
    const exploreButton = document.querySelector('.hero button');
    const loginButton = document.querySelector('.login');
    const signupButton = document.querySelector('.signup');

    if (exploreButton) {
        exploreButton.addEventListener('click', () => smoothScroll('.teams'));
    }

    if (loginButton) {
        loginButton.addEventListener('click', () => alert('Log in button clicked!'));
    }

    if (signupButton) {
        signupButton.addEventListener('click', () => alert('Sign up button clicked!'));
    }
}

// Debounced scroll event listener
function debounce(func, delay = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

// Initialize all functionality
function init() {
    try {
        setupNavigation();
        setupButtons();
        window.addEventListener('scroll', debounce(highlightNavigation, 200));
    } catch (error) {
        console.error('Error initializing website scripts:', error);
    }
}

// Start the script
document.addEventListener('DOMContentLoaded', init);
