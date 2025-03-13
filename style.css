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

    // Navbar background change on scroll
    var navbar = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-lg");
        } else {
            navbar.classList.remove("shadow-lg");
        }
    });
});
