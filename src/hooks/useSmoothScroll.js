import { useCallback } from 'react';

// Easing function: easeInOutCubic
const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export function useSmoothScroll() {
    const scrollToId = useCallback((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const container = document.querySelector('main');
        if (!container) return;

        const targetPosition = element.offsetTop;
        const startPosition = container.scrollTop;
        const distance = targetPosition - startPosition;
        const duration = 800; // Duration in ms
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
                // Disable snapping during animation
                container.style.scrollSnapType = 'none';
                container.style.scrollBehavior = 'auto'; // Ensure no conflicting native smooth scroll
            }

            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            container.scrollTop = startPosition + distance * ease;

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Restore snapping after animation
                container.style.scrollSnapType = '';
                container.style.scrollBehavior = '';
            }
        }

        requestAnimationFrame(animation);
    }, []);

    return scrollToId;
}
