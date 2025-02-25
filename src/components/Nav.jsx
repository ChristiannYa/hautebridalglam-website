import { useEffect, useState, useCallback, useRef } from 'react';
import { scrollToSection } from '../utils/scroll';

import { navLinks } from '../constants/navLinks';

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isClickScroll, setIsClickScroll] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!isClickScroll) {
      requestAnimationFrame(() => {
        const currentScrollPos = window.scrollY;
        const isVisible =
          prevScrollPos > currentScrollPos || currentScrollPos < 1;

        setVisible(isVisible);
        setPrevScrollPos(currentScrollPos);

        // Delay hiding on touch devices
        if (!isVisible) {
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          scrollTimeoutRef.current = setTimeout(() => {
            setVisible(false);
          }, 200);
        }
      });
    }
  }, [prevScrollPos, isClickScroll]);

  const handleScrollEnd = () => {
    setIsClickScroll(false);
  };

  const adjustPageSpacing = () => {
    const topnav = document.querySelector('.topnav');
    const topnavHeight = topnav.offsetHeight;
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      if (window.innerWidth <= 768) {
        section.style.scrollMarginTop = `${topnavHeight - 18}px`;
      } else {
        section.style.scrollMarginTop = '18px';
      }
    });
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsClickScroll(true);
    setVisible(true);
    scrollToSection(path);
  };

  useEffect(() => {
    adjustPageSpacing();
    window.addEventListener('resize', adjustPageSpacing);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd);

    return () => {
      window.removeEventListener('resize', adjustPageSpacing);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <header
      className={`topnav screen1600 fixed-top-center z-50 transition-transform duration-500 ease-in-out ${
        visible
          ? 'translate-y-0'
          : '-translate-y-[calc(100%+8px)]' /* 100% + py */
      }`}
    >
      <nav className="-nav-container">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.path}
            className="-anchor-link font-poiretOne text-primary"
            onClick={(e) => handleNavClick(e, link.path)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
