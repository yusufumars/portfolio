{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 "use strict";\
\
document.addEventListener("DOMContentLoaded", function () \{\
    var navLinks = document.querySelectorAll("nav ul li a");\
    var sections = document.querySelectorAll("section");\
    var observer;\
\
    // Smooth scrolling\
    for (var i = 0; i < navLinks.length; i++) \{\
        navLinks[i].addEventListener("click", function (event) \{\
            event.preventDefault();\
            var targetId = this.getAttribute("href").substring(1);\
            var targetSection = document.getElementById(targetId);\
\
            if (targetSection) \{\
                window.scrollTo(\{\
                    top: targetSection.offsetTop - 60,\
                    behavior: "smooth"\
                \});\
            \}\
        \});\
    \}\
\
    // Section fade-in effect\
    if (typeof IntersectionObserver !== "undefined") \{\
        observer = new IntersectionObserver(function (entries) \{\
            entries.forEach(function (entry) \{\
                if (entry.isIntersecting) \{\
                    entry.target.classList.add("show");\
                \}\
            \});\
        \}, \{ threshold: 0.3 \});\
\
        for (var j = 0; j < sections.length; j++) \{\
            observer.observe(sections[j]);\
        \}\
    \}\
\
    // Dynamic year update\
    var yearSpan = document.getElementById("currentYear");\
    if (yearSpan) \{\
        yearSpan.textContent = new Date().getFullYear();\
    \}\
\});\
}