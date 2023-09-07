import Shipping from "../../assets/ic_shipping.png";
import Shipping2x from "../../assets/ic_shipping@2x.png.png";
import PropTypes from "prop-types";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";

export const FreeShippingIcon = ({ title = "" }) => {
  return (
    <ResponsiveImage
      alt={`Envío gratis ${title}`}
      mobileImage={Shipping}
      desktopImage={Shipping2x}
    />
  );
};

FreeShippingIcon.propTypes = {
  title: PropTypes.string.isRequired,
};
