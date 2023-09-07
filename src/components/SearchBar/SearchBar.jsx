import PropTypes from "prop-types";
import SearchIcon from "../../assets/ic_Search.png";
import SearchIcon2x from "../../assets/ic_Search@2x.png.png";
import "./SearchBar.scss";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";

export const SearchBar = ({
  name = "search-bar",
  placeholder = "Nunca dejes de buscar",
  value = "",
  onChange = () => console.log("Not implemented onChange"),
  onSubmit = () => console.log("Not implemented onSubmit"),
}) => {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        placeholder={placeholder}
        className="search-bar-input"
        name={name}
        value={value}
        onChange={onChange}
      />
      <button className="search-button" type="submit">
        <ResponsiveImage
          mobileImage={SearchIcon}
          desktopImage={SearchIcon2x}
          alt="Buscar"
          className="search-icon"
        />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
