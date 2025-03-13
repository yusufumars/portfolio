### Updated CSS with Animations
```css name=styles.css
/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f9fafb;
    color: #111827;
}

/* Smooth fade-in effect */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.show {
    opacity: 1;
    transform: translateY(0);
}

/* Navbar Styling */
nav ul li a {
    transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
    color: #1D4ED8; /* Tailwind Blue-700 */
}

/* Section Styling */
section {
    padding: 4rem 0;
    animation: fadeIn 1s ease-out forwards;
    opacity: 0; /* Ensure sections are initially hidden for fade-in effect */
}

/* Profile Image Styling */
.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    animation: bounceIn 1s ease-out forwards;
}

/* Certification Badges */
.certification-badge {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin: 10px auto;
    animation: zoomIn 1s ease-out forwards;
}

/* Grid Layouts */
.grid-cols-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.grid-cols-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Experience Section */
.experience-item {
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
}

.experience-item h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #111827;
}

.experience-item p {
    color: #6B7280; /* Tailwind Gray-500 */
}

.experience-item ul {
    list-style-type: disc;
    padding-left: 1.5rem;
}

.experience-item ul li {
    margin-bottom: 0.5rem;
}

/* Contact Section */
.contact-links a {
    color: #1D4ED8;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.contact-links a:hover {
    color: #2563EB; /* Tailwind Blue-600 */
}

/* Keyframes for Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounceIn {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

### JavaScript Code (No changes needed)
The JavaScript code you provided already handles the smooth scrolling and fade-in effect using IntersectionObserver, which works perfectly with the CSS classes and animations defined above. Here it is for reference:

```javascript name=script.js
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll("nav ul li a");
    var sections = document.querySelectorAll("section");
    var observer;

    // Smooth scrolling
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    }

    // Section fade-in effect
    if (typeof IntersectionObserver !== "undefined") {
        observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.3 });

        for (var j = 0; j < sections.length; j++) {
            observer.observe(sections[j]);
        }
    }

    // Dynamic year update
    var yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
```

This combination of updated CSS and the provided JavaScript will create a lively, animated portfolio website.
