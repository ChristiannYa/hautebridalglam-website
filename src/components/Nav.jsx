import { useEffect, useState, useCallback } from 'react';
import { navLinks } from '../constants/navLinks';

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isClickScroll, setIsClickScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (!isClickScroll) {
      const currentScrollPos = window.scrollY;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsClickScroll(true);
    setVisible(true);
    const element = document.getElementById(sectionId.replace('#', ''));
    element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    adjustPageSpacing();
    window.addEventListener('resize', adjustPageSpacing);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleScrollEnd);

    return () => {
      window.removeEventListener('resize', adjustPageSpacing);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
    };
  }, [handleScroll]);

  return (
    <header
      className={`topnav screen1600 fixed-top-center z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-[calc(100%+8px)]'
      }`}
    >
      <nav className="-nav-container">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.path}
            className="-anchor-link font-poiretOne text-primary"
            onClick={(e) => scrollToSection(e, link.path)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
