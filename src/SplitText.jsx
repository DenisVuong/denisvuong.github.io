import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
    text,
    className = '',
    delay = 100,
    duration = 1,
    stagger = 0.02, // Added stagger prop for character animation delay
    ease = 'power2.out', // Changed default ease to something smoother
    threshold = 0.1,
    rootMargin = '-10%',
    textAlign = 'center',
    onLetterAnimationComplete,
    enableScrollTrigger = true
}) => {
    const ref = useRef(null);
    const animatedRef = useRef(false);

    useGSAP(
        () => {
            if (!ref.current) return;
            if (animatedRef.current) return;

            const chars = ref.current.querySelectorAll('.split-char');

            const toVars = {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                scale: 1,
                duration: duration,
                ease: ease,
                stagger: stagger,
                onComplete: () => {
                    animatedRef.current = true;
                    if (onLetterAnimationComplete) onLetterAnimationComplete();
                }
            };

            if (enableScrollTrigger) {
                toVars.scrollTrigger = {
                    trigger: ref.current,
                    start: `top bottom${rootMargin}`,
                    toggleActions: 'play none none reverse'
                };
            }

            gsap.fromTo(
                chars,
                {
                    opacity: 0,
                    y: 20,
                    filter: 'blur(10px)',
                    scale: 1.2
                },
                {
                    ...toVars,
                    delay: delay // Apply the delay here
                }
            );
        },
        { scope: ref, dependencies: [text, delay, duration, ease, stagger, threshold, rootMargin] }
    );

    // Manual splitting logic
    const splitText = text.split('').map((char, index) => (
        <span
            key={index}
            className="split-char inline-block"
            style={{ willChange: 'opacity, transform, filter' }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));

    return (
        <p
            ref={ref}
            className={`split-parent overflow-hidden inline-block ${className}`}
            style={{ textAlign, whiteSpace: 'normal' }} // Ensure text wraps normally
        >
            {splitText}
        </p>
    );
};

export default SplitText;
