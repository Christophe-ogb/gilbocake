document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const heroBtn = document.querySelector('.cta-btn');
    const produitsSection = document.getElementById('produits');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    // Changement de style du header au scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Bouton de défilement vers la section des produits
    if (heroBtn && produitsSection) {
        heroBtn.addEventListener('click', function() {
            produitsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Gestion du menu burger mobile
    if (navToggle && nav && navLinks && mobileMenuOverlay) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-active');
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Fermer le menu mobile en cliquant sur un lien ou sur l'overlay
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-active');
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        mobileMenuOverlay.addEventListener('click', () => {
            nav.classList.remove('mobile-active');
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
});

const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmation-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire pour l'exemple

    // Ici, vous ajouteriez le code pour envoyer le formulaire (avec un service comme Formspree)

    // Affiche le message de confirmation
    confirmationMessage.style.display = 'block';

    // Réinitialise le formulaire
    contactForm.reset();
});