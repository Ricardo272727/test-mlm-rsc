import { useSearchBar } from "../hooks/useSearchBar";
import { SearchPage } from "../layouts/SearchPage";

const SearchBoxPage = () => {
  const { value, onChange, onSubmit } = useSearchBar({ name: "search" });

  return (
    <SearchPage
      title="Buscador de productos | Mercado libre"
      searchValue={value}
      onChangeSearch={onChange}
      onSubmitSearch={onSubmit}
    ></SearchPage>
  );
};

export default SearchBoxPage
