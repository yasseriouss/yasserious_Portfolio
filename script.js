// Localization Data
const translations = {
    en: {
        'location-city': '10th Of Ramadan City',
        'location-full': '6 October, 1st District, Egypt',
        'experience-label': 'Years CNC Exp',
        'projects-label': 'Projects Delivered',
        'about-title': 'A Multi-Dimensional Professional',
        'about-subtitle': 'Combining technical precision with creative innovation to deliver exceptional results across industries.',
        'about-text-1': 'Results-driven professional with a unique blend of engineering precision and creative problem-solving. Specializing in advanced furniture manufacturing with expertise in production optimization, quality control, and precision woodworking processes.',
        'about-text-2': 'My background spans IT systems management and technical sales, enabling me to bridge technical and business domains seamlessly. Committed to implementing innovative solutions that enhance efficiency, reduce waste, and maintain exceptional quality standards.',
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contact Me',
        'hero-eyebrow': 'Technical Creative & Production Expert',
        'hero-description': 'Bridging the gap between precision engineering, digital innovation, and creative solutions.',
        'hero-btn-1': 'Explore My Journey',
        'hero-btn-2': 'Get In Touch',
        'experience-subtitle': 'A track record of excellence across manufacturing and technology sectors.',
        'experience-title': 'Professional Journey',
        'gallery-title': 'Instagram Gallery',
        'gallery-subtitle': 'Follow my creative journey and latest updates on Instagram @yasserious_',
        'gallery-text': 'Stay updated with my latest projects, behind-the-scenes moments, and creative endeavors.',
        'gallery-btn': 'Follow on Instagram',
        'contact-title': "Let's Connect",
        'contact-subtitle': 'Ready to discuss opportunities, collaborations, or just have a conversation about manufacturing innovation.',
        'contact-info-title': 'Contact Information',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-whatsapp': 'WhatsApp',
        'contact-linkedin': 'LinkedIn',
        'contact-location': 'Location',
    },
    ar: {
        'location-city': 'مدينة العاشر من رمضان',
        'location-full': 'السادس من أكتوبر، الحي الأول، مصر',
        'experience-label': 'سنوات خبرة CNC',
        'projects-label': 'مشروع مسلم',
        'about-title': 'متعدد المواهب والكفاءات',
        'about-subtitle': 'دمج الدقة الهندسية مع الابتكار الإبداعي لتقديم نتائج استثنائية عبر الصناعات والقطاعات المختلفة.',
        'about-text-1': 'متخصص في النتائج يتمتع بمزيج فريد من الدقة الهندسية وحل المشاكل الإبداعي. متخصص في تصنيع الأثاث المتقدم مع خبرة في تحسين الإنتاج والتحكم في الجودة وعمليات النجارة الدقيقة.',
        'about-text-2': 'خبرتي تغطي إدارة أنظمة تكنولوجيا المعلومات والمبيعات التقنية، مما يمكنني من ربط المجالات التقنية والتجارية بسلاسة. ملتزم بتطبيق حلول مبتكرة تعزز الكفاءة وتقلل الهدر والالتزام بمعايير الجودة الاستثنائية.',
        'nav-about': 'حول',
        'nav-experience': 'الخبرة',
        'nav-projects': 'المشروعات',
        'nav-skills': 'المهارات',
        'nav-gallery': 'المعرض',
        'nav-contact': 'تواصل معي',
        'hero-eyebrow': 'خبير إبداعي تقني وإنتاجي',
        'hero-description': 'سد الفجوة بين الهندسة الدقيقة والابتكار الرقمي والحلول الإبداعية.',
        'hero-btn-1': 'استكشف رحلتي',
        'hero-btn-2': 'تواصل معي',
        'experience-subtitle': 'سجل حافل بالتميز عبر قطاعات التصنيع والتكنولوجيا.',
        'experience-title': 'الرحلة المهنية',
        'gallery-title': 'معرض إنستجرام',
        'gallery-subtitle': 'تابع رحلتي الإبداعية وآخر التحديثات على إنستجرام @yasserious_',
        'gallery-text': 'ابق محدثًا مع آخر المشاريع والعروض الخلفية واللحظات الإبداعية.',
        'gallery-btn': 'متابعة على إنستجرام',
        'contact-title': 'دعنا نتواصل',
        'contact-subtitle': 'مستعد لمناقشة الفرص والتعاونيات أو فقط الحديث عن الابتكار في التصنيع.',
        'contact-info-title': 'معلومات التواصل',
        'contact-email': 'البريد الإلكتروني',
        'contact-phone': 'الهاتف',
        'contact-whatsapp': 'واتساب',
        'contact-linkedin': 'لينكدين',
        'contact-location': 'الموقع',
    }
};

let currentLang = 'en';
let currentTheme = 'lofi';
const themes = ['lofi', 'dark', 'light'];

function initializeApp() {
    // Check localStorage for saved preferences
    const savedLang = localStorage.getItem('language') || 'en';
    const savedTheme = localStorage.getItem('theme') || 'lofi';
    
    currentLang = savedLang;
    currentTheme = savedTheme;
    
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    setupEventListeners();
}

function applyTheme(theme) {
    const root = document.documentElement;
    
    // Remove all theme classes
    themes.forEach(t => {
        root.classList.remove(`theme-${t}`);
    });
    
    // Add the new theme class
    if (theme !== 'dark') {
        root.classList.add(`theme-${theme}`);
    }
    
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // Update theme button
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        const themeIcons = {
            'lofi': '🎨',
            'dark': '🌙',
            'light': '☀️'
        };
        themeBtn.textContent = themeIcons[theme];
        themeBtn.title = `Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
    }
    
    // Update dropdown active states
    updateThemeDropdown();
}

function updateThemeDropdown() {
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => {
        if (option.dataset.theme === currentTheme) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function toggleTheme(themeSelect) {
    if (themeSelect) {
        applyTheme(themeSelect);
    } else {
        // Cycle through themes: lofi -> dark -> light -> lofi
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        applyTheme(themes[nextIndex]);
    }
    closeThemeDropdown();
}

function openThemeDropdown() {
    const dropdown = document.getElementById('themeDropdown');
    if (dropdown) {
        dropdown.classList.add('active');
    }
}

function closeThemeDropdown() {
    const dropdown = document.getElementById('themeDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update document language attribute
    document.documentElement.lang = lang;
    // Set text direction for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update text content for translated elements
    Object.keys(translations[lang]).forEach(key => {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(el => {
            el.textContent = translations[lang][key];
        });
    });
    
    // Update language button
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'العربية' : 'EN';
        langBtn.title = lang === 'en' ? 'عربي' : 'English';
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(newLang);
}

function setupEventListeners() {
    // Theme toggle button
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            openThemeDropdown();
        });
    }
    
    // Theme options
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedTheme = e.target.dataset.theme;
            toggleTheme(selectedTheme);
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const wrapper = document.querySelector('.theme-dropdown-wrapper');
        if (wrapper && !wrapper.contains(e.target)) {
            closeThemeDropdown();
        }
    });
    
    // Language toggle
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialize theme and language
    initializeApp();
    
    /* =========================================================================
       Navbar Scroll Effect & Mobile Menu
       ========================================================================= */
    const navbar = document.getElementById("navbar");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        // Transform hamburger icon
        const spans = mobileMenuBtn.querySelectorAll("span");
        if (navLinks.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(7px, -8px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        }
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                mobileMenuBtn.click();
            }
        });
    });

    /* =========================================================================
       Intersection Observer for Scroll Animations
       ========================================================================= */
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Optional: Stop observing once varied
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    /* =========================================================================
       Contact Form Handling
       ========================================================================= */
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        const submitBtn = contactForm.querySelector(".submit-btn");
        const btnText = submitBtn.querySelector("span");
        const loader = submitBtn.querySelector(".loader");
        const formMessage = document.getElementById("form-message");

        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload

            // UI Loading state
            btnText.textContent = "Sending...";
            loader.classList.remove("hidden");
            submitBtn.disabled = true;
            formMessage.classList.add("hidden");
            formMessage.className = "form-message"; // reset

            // Simulate API call delay
            setTimeout(() => {
                // Success state UI
                btnText.textContent = "Send Message";
                loader.classList.add("hidden");
                submitBtn.disabled = false;

                formMessage.textContent =
                    "Thank you! Your message has been sent successfully.";
                formMessage.classList.add("success");
                formMessage.classList.remove("hidden");

                // Reset form fields
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.add("hidden");
                }, 5000);
            }, 1500);
        });
    }
});
