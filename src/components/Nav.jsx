import { useEffect, useState, useCallback, useRef } from 'react';
import { scrollToSection } from '../utils/scroll';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../constants/navLinks';
import gsap from 'gsap';

const Nav = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isOnLandingPage, setIsOnLandingPage] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useGSAP(() => {
    gsap.from('.-nav-container', {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      delay: 1.5,
    });
  });

  const measureWindowHeight = useCallback(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const measureHeaderHeight = useCallback(() => {
    if (headerRef.current) {
      const headerElement = headerRef.current;
      const rect = headerElement.getBoundingClientRect();
      const styles = window.getComputedStyle(headerElement);
      const marginTop = parseInt(styles.marginTop);
      const marginBottom = parseInt(styles.marginBottom);

      const totalHeight = rect.height + marginTop + marginBottom;
      setHeaderHeight(totalHeight);
    }
  }, []);

  const updateNavThemeOnScroll = useCallback(() => {
    // Skip scroll-based updates during programmatic scrolling
    if (isProgrammaticScrollRef.current) return;

    const currentScrollPos = window.scrollY;
    setIsOnLandingPage(currentScrollPos < viewportHeight - headerHeight);
  }, [viewportHeight, headerHeight]);

  const handleProgrammaticScroll = useCallback(
    (e) => {
      // Set flag to disable scroll-based updates during programmatic scrolling
      isProgrammaticScrollRef.current = true;

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set immediately based on target section
      if (e.detail.targetSection === 'home') {
        setIsOnLandingPage(true);
      } else {
        setIsOnLandingPage(false);
      }

      // After scrolling completes, re-enable scroll-based updates
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;

        const currentScrollPos = window.scrollY;
        setIsOnLandingPage(currentScrollPos < viewportHeight - headerHeight);
      }, 1000); // Adjust timeout to match scroll animation duration
    },
    [viewportHeight, headerHeight]
  );

  const updateSectionOffsets = useCallback(() => {
    const topnav = document.querySelector('.topnav');
    const topnavHeight = topnav?.offsetHeight || 0;
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      if (window.innerWidth <= 768) {
        section.style.scrollMarginTop = `${topnavHeight - 18}px`;
      } else {
        section.style.scrollMarginTop = '18px';
      }
    });
  }, []);

  const navigateToSection = (e, path) => {
    e.preventDefault();
    scrollToSection(path);
  };

  useEffect(() => {
    measureHeaderHeight();
    updateSectionOffsets();

    window.addEventListener('beforePageScroll', handleProgrammaticScroll);
    window.addEventListener('resize', measureWindowHeight);
    window.addEventListener('resize', updateSectionOffsets);
    window.addEventListener('resize', measureHeaderHeight);
    window.addEventListener('scroll', updateNavThemeOnScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('beforePageScroll', handleProgrammaticScroll);
      window.removeEventListener('resize', measureWindowHeight);
      window.removeEventListener('resize', updateSectionOffsets);
      window.removeEventListener('resize', measureHeaderHeight);
      window.removeEventListener('scroll', updateNavThemeOnScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [
    updateNavThemeOnScroll,
    measureWindowHeight,
    handleProgrammaticScroll,
    updateSectionOffsets,
    measureHeaderHeight,
  ]);

  // Update on initial load and resize, not during scroll
  useEffect(() => {
    if (!isProgrammaticScrollRef.current) {
      setIsOnLandingPage(window.scrollY < viewportHeight - headerHeight);
    }
  }, [viewportHeight, headerHeight]);

  return (
    <header className="topnav screen1600 fixed-top-center z-50" ref={headerRef}>
      <nav
        className={`-nav-container ${
          isOnLandingPage ? 'on-landing-page' : 'not-on-landing-page'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.path}
            className={`-anchor-link ${
              isOnLandingPage ? 'on-landing-page' : 'not-on-landing-page'
            }`}
            onClick={(e) => navigateToSection(e, link.path)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
