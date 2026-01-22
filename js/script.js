console.log("FitLife JavaScript Loaded Successfully");
/* Smooth Scroll for internal links  */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            ?.scrollIntoView({ behavior: 'smooth' });
    });
});


/* ===== Navbar active link highlight ===== */
/* ===== Navbar active link highlight & Mobile Menu ===== */
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

/* Toggle Mobile Menu */
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

/* Close mobile menu when link is clicked */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');

        // Close mobile menu
        if (hamburger && navMenu) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});


/* ===== Contact Form Submit Message ===== */
function showMessage() {
    alert("Thank you! Your message has been sent successfully.");
}


/* ===== Simple scroll animation (fade-in effect) ===== */
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
        }
    });
});

/* ===== BMI Calculator Logic ===== */
const calculateBtn = document.getElementById('calculate-bmi');
const bmiResult = document.getElementById('bmi-result');
const bmiValue = document.getElementById('bmi-value');
const bmiStatus = document.getElementById('bmi-status');

if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m

        if (weight > 0 && height > 0) {
            const bmi = (weight / (height * height)).toFixed(1);
            bmiValue.textContent = bmi;
            bmiResult.style.display = 'block';

            let status = '';
            bmiResult.classList.remove('underweight', 'normal', 'overweight', 'obese');

            if (bmi < 18.5) {
                status = 'Underweight';
                bmiResult.classList.add('underweight');
            } else if (bmi >= 18.5 && bmi < 25) {
                status = 'Normal weight';
                bmiResult.classList.add('normal');
            } else if (bmi >= 25 && bmi < 30) {
                status = 'Overweight';
                bmiResult.classList.add('overweight');
            } else {
                status = 'Obese';
                bmiResult.classList.add('obese');
            }
            bmiStatus.textContent = `You are: ${status}`;
        } else {
            alert('Please enter valid weight and height values.');
        }
    });
}
