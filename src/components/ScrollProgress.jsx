import { useEffect, useRef, useCallback } from 'react';

const ScrollProgress = () => {
  const progressBar = useRef(null);
  
  const updateProgress = useCallback(() => {
    if (!progressBar.current) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    progressBar.current.style.width = `${scrollPercentage}%`;
    requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(updateProgress);
  }, [updateProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        ref={progressBar}
        className="h-full bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  );
};

export default ScrollProgress;
