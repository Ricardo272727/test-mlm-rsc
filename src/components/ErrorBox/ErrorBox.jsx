import PropTypes from "prop-types";
import "./ErrorBox.scss";

export const ErrorBox = ({ title = "" }) => (
  <div className="error-box">
    <h3>{title}</h3>
  </div>
);

ErrorBox.propTypes = {
  title: PropTypes.string.isRequired,
};
