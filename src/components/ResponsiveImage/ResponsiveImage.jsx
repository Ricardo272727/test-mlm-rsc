import PropTypes from "prop-types";

export const ResponsiveImage = ({
  alt = "",
  mobileImage = "",
  desktopImage = "",
  className = "",
}) => {
  const src = window.innerWidth <= 1200 ? mobileImage : desktopImage;

  return <img src={src} alt={alt} className={className} title={alt} />;
};

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
  desktopImage: PropTypes.string.isRequired,
  className: PropTypes.string,
};
