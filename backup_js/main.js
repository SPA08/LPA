/* ==========================================================================
   Siddhu Property Advisor - Interactive JavaScript
   CEO: Naeem Siddhu | Contact: +92 306 3996764 | info@siddhupropertyadvisor.com
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when link clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Interactive Town Overlay Cards Toggle & Map Focus
  const townCards = document.querySelectorAll('.town-badge-card');
  const mapIframe = document.querySelector('.live-map-iframe');

  const townMapLocations = {
    'hayat-abad': 'https://maps.google.com/maps?q=Siddhu+Property+Advisor,+Tower+Road+Side,+Hayatabad,+Chichawatni,+Punjab+57200,+Pakistan&t=&z=18&ie=UTF8&iwloc=B&output=embed',
    'model-town': 'https://maps.google.com/maps?q=Model+Town,+Chichawatni,+Punjab,+Pakistan&t=&z=17&ie=UTF8&iwloc=B&output=embed',
    'green-town': 'https://maps.google.com/maps?q=Green+Town,+Chichawatni,+Punjab,+Pakistan&t=&z=17&ie=UTF8&iwloc=B&output=embed',
    'housing-colony': 'https://maps.google.com/maps?q=Housing+Colony,+Chichawatni,+Punjab,+Pakistan&t=&z=17&ie=UTF8&iwloc=B&output=embed'
  };

  townCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active from all cards
      townCards.forEach(c => c.classList.remove('active'));
      // Add active to clicked card so remaining cards slide/fade
      card.classList.add('active');

      const townKey = card.getAttribute('data-town');
      if (townKey && townMapLocations[townKey] && mapIframe) {
        mapIframe.src = townMapLocations[townKey];
      }
    });
  });

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Intersection Observer for Smooth Scroll Reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  const animatableSelectors = [
    'section .section-title',
    'section .section-subtitle',
    '.property-card',
    '.why-card',
    '.review-card',
    '.featured-card',
    '.map-explorer-card',
    '.ceo-grid',
    '.cta-banner'
  ];

  document.querySelectorAll(animatableSelectors.join(', ')).forEach(el => {
    el.classList.add('reveal-on-scroll');
    scrollObserver.observe(el);
  });


  // Lightbox Modal Setup
  const modal = document.getElementById('propertyModal');
  const modalClose = document.getElementById('modalClose');

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Footer Entrance Animation (Runs once when footer enters viewport)
  const footerEl = document.querySelector('.site-footer, footer');
  if (footerEl) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footerEl.classList.add('animated-in');
          footerObserver.unobserve(footerEl);
        }
      });
    }, { threshold: 0.1 });
    footerObserver.observe(footerEl);
  }

});

// Direct WhatsApp Inquiry Trigger Function
function openWhatsAppInquiry(propertyTitle = 'General Property Inquiry') {
  const phone = '923063996764'; // Official Contact Number for Naeem Siddhu
  const message = `Assalam-o-Alaikum Naeem Siddhu Sahab! I am visiting the Siddhu Property Advisor website and inquiring about: ${propertyTitle}. Please share details.`;
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMsg}`;
  window.open(whatsappUrl, '_blank');
}

// Lightbox Modal Opener
function openPropertyModal(imgSrc, title, location, specs) {
  const modal = document.getElementById('propertyModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalLocation = document.getElementById('modalLocation');
  const modalSpecs = document.getElementById('modalSpecs');

  if (modalImg) modalImg.src = imgSrc;
  if (modalTitle) modalTitle.textContent = title;
  if (modalLocation) modalLocation.textContent = location;
  if (modalSpecs) modalSpecs.textContent = specs;

  if (modal) modal.classList.add('active');
}
