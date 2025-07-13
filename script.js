  // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        // Scroll animation trigger
        const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
        function checkScrollAnimations() {
            const triggerPoint = window.innerHeight * 0.8;
            animateOnScrollElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < triggerPoint) {
                    element.classList.add('animated');
                }
            });
        }
        window.addEventListener('scroll', checkScrollAnimations);
        window.addEventListener('load', checkScrollAnimations);


         // Ensure images are loaded before showing the carousel
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.slider img');
            let loadedCount = 0;

            const checkAllLoaded = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    document.querySelector('.slider-container').classList.add('loaded');
                }
            };

            images.forEach(img => {
                if (img.complete) {
                    checkAllLoaded();
                } else {
                    img.addEventListener('load', checkAllLoaded);
                    img.addEventListener('error', () => {
                        console.error('Image failed to load:', img.src);
                        checkAllLoaded();
                    });
                }
            });
        });