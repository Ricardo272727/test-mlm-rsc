import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import PropTypes from "prop-types";
import "./PageHeader.scss";
import { Link } from "react-router-dom";

export const PageHeader = ({
  searchValue = "",
  onChangeSearch = () => console.log("onChangeSearch not implemented"),
  onSubmitSearch = () => console.log("onSubmitSearch not implemented"),
}) => {
  return (
    <nav className="page-header-nav">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <SearchBar
        value={searchValue}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />
    </nav>
  );
};

PageHeader.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
};
