export const scrollToSection = (sectionId) => {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;

  window.dispatchEvent(
    new CustomEvent('beforePageScroll', {
      detail: { targetSection: id },
    })
  );

  // Special case for home section which is fixed
  if (id === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `/${id}`;
  }
};
