const GradientBox = ({ text, width = '140px', height = '40px', className = '' }) => {
  return (
    <div className={`gradient-box flexrow-center relative ${className}`}>
      <span>{text}</span>
    </div>
  );
};

export default GradientBox;
