import { useEffect, useState, useCallback, useRef } from 'react';
import { scrollToSection } from '../utils/scroll';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../constants/navLinks';
import gsap from 'gsap';

const Nav = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isOnLandingPage, setIsOnLandingPage] = useState(true);

  useGSAP(() => {
    gsap.from('.-nav-container', {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      delay: 1.5,
    });
  });

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isClickScroll, setIsClickScroll] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const updateViewportHeight = useCallback(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const handleScroll = useCallback(() => {
    if (!isClickScroll) {
      requestAnimationFrame(() => {
        const currentScrollPos = window.scrollY;
        const isVisible =
          prevScrollPos > currentScrollPos || currentScrollPos < 1;

        setIsOnLandingPage(currentScrollPos < viewportHeight);
        setVisible(isVisible);
        setPrevScrollPos(currentScrollPos);

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
  }, [prevScrollPos, isClickScroll, viewportHeight]);

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

    // Check if navigating to a non-home section
    // and update the state
    if (path !== '#home') {
      setIsOnLandingPage(false);
    } else {
      setIsOnLandingPage(true);
    }

    scrollToSection(path);
  };

  useEffect(() => {
    adjustPageSpacing();

    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('resize', adjustPageSpacing);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('resize', adjustPageSpacing);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, updateViewportHeight]);

  useEffect(() => {
    setIsOnLandingPage(window.scrollY < viewportHeight);
  }, [viewportHeight]);

  return (
    <header
      className={`topnav screen1600 fixed-top-center z-50 transition-transform duration-500 ease-in-out ${
        visible
          ? 'translate-y-0'
          : '-translate-y-[calc(100%+8px)]' /* 100% + py */
      } `}
    >
      <nav
        className={`-nav-container ${
          isOnLandingPage ? 'on-landing-page' : 'not-on-landing-page'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.path}
            className={`${
              isOnLandingPage ? 'on-landing-page' : 'not-on-landing-page'
            }`}
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
