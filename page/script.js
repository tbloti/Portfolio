// Navigation Menu Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navClose = document.getElementById("nav-close")
const navLinks = document.querySelectorAll(".nav-link")

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

// Close menu when clicking on nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
})

// Active Link on Scroll
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 100
    const sectionId = current.getAttribute("id")
    const link = document.querySelector(`.nav-link[href*="${sectionId}"]`)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add("active")
    } else {
      link?.classList.remove("active")
    }
  })
}

window.addEventListener("scroll", scrollActive)

// Header Shadow on Scroll
const header = document.getElementById("header")

function scrollHeader() {
  if (window.scrollY >= 50) {
    header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"
  }
}

window.addEventListener("scroll", scrollHeader)

// Smooth Scroll for Safari
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll(".skill-progress")

const animateSkills = () => {
  skillBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top
    const screenPosition = window.innerHeight

    if (barPosition < screenPosition) {
      bar.style.width = bar.style.width || "0%"
    }
  })
}

window.addEventListener("scroll", animateSkills)

// Contact Form Handling
const contactForm = document.getElementById("contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Create mailto link
    const mailtoLink = `mailto:bernardolodi@gmail.com?subject=Contato de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0ADe: ${encodeURIComponent(email)}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    contactForm.reset()

    // Show success message (optional)
    alert("Obrigado pelo contato! Seu cliente de email será aberto.")
  })
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(20px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})