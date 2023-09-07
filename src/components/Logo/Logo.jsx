import MeliLogo from "../../assets/Logo_ML.png";
import MeliLogo2x from "../../assets/Logo_ML@2x.png.png";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";
import "./Logo.scss";

export const Logo = () => {
  return (
    <figure className="ml-logo">
      <ResponsiveImage
        mobileImage={MeliLogo}
        desktopImage={MeliLogo2x}
        alt="Logo Mercado libre"
        className="ml-logo-img"
      />
    </figure>
  );
};
