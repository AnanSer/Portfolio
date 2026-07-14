import { useCallback } from 'react';

const useRippleEffect = () => {
  const createRipple = useCallback((event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple-effect');

    // Remove existing ripples
    const existingRipples = button.getElementsByClassName('ripple-effect');
    while (existingRipples[0]) {
      existingRipples[0].remove();
    }

    button.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  return createRipple;
};

export default useRippleEffect;
