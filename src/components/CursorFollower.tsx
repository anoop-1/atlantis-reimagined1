import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const CursorFollower = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursor || !cursorOutline) return;

    // Ensure cursor elements are visible
    gsap.set([cursor, cursorOutline], { 
      opacity: 1, 
      visibility: 'visible',
      pointerEvents: 'none',
      zIndex: 9999
    });

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursor, {
        x: clientX - 4,
        y: clientY - 4,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(cursorOutline, {
        x: clientX - 15,
        y: clientY - 15,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorOutline], {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorOutline], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseOut = () => {
      gsap.to([cursor, cursorOutline], {
        opacity: 0,
        duration: 0.2
      });
    };

    const handleMouseOver = () => {
      gsap.to([cursor, cursorOutline], {
        opacity: 1,
        duration: 0.2
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    // Function to update interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      
      // Remove old listeners
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      // Add new listeners
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial update
    updateInteractiveElements();

    // Update when DOM changes (for dynamic content)
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'role']
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
      
      // Clean up interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
    </>
  );
};