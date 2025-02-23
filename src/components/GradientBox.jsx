import PropTypes from 'prop-types';

const GradientBox = ({ text, variant = 'dark' }) => {
  return (
    <div
      className={`gradient-box gradient-box--${variant} flexrow-center relative`}
    >
      <span>{text}</span>
    </div>
  );
};

GradientBox.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default GradientBox;
