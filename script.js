document.addEventListener("DOMContentLoaded", (event) => {

    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    // Tie Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. GSAP Intro Animations (Hero Page Load)
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to("#navbar", { opacity: 1, y: 0, duration: 1, startAt: { y: -20 } })
        .to("#sidebar", { opacity: 1, x: 0, duration: 0.8, startAt: { x: -20 } }, "-=0.6")
        .to("#hero-title", { opacity: 1, y: 0, duration: 1.2, startAt: { y: 40 } }, "-=0.6")
        .to("#hero-subtitle", { opacity: 1, y: 0, duration: 1, startAt: { y: 20 } }, "-=0.8")
        .to("#card-right", { opacity: 1, y: 0, duration: 1, startAt: { y: 50 } }, "-=0.8");

    // 3. GSAP Parallax & Depth Animations (Hero Scroll)
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        gsap.to("#bg-image", {
            yPercent: 15, ease: "none",
            scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: true }
        });
        gsap.to("#card-right", {
            y: -150, ease: "none",
            scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: true }
        });
        gsap.to("#hero-title", {
            y: 50, opacity: 0.5, ease: "none",
            scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: true }
        });
    });

    mm.add("(max-width: 767px)", () => {
        gsap.to("#bg-image", {
            yPercent: 10, ease: "none",
            scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: true }
        });
    });

    // 4. GSAP Rental Section Text Animations (Scroll Pinned)
    mm.add("(min-width: 768px)", () => {
        const rentalTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#rental-section",
                start: "top top",
                end: "+=1500",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        rentalTl.from(".text-line:nth-child(1)", { x: -150, opacity: 0, duration: 0.8, ease: "power2.out" }, 0)
            .from(".text-line:nth-child(2)", { y: -150, opacity: 0, duration: 0.8, ease: "power2.out" }, 0.2)
            .from(".text-line:nth-child(3)", { y: 150, opacity: 0, duration: 0.8, ease: "power2.out" }, 0.4);
    });

    mm.add("(max-width: 767px)", () => {
        const rentalTlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: "#rental-section",
                start: "top top",
                end: "+=1000",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        rentalTlMobile.from(".text-line:nth-child(1)", { x: -50, opacity: 0, duration: 0.8, ease: "power2.out" }, 0)
            .from(".text-line:nth-child(2)", { y: -50, opacity: 0, duration: 0.8, ease: "power2.out" }, 0.2)
            .from(".text-line:nth-child(3)", { y: 50, opacity: 0, duration: 0.8, ease: "power2.out" }, 0.4);
    });

    // 5. GSAP Section 3 Cinematic Animations
    mm.add("(min-width: 768px)", () => {
        const sec3Tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-3",
                start: "top top",
                end: "+=2500",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        sec3Tl.fromTo("#sec3-bg", { yPercent: -5, scale: 1.05 }, { yPercent: 5, scale: 1, ease: "none" }, 0);
        sec3Tl.fromTo("#sec3-fog", { xPercent: -2 }, { xPercent: 2, ease: "none" }, 0);

        gsap.to("#sec3-sun", { scale: 1.1, opacity: 0.8, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });

        sec3Tl.from("#sec3-left-text", { x: -50, opacity: 0, duration: 1, ease: "power3.out" }, 0.5)
            .from("#sec3-title-line-1", { y: 80, opacity: 0, duration: 1, ease: "power3.out" }, 1)
            .from("#sec3-title-line-2", { y: 80, opacity: 0, duration: 1, ease: "power3.out" }, 1.5)
            .from("#sec3-meta-left", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, 2)
            .from("#sec3-jp-text", { opacity: 0, duration: 1, ease: "power2.out" }, 2.2)
            .from("#sec3-cta", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, 2.5)
            .from("#sec3-scroll", { opacity: 0, duration: 0.8, ease: "power2.out" }, 3);
    });

    mm.add("(max-width: 767px)", () => {
        const sec3TlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-3",
                start: "top top",
                end: "+=1500",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        sec3TlMobile.fromTo("#sec3-bg", { yPercent: -3, scale: 1.02 }, { yPercent: 3, scale: 1, ease: "none" }, 0);

        sec3TlMobile.from("#sec3-left-text", { x: -30, opacity: 0, duration: 1, ease: "power3.out" }, 0.5)
            .from("#sec3-title-line-1", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, 1)
            .from("#sec3-title-line-2", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, 1.2)
            .from("#sec3-meta-left", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, 1.5)
            .from("#sec3-cta", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, 1.8)
            .from("#sec3-scroll", { opacity: 0, duration: 0.8, ease: "power2.out" }, 2);
    });

    // 6. GSAP Section 4 - Travel Destination Carousel
    const indicators = gsap.utils.toArray('.indicator');

    function updateIndicators(index) {
        indicators.forEach((ind, i) => {
            if (i === index) ind.classList.add('active');
            else ind.classList.remove('active');
        });
    }

    mm.add("(min-width: 768px)", () => {
        gsap.set('.dest-info-box', { opacity: 0, x: -20 });
        gsap.set('#dest-1 .dest-info-box', { opacity: 1, x: 0 });

        const sec4Tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-4",
                start: "top top",
                end: "+=4000",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        sec4Tl.to("#sec4-left-content", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .from("#sec4-left-content", { y: 30, duration: 1 }, "<");

        sec4Tl.to('#dest-1', { top: '15%', right: '20%', scale: 0.8, opacity: 0.6, duration: 1.5 })
            .to('#dest-1 .dest-info-box', { opacity: 0, x: -20, duration: 1 }, '<')
            .to('#dest-2', { top: '50%', right: '5%', scale: 1.1, opacity: 1, duration: 1.5 }, '<')
            .to('#dest-2 .dest-info-box', { opacity: 1, x: 0, duration: 1 }, '<')
            .to('#dest-3', { top: '85%', right: '20%', scale: 0.8, opacity: 0.6, duration: 1.5 }, '<')
            .to('#dest-4', { top: '110%', right: '25%', scale: 0.6, opacity: 0, duration: 1.5 }, '<')
            .to('#dest-5', { top: '110%', right: '25%', scale: 0.6, opacity: 0, duration: 1.5 }, '<')
            .addLabel('dest2Active')
            .call(() => updateIndicators(1), null, 'dest2Active');

        sec4Tl.to('#dest-1', { top: '-10%', right: '25%', scale: 0.6, opacity: 0, duration: 1.5 })
            .to('#dest-2', { top: '15%', right: '20%', scale: 0.8, opacity: 0.6, duration: 1.5 }, '<')
            .to('#dest-2 .dest-info-box', { opacity: 0, x: -20, duration: 1 }, '<')
            .to('#dest-3', { top: '50%', right: '5%', scale: 1.1, opacity: 1, duration: 1.5 }, '<')
            .to('#dest-3 .dest-info-box', { opacity: 1, x: 0, duration: 1 }, '<')
            .to('#dest-4', { top: '85%', right: '20%', scale: 0.8, opacity: 0.6, duration: 1.5 }, '<')
            .to('#dest-5', { top: '110%', right: '25%', scale: 0.6, opacity: 0, duration: 1.5 }, '<')
            .addLabel('dest3Active')
            .call(() => updateIndicators(2), null, 'dest3Active');

        sec4Tl.to('#dest-2', { top: '-10%', right: '25%', scale: 0.6, opacity: 0, duration: 1.5 })
            .to('#dest-3', { top: '15%', right: '20%', scale: 0.8, opacity: 0.6, duration: 1.5 }, '<')
            .to('#dest-3 .dest-info-box', { opacity: 0, x: -20, duration: 1 }, '<')
            .to('#dest-4', { top: '50%', right: '5%', scale: 1.1, opacity: 1, duration: 1.5 }, '<')
            .to('#dest-4 .dest-info-box', { opacity: 1, x: 0, duration: 1 }, '<')
            .to('#dest-5', { top: '85%', right: '20%', scale: 0.8, opacity: 0.6, duration: 1.5 }, '<')
            .addLabel('dest4Active')
            .call(() => updateIndicators(3), null, 'dest4Active');

        sec4Tl.to('#dest-3', { top: '-10%', right: '25%', scale: 0.6, opacity: 0, duration: 1.5 })
            .to('#dest-4', { top: '15%', right: '20%', scale: 0.8, opacity: 0.6, duration: 1.5 }, '<')
            .to('#dest-4 .dest-info-box', { opacity: 0, x: -20, duration: 1 }, '<')
            .to('#dest-5', { top: '50%', right: '5%', scale: 1.1, opacity: 1, duration: 1.5 }, '<')
            .to('#dest-5 .dest-info-box', { opacity: 1, x: 0, duration: 1 }, '<')
            .addLabel('dest5Active')
            .call(() => updateIndicators(4), null, 'dest5Active');
    });

    mm.add("(max-width: 767px)", () => {
        gsap.set('.dest-info-box', { opacity: 0, y: 20 });
        gsap.set('#dest-1 .dest-info-box', { opacity: 1, y: 0 });

        const sec4TlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-4",
                start: "top top",
                end: "+=3000",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        sec4TlMobile.to("#sec4-left-content", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .from("#sec4-left-content", { y: 30, duration: 1 }, "<");

        sec4TlMobile.to('#dest-1', { opacity: 0, y: -50, duration: 1 })
            .to('#dest-1 .dest-info-box', { opacity: 0, y: 20, duration: 0.8 }, '<')
            .to('#dest-2', { opacity: 1, y: 0, duration: 1 }, '<')
            .to('#dest-2 .dest-info-box', { opacity: 1, y: 0, duration: 0.8 }, '<')
            .addLabel('mobDest2Active')
            .call(() => updateIndicators(1), null, 'mobDest2Active');

        sec4TlMobile.to('#dest-2', { opacity: 0, y: -50, duration: 1 })
            .to('#dest-2 .dest-info-box', { opacity: 0, y: 20, duration: 0.8 }, '<')
            .to('#dest-3', { opacity: 1, y: 0, duration: 1 }, '<')
            .to('#dest-3 .dest-info-box', { opacity: 1, y: 0, duration: 0.8 }, '<')
            .addLabel('mobDest3Active')
            .call(() => updateIndicators(2), null, 'mobDest3Active');

        sec4TlMobile.to('#dest-3', { opacity: 0, y: -50, duration: 1 })
            .to('#dest-3 .dest-info-box', { opacity: 0, y: 20, duration: 0.8 }, '<')
            .to('#dest-4', { opacity: 1, y: 0, duration: 1 }, '<')
            .to('#dest-4 .dest-info-box', { opacity: 1, y: 0, duration: 0.8 }, '<')
            .addLabel('mobDest4Active')
            .call(() => updateIndicators(3), null, 'mobDest4Active');

        sec4TlMobile.to('#dest-4', { opacity: 0, y: -50, duration: 1 })
            .to('#dest-4 .dest-info-box', { opacity: 0, y: 20, duration: 0.8 }, '<')
            .to('#dest-5', { opacity: 1, y: 0, duration: 1 }, '<')
            .to('#dest-5 .dest-info-box', { opacity: 1, y: 0, duration: 0.8 }, '<')
            .addLabel('mobDest5Active')
            .call(() => updateIndicators(4), null, 'mobDest5Active');
    });

    // 7. GSAP Footer Pinned & Scroll Animations
    // Set initial states for footer elements
    gsap.set(".footer-socials .social-icon", { opacity: 0, x: -50 });
    gsap.set(".footer-nav .footer-nav-link", { opacity: 0, x: 50 });
    gsap.set(".footer-center > *", { opacity: 0, y: 30 });
    gsap.set(".footer-bottom", { opacity: 0, y: 30 });

    const footerTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            start: "top top", // Pin when footer hits top
            end: "+=1000",     // Pin for 1000px of scroll to allow animations to play
            pin: true,
            toggleActions: "play none none reverse", // Play when scrolling down, reverse when scrolling up
            anticipatePin: 1,
        }
    });

    // Social icons slide in from LEFT
    footerTl.to(".footer-socials .social-icon", {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
    }, 0);

    // Navigation links slide in from RIGHT
    footerTl.to(".footer-nav .footer-nav-link", {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
    }, 0);

    // Center content fades up
    footerTl.to(".footer-center > *", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
    }, 0.2);

    // Bottom text box fades up
    footerTl.to(".footer-bottom", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    }, 0.4);

    // 8. Buy/Rent Toggle Interactivity (Hero)
    const buyBtn = document.getElementById('buyBtn');
    const rentBtn = document.getElementById('rentBtn');

    buyBtn.addEventListener('click', () => {
        buyBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
        buyBtn.classList.remove('text-white', 'hover:bg-white/10');

        rentBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
        rentBtn.classList.add('text-white', 'hover:bg-white/10');
    });

    rentBtn.addEventListener('click', () => {
        rentBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
        rentBtn.classList.remove('text-white', 'hover:bg-white/10');

        buyBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
        buyBtn.classList.add('text-white', 'hover:bg-white/10');
    });
});