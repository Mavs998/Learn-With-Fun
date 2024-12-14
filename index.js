// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Dynamic Back-to-Top Button
const backToTopButton = document.createElement('a');
backToTopButton.href = '#';
backToTopButton.className = 'back-to-top';
backToTopButton.textContent = '↑ Top';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Interactive Features Section
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'scale(1.1)';
        feature.style.transition = 'transform 0.3s ease';
    });
    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'scale(1)';
    });
});

// Responsive Navigation Menu
const navMenu = document.querySelector('nav ul');
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '&#9776;';
document.querySelector('header').insertBefore(hamburger, navMenu);

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Styling for the hamburger menu dynamically added via JavaScript
const style = document.createElement('style');
style.textContent = `
    .hamburger {
        display: none;
        font-size: 30px;
        cursor: pointer;
        margin-left: 20px;
    }
    
    @media (max-width: 768px) {
        .hamburger {
            display: block;
        }
        nav ul {
            display: none;
            flex-direction: column;
        }
        nav ul.open {
            display: flex;
        }
    }
`;
document.head.appendChild(style);
