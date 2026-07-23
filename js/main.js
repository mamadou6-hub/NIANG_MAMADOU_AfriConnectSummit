/**
 * ============================================
 * AFRICONNECT SUMMIT 2026 - JAVASCRIPT
 * Toutes les pages
 * ============================================
 */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // 1. DARK MODE / LIGHT MODE
    // ============================================

    (function initTheme() {
        const themeCheckbox = document.getElementById('themeCheckbox');
        if (!themeCheckbox) return;

        const savedTheme = localStorage.getItem('africonnect-theme');
        
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeCheckbox.checked = true;
        } else if (savedTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            themeCheckbox.checked = false;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeCheckbox.checked = true;
                localStorage.setItem('africonnect-theme', 'dark');
            }
        }

        themeCheckbox.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('africonnect-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('africonnect-theme', 'light');
            }
        });
    })();


    // ============================================
    // 2. NAVBAR DYNAMIQUE + HAMBURGER
    // ============================================

    (function initNavbar() {
        const navbar = document.querySelector('.navbar');
        const hamburger = document.querySelector('.hamburger');
        const menuToggle = document.getElementById('menu-toggle');

        if (hamburger && menuToggle) {
            hamburger.addEventListener('click', function(e) {
                e.preventDefault();
                menuToggle.checked = !menuToggle.checked;
            });
        }

        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (menuToggle) {
                    menuToggle.checked = false;
                }
            });
        });

        if (navbar) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 80) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
            });
        }
    })();


    // ============================================
    // 3. ANIMATIONS AU SCROLL (IntersectionObserver)
    // ============================================

    (function initScrollAnimations() {
        const sections = document.querySelectorAll('.section-fade');
        
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        sections.forEach(function(section) {
            observer.observe(section);
        });
    })();


    // ============================================
    // 4. ONGLETS PROGRAMME (page programme.html)
    // ============================================

    (function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabBtns.length === 0) return;

        tabBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                tabBtns.forEach(function(b) {
                    b.classList.remove('active');
                });
                this.classList.add('active');

                const dayId = this.getAttribute('data-day');

                tabContents.forEach(function(content) {
                    content.classList.remove('active');
                });

                const targetContent = document.getElementById('day' + dayId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    })();


    // ============================================
    // 5. FILTRAGE INTERVENANTS (page intervenants.html)
    // ============================================

    (function initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const speakerCards = document.querySelectorAll('.speaker-full');

        if (filterBtns.length === 0 || speakerCards.length === 0) return;

        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterBtns.forEach(function(b) {
                    b.classList.remove('active');
                });
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                speakerCards.forEach(function(card) {
                    const category = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    })();


    // ============================================
    // 6. VALIDATION FORMULAIRE (page contact.html)
    // ============================================

    (function initFormValidation() {
        const form = document.getElementById('inscriptionForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;

            const nom = document.getElementById('nom');
            const email = document.getElementById('email');
            const telephone = document.getElementById('telephone');
            const participation = document.getElementById('participation');
            const pays = document.getElementById('pays');
            const message = document.getElementById('message');

            const nomError = document.getElementById('nomError');
            const emailError = document.getElementById('emailError');
            const telephoneError = document.getElementById('telephoneError');
            const participationError = document.getElementById('participationError');
            const paysError = document.getElementById('paysError');
            const messageError = document.getElementById('messageError');
            const successMsg = document.getElementById('formSuccess');

            const allInputs = form.querySelectorAll('input, select, textarea');
            allInputs.forEach(function(input) {
                input.classList.remove('error', 'success');
            });

            document.querySelectorAll('.error-msg').forEach(function(msg) {
                msg.classList.remove('visible');
            });

            // Validation Nom
            if (!nom.value.trim()) {
                nom.classList.add('error');
                nomError.classList.add('visible');
                isValid = false;
            } else {
                nom.classList.add('success');
            }

            // Validation Email (regex)
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                email.classList.add('error');
                emailError.classList.add('visible');
                isValid = false;
            } else {
                email.classList.add('success');
            }

            // Validation Telephone (min 8 chiffres)
            const phoneDigits = telephone.value.replace(/\D/g, '');
            if (!telephone.value.trim() || phoneDigits.length < 8) {
                telephone.classList.add('error');
                telephoneError.classList.add('visible');
                isValid = false;
            } else {
                telephone.classList.add('success');
            }

            // Validation Participation
            if (!participation.value) {
                participation.classList.add('error');
                participationError.classList.add('visible');
                isValid = false;
            } else {
                participation.classList.add('success');
            }

            // Validation Pays
            if (!pays.value) {
                pays.classList.add('error');
                paysError.classList.add('visible');
                isValid = false;
            } else {
                pays.classList.add('success');
            }

            // Validation Message (min 20 caracteres)
            if (!message.value.trim() || message.value.trim().length < 20) {
                message.classList.add('error');
                messageError.classList.add('visible');
                isValid = false;
            } else {
                message.classList.add('success');
            }

            // Si tout est valide
            if (isValid) {
                successMsg.classList.add('show');
                successMsg.style.display = 'block';

                setTimeout(function() {
                    form.reset();
                    allInputs.forEach(function(input) {
                        input.classList.remove('error', 'success');
                    });
                    successMsg.classList.remove('show');
                    successMsg.style.display = 'none';
                }, 2500);
            }
        });

        // Validation en temps reel
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(function(input) {
            input.addEventListener('blur', function() {
                if (this.value.trim()) {
                    this.classList.remove('error');
                    this.classList.add('success');
                } else {
                    this.classList.remove('success');
                }
            });
        });
    })();


    // ============================================
    // 7. BOUTON RETOUR EN HAUT (toutes les pages)
    // ============================================

    (function initBackToTop() {
        const backBtn = document.querySelector('.back-top');
        if (!backBtn) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        });

        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    })();


    // ============================================
    // 8. ANNEE DYNAMIQUE DANS LE FOOTER
    // ============================================

    (function initCopyright() {
        const copyrights = document.querySelectorAll('.copyright');
        const currentYear = new Date().getFullYear();

        copyrights.forEach(function(el) {
            el.textContent = el.textContent.replace(/\d{4}/, currentYear);
        });
    })();


    // ============================================
    // 9. COMPTE A REBOURS (page accueil)
    // ============================================

    (function initCountdown() {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (!daysEl) return;

        const targetDate = new Date('October 15, 2026 09:00:00').getTime();

        function updateCountdown() {
            const now = Date.now();
            const diff = Math.max(0, targetDate - now);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    })();

});