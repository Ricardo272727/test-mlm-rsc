import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { useSearchBar } from "../hooks/useSearchBar";
import { SearchPage } from "../layouts/SearchPage";
import { useProductDetail } from "../hooks/useProductDetail";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
  const params = useParams();
  const { value, onChange, onSubmit } = useSearchBar({ name: "search" });
  const { categories, product } = useProductDetail({ id: params.id });
  const onClickBuy = (id) => console.log(`Buy product ${id}`);

  return (
    <SearchPage
      title="Buscador de productos | Mercado libre"
      searchValue={value}
      onChangeSearch={onChange}
      onSubmitSearch={onSubmit}
    >
      <Breadcrumb items={categories} />
      <ProductDetail
        id={product.id}
        title={product.title}
        description={product.description}
        picture={product.picture}
        price={`${product.price}`}
        condition={product.condition}
        soldQuantity={`${product.soldQuantity}`}
        onClickBuy={onClickBuy}
      />
    </SearchPage>
  );
};

export default ProductDetailPage;
