/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS (only if swiper exists) ===============*/
if (typeof Swiper !== 'undefined' && document.querySelector('.projects__container.swiper')) {
    let swiperProjects = new Swiper(".projects__container", {
        loop: true,
        spaceBetween: 24,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
            1200: {
              slidesPerView: 2,
              spaceBetween: -56,
            },
        },
    });
}

/*=============== SWIPER TESTIMONIAL (only if swiper exists) ===============*/
if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial__container.swiper')) {
    let swiperTestimonial = new Swiper(".testimonial__container", {
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
}

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Let the form submit naturally to Formspree
        // Show loading state
        if (contactMessage) {
            contactMessage.textContent = 'Sending message...'
            contactMessage.classList.remove('color-red')
            contactMessage.classList.add('color-blue')
        }
    })
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (sectionsClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up')
    if (scrollUpBtn) {
        this.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
                            : scrollUpBtn.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    if (themeButton) {
        if (selectedTheme === 'dark') {
            themeButton.classList.add('ri-sun-line')
            themeButton.classList.remove('ri-moon-line')
        } else {
            themeButton.classList.add('ri-moon-line')
            themeButton.classList.remove('ri-sun-line')
        }
    }
} else {
    // Default to dark theme icon which is sun
    if (themeButton && document.body.classList.contains(darkTheme)) {
        themeButton.classList.add('ri-sun-line')
        themeButton.classList.remove('ri-moon-line')
    }
}

// Activate / deactivate the theme manually with the button
if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        
        if (document.body.classList.contains(darkTheme)) {
            themeButton.classList.add('ri-sun-line')
            themeButton.classList.remove('ri-moon-line')
        } else {
            themeButton.classList.add('ri-moon-line')
            themeButton.classList.remove('ri-sun-line')
        }
        
        localStorage.setItem('selected-theme', getCurrentTheme())
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    if (header) {
        this.scrollY >= 50 ? header.classList.add('scroll-header') 
                           : header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    })

    // Home page animations
    sr.reveal('.home__data, .home__images')
    sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100})
    
    // Services animations
    sr.reveal('.services__card', {interval: 100})
    
    // Skills animations
    sr.reveal('.skills__content:nth-child(1)', {origin: 'left'})
    sr.reveal('.skills__content:nth-child(2)', {origin: 'right'})
    
    // About page animations
    sr.reveal('.summary__card', {interval: 100})
    sr.reveal('.competency', {interval: 100})
    sr.reveal('.timeline__item', {interval: 150})
    sr.reveal('.education__card', {interval: 100})
    sr.reveal('.language__card', {interval: 100})
    
    // Projects page animations
    sr.reveal('.project__card', {interval: 100})
    sr.reveal('.stat__card', {interval: 100})
    
    // Contact page animations
    sr.reveal('.contact__content:nth-child(1)', {origin: 'left'})
    sr.reveal('.contact__content:nth-child(2)', {origin: 'right'})
    sr.reveal('.location__card', {interval: 100})
    sr.reveal('.faq__item', {interval: 100})
    
    // CTA animations
    sr.reveal('.cta__content')
    
    // Footer animations
    sr.reveal('.footer__container')
}

/*=============== ANIMATE SKILL BARS ON SCROLL ===============*/
const skillBars = document.querySelectorAll('.language__progress')

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width
        bar.style.width = '0'
        setTimeout(() => {
            bar.style.width = width
        }, 500)
    })
}

// Trigger animation when skills section is visible
if (skillBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars()
                observer.disconnect()
            }
        })
    }, { threshold: 0.5 })

    const languagesSection = document.querySelector('.languages')
    if (languagesSection) {
        observer.observe(languagesSection)
    }
}

/*=============== SMOOTH SCROLL FOR ANCHOR LINKS ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href')
        if (href !== '#') {
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }
    })
})
