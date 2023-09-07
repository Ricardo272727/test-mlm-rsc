import PropTypes from 'prop-types'
import './Breadcrumb.scss'

export const Breadcrumb = ({ items = [] }) => {
  return (
    <ul className="breadcrumb">
      {items.map((item) => (
        <li className="breadcrumb-item" key={item}>{item}</li>
      ))}
    </ul>
  );
};


Breadcrumb.propTypes = {
    items: PropTypes.array.isRequired,
}