import React, { useEffect, useState } from 'react';
import './CustomerCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    // إضافة أحداث للعناصر التفاعلية
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setCursorVariant('interactive'));
      el.addEventListener('mouseleave', () => setCursorVariant('default'));
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setCursorVariant('interactive'));
        el.removeEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };
  }, []);

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'transparent',
    },
    interactive: {
      width: 40,
      height: 40,
      backgroundColor: 'var(--gold-main)',
    },
  };

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: variants[cursorVariant].width,
          height: variants[cursorVariant].height,
          backgroundColor: variants[cursorVariant].backgroundColor,
        }}
      />
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;