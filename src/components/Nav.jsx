import { useEffect, useState, useCallback, useRef } from 'react';
import { scrollToSection } from '../utils/scroll';
import { navLinks } from '../constants/navLinks';
import gsap from 'gsap';

const Nav = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isOnLandingPage, setIsOnLandingPage] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const checkIfHomePage = () => {
      const isHome = window.scrollY < 100;
      console.log(
        'Initial scroll position:',
        window.scrollY,
        'isHome:',
        isHome
      );

      if (navContainerRef.current && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true;

        if (isHome) {
          // Animate if on home page
          gsap.from(navContainerRef.current, {
            y: 50,
            opacity: 0,
            duration: 2,
            ease: 'power3.out',
            delay: 1.5,
          });
        } else {
          // Immediately show if not on home page
          gsap.set(navContainerRef.current, {
            y: 0,
            opacity: 1,
          });
        }
      }
    };

    // Run after a slight delay to let browser restore scroll position
    setTimeout(checkIfHomePage, 50);
  }, []);

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
    if (isProgrammaticScrollRef.current) return;

    const currentScrollPos = window.scrollY;
    setIsOnLandingPage(currentScrollPos < viewportHeight - headerHeight);
  }, [viewportHeight, headerHeight]);

  const handleProgrammaticScroll = useCallback(
    (e) => {
      isProgrammaticScrollRef.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (e.detail.targetSection === 'home') {
        setIsOnLandingPage(true);
      } else {
        setIsOnLandingPage(false);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;

        const currentScrollPos = window.scrollY;
        setIsOnLandingPage(currentScrollPos < viewportHeight - headerHeight);
      }, 1000);
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

    if (path.startsWith('http://') || path.startsWith('https://')) {
      // '_self' instead of '_blank' to open in same tab
      window.open(path, '_blank');
    } else {
      scrollToSection(path);
    }
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
        ref={navContainerRef}
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
