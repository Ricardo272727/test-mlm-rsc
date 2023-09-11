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
  <a href={href} className="search-result-link" title={title} tabIndex={0}>
    <article
      className="search-result-article"
      itemScope
      itemType="https://schema.org/Product"
    >
      <figure name="Imagen del producto">
        <img
          src={picture}
          alt={title}
          className="picture"
          title={title}
          itemProp="image"
        />
      </figure>
      <header className="product-header">
        <section className="price-section">
          <h3 name="Precio">{`$ ${price}`}</h3>
          {freeShipping && <FreeShippingIcon title={title} />}
        </section>
        <section className="product-name">
          <h4 name="Producto" itemProp="name">
            {title}
          </h4>
        </section>
      </header>
      <section className="author-section">
        <p name="Vendedor" title={authorLastName}>
          {authorLastName}
        </p>
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
