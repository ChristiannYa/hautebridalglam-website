export const scrollToSection = (sectionId) => {
  const id = sectionId.replace('#', '');
  const element = document.getElementById(id);

  // Special case for home section which is fixed
  if (id === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `/${sectionId}`;
  }
};
