import PropTypes from "prop-types";
import "./Breadcrumb.scss";

export const Breadcrumb = ({ items = [] }) => {
  return (
    <ul className="breadcrumb" title="Categorías" name="Categorías">
      {items.map((item) => (
        <li className="breadcrumb-item" key={item} title={item} name={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
};
