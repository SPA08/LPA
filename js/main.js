/* ==========================================================================
   Siddhu Property Advisor - Interactive JavaScript
   CEO: Naeem Siddhu | Contact: +92 306 3996764 | info@siddhupropertyadvisor.com
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Header Scroll Shadow
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
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

  // FAQ Accordion Toggle (Single-open with smooth aria updates)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isCurrentlyActive = item.classList.contains('active');
        
        // Close all items (enforce single-open accordion behavior)
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-header');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        // If clicked item was closed, open it; if it was already open, it stays closed
        if (!isCurrentlyActive) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
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
    '.hero-badge',
    '.hero-text-frosted',
    '.elyse-stats-row',
    '.search-card',
    'section .section-title',
    'section .section-subtitle',
    '.property-card',
    '.why-card',
    '.review-card',
    '.featured-card',
    '.map-explorer-card',
    '.ceo-grid',
    '.cta-banner',
    '.faq-item',
    '#reviews .container > div:first-child'
  ];

  document.querySelectorAll(animatableSelectors.join(', ')).forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    
    // Add staggered delay for grid items (e.g., cards, faqs)
    if (el.classList.contains('property-card') || el.classList.contains('faq-item') || el.classList.contains('review-card')) {
      const delay = (index % 4) * 100;
      if (delay > 0) {
        el.style.transitionDelay = `${delay}ms`;
      }
    }
    
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

  // ==========================================================================
  // Interactive Marquee Upgrades
  // ==========================================================================
  const marqueeSection = document.getElementById('marquee-section');
  const interactivePills = document.querySelectorAll('.interactive-pill');
  const serviceDetailPanel = document.getElementById('serviceDetailPanel');
  const serviceDetailContent = document.getElementById('serviceDetailContent');
  const closeServiceDetail = document.getElementById('closeServiceDetail');

  const marqueeServiceData = {
    'buy-property': {
      title: 'Buy Property',
      icon: 'fa-house',
      desc: 'Looking for a residential property or plot? Siddhu Property Advisor provides verified listings in premier Chichawatni areas like Hayat Abad, Model Town, and Housing Colony.',
      target: '#properties'
    },
    'sell-property': {
      title: 'Sell Property',
      icon: 'fa-tags',
      desc: 'Get the right market value for your residential house or commercial plot in Chichawatni. We connect genuine sellers with serious buyers, ensuring transparent and quick transactions.',
      target: '#contact'
    },
    'residential-houses': {
      title: 'Residential Houses',
      icon: 'fa-house-chimney',
      desc: 'Explore family homes across Chichawatni from 5 Marla to 1 Kanal. We focus on areas with solid infrastructure, utility connections, and secure neighborhood environments.',
      target: '#properties'
    },
    'property-record': {
      title: 'Property Record Guidance',
      icon: 'fa-file-shield',
      desc: 'Never invest blindly. We assist in verifying property ownership records (Fard) with the Arazi Record Center (ARC) to ensure your investment is safe and legally clear.',
      target: '#due-diligence'
    },
    'site-visit': {
      title: 'Site Visit Assistance',
      icon: 'fa-map-location-dot',
      desc: 'A physical inspection reveals what papers cannot. We organize direct site visits to inspect construction quality, road access, boundary lines, and neighborhood layout.',
      target: '#properties'
    },
    'local-area': {
      title: 'Local Area Guidance',
      icon: 'fa-compass',
      desc: "Understand the pros and cons of Chichawatni's housing societies. We provide unbiased insights into community facilities, distance from markets, and future area development.",
      target: '#areas'
    },
    'punjab-land-record': {
      title: 'Punjab Land Record / Fard Guidance',
      icon: 'fa-file-signature',
      desc: 'Navigate the PLRA system effortlessly. From obtaining a computerized Fard Malkiat to understanding Aks-Shajra, Naeem Siddhu guides you through official documentation.',
      target: '#due-diligence'
    },
    'documentation': {
      title: 'Documentation Guidance',
      icon: 'fa-folder-open',
      desc: 'Proper documentation is the foundation of a safe transfer. We review all agreements, transfer files, and registry drafts to protect your interests during property deals.',
      target: '#due-diligence'
    },
    'chichawatni-guidance': {
      title: 'Chichawatni Property Guidance',
      icon: 'fa-location-dot',
      desc: 'Expert real estate consulting specific to Chichawatni city limits. We help you stay informed about approved housing schemes versus illegal developments.',
      target: '#why-us'
    },
    'clear-guidance': {
      title: 'Clear Property Guidance',
      icon: 'fa-shield-halved',
      desc: 'We prioritize transparency. Get clear, straightforward advice regarding property valuation, legal status, and market trends in Chichawatni without hidden agendas. Always verify records before transactions.',
      target: null
    },
    'local-knowledge': {
      title: 'Local Chichawatni Knowledge',
      icon: 'fa-handshake-angle',
      desc: 'Deep roots in Chichawatni mean we know the history of areas, the quality of land, and the reliability of local builders. Benefit from true local expertise.',
      target: '#why-us'
    },
    'document-review': {
      title: 'Document Review Assistance',
      icon: 'fa-magnifying-glass-chart',
      desc: 'Before any commitment, we offer a comprehensive review of all property documents, checking for discrepancies, outstanding dues, or legal encumbrances.',
      target: '#due-diligence'
    },
    'seller-meetings': {
      title: 'Direct Seller Meetings',
      icon: 'fa-users',
      desc: 'We believe in direct negotiations. Meet face-to-face with buyers or sellers in our office to establish trust and agree on terms transparently.',
      target: '#contact'
    },
    'property-transfer': {
      title: 'Property Transfer Guidance',
      icon: 'fa-lock',
      desc: 'Smooth execution of property transfer processes. We guide you through the necessary steps for registry and mutation to ensure your ownership rights are securely established in accordance with local regulations.',
      target: null
    }
  };

  if (marqueeSection && interactivePills.length > 0) {
    let activePillId = null;

    const closeDetailPanel = () => {
      activePillId = null;
      interactivePills.forEach(p => p.classList.remove('active'));
      marqueeSection.classList.remove('is-paused');
      if (serviceDetailPanel) {
        serviceDetailPanel.classList.remove('show');
        setTimeout(() => {
          if (!activePillId) serviceDetailPanel.classList.remove('visible');
        }, 400); // Matches CSS transition duration
      }
    };

    if (closeServiceDetail) {
      closeServiceDetail.addEventListener('click', closeDetailPanel);
    }

    const renderServiceDetail = (id) => {
      const data = marqueeServiceData[id];
      if (!data || !serviceDetailContent) return;

      serviceDetailContent.innerHTML = '<div class="service-detail-title"><i class="fa-solid ' + data.icon + '"></i> ' + data.title + '</div><div class="service-detail-desc">' + data.desc + '</div>';
    };

    const activatePill = (pill) => {
      const id = pill.getAttribute('data-service-id');
      if (!id) return;

      if (activePillId === id) {
        closeDetailPanel();
        return;
      }

      interactivePills.forEach(p => p.classList.remove('active'));
      const matchingPills = document.querySelectorAll('.interactive-pill[data-service-id="' + id + '"]');
      matchingPills.forEach(p => p.classList.add('active'));
      
      activePillId = id;
      marqueeSection.classList.add('is-paused');

      const data = marqueeServiceData[id];
      if (data) {
        const targetEl = data.target ? document.querySelector(data.target) : null;
        if (targetEl) {
          // Dedicated section exists -> smooth scroll to it
          closeDetailPanel(); // Keep it clean
          
          // Re-apply active state to just the pills, since closeDetailPanel clears them
          activePillId = id;
          matchingPills.forEach(p => p.classList.add('active'));
          marqueeSection.classList.add('is-paused');
          
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Briefly highlight section
          const oldBg = targetEl.style.backgroundColor;
          targetEl.style.transition = 'background-color 0.5s ease';
          targetEl.style.backgroundColor = 'rgba(184, 138, 59, 0.08)';
          setTimeout(() => { targetEl.style.backgroundColor = oldBg; }, 1200);
        } else {
          // No dedicated section -> reveal neutral info card
          renderServiceDetail(id);
          if (serviceDetailPanel) {
            serviceDetailPanel.classList.add('visible');
            // small delay to allow display block to apply
            setTimeout(() => {
              serviceDetailPanel.classList.add('show');
            }, 20);
          }
        }
      }
    };

    interactivePills.forEach(pill => {
      pill.addEventListener('click', () => activatePill(pill));
      pill.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activatePill(pill);
        }
      });
    });
  }
