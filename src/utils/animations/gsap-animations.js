import { gsap, ScrollTrigger } from 'gsap/dist/all';

export function contentChangeGSAP(element) {
    let elements = element.querySelectorAll('.fade-up');
    elements.forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 1,
                y: 0,
                ease: 'sine',
            },
            {
                y: 50,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });

    elements = element.querySelectorAll('.fade-down');
    elements.forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 1,
                y: 0,
                ease: 'sine',
            },
            {
                y: -50,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });
}

export function setupGSAP(element) {
    gsap.registerPlugin(ScrollTrigger);
    let elements = element.querySelectorAll('.fade-up');
    elements.forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 0,
                y: 50,
                ease: 'sine',
            },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });

    elements = element.querySelectorAll('.fade-down');
    elements.forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 0,
                y: -50,
                ease: 'sine',
            },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });

    elements = element.querySelectorAll('.fade-left');
    elements.forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 0,
                x: -50,
                ease: 'sine',
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });

    elements = element.querySelectorAll('.fade-right');
    elements.forEach((section) => {
        gsap.fromTo(
            section,
            {
                opacity: 0,
                x: 50,
                ease: 'sine',
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });

    elements = element.querySelectorAll('.rotate');
    elements.forEach((section) => {
        var value = section.getAttribute('data-value');
        gsap.fromTo(
            section,
            {
                ease: 'sine',
                rotate: 0,
            },
            {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                },
            },
        );
    });
}
