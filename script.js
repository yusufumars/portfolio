/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f9fafb;
    color: #111827;
    transition: background-color 0.3s ease-in-out;
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
header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 50;
    transition: box-shadow 0.3s ease-in-out;
}

nav ul li a {
    transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
    color: #1D4ED8;
}

/* Section Styling */
section {
    padding: 4rem 0;
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

/* Timeline Experience Section */
.timeline {
    position: relative;
    max-width: 800px;
    margin: auto;
}

.timeline-item {
    background: white;
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-out forwards;
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

/* Contact Section */
.contact-links a {
    color: #1D4ED8;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.contact-links a:hover {
    color: #2563EB;
}

/* Footer Styling */
footer {
    background-color: #1F2937;
    color: #F9FAFB;
    text-align: center;
    padding: 1rem 0;
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

/* Navbar Scroll Effect */
header.shadow-lg {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
