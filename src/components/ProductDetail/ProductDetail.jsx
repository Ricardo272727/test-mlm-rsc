import PropTypes from "prop-types";
import "./ProductDetail.scss";

const spanishConditions = {
  new: "Nuevo",
  used: "Usado",
  "": "Cargando..",
};

export const ProductDetail = ({
  id = "",
  title = "",
  price = "",
  picture = "",
  condition = "",
  soldQuantity = "",
  description = "",
  onClickBuy = () => console.log(`onClickBuy not implemented`),
}) => {
  const translateCondition = (condition) => spanishConditions[condition];
  return (
    <article className="product-detail-article">
      <section className="product-presentation">
        <figure className="product-picture">
          <img src={picture} alt={title} title={title} />
        </figure>
        <section className="product-information">
          <p className="product-condition">{`${translateCondition(
            condition
          )} - ${soldQuantity} vendidos`}</p>
          <h3 className="product-title" title={title}>
            {title}
          </h3>
          <h2 className="product-price">{`$ ${price}`}</h2>
          <button className="buy-button" onClick={() => onClickBuy(id)}>
            Comprar
          </button>
        </section>
      </section>
      <section className="product-description">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </section>
    </article>
  );
};

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  soldQuantity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClickBuy: PropTypes.func.isRequired,
};
