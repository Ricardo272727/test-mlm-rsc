import PropTypes from "prop-types";
import { FreeShippingIcon } from "../FreeShippingIcon/FreeShippingIcon";
import "./SearchResult.scss";

export const SearchResult = ({
  title = "",
  price = "",
  picture = "",
  freeShipping = false,
  authorLastName = "",
  href = "",
}) => (
  <a href={href} className="search-result-link">
    <article className="search-result-article">
      <figure>
        <img src={picture} alt={title} className="picture" />
      </figure>
      <header className="product-header">
        <section className="price-section">
          <h3>{`$ ${price}`}</h3>
          {freeShipping && <FreeShippingIcon title={title} />}
        </section>
        <section className="product-name">
          <h4>{title}</h4>
        </section>
      </header>
      <section className="author-section">
        <p>{authorLastName}</p>
      </section>
    </article>
  </a>
);

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  authorName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
