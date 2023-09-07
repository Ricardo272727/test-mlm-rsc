import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { SearchResult } from "../components/SearchResult/SearchResult";
import { useSearchBar } from "../hooks/useSearchBar";
import { SearchPage } from "../layouts/SearchPage";

export const SearchBoxPage = () => {
  const { value, onChange, onSubmit, searchResults, categories } = useSearchBar(
    { name: "search" }
  );

  return (
    <SearchPage
      title="Buscador de productos | Mercado libre"
      searchValue={value}
      onChangeSearch={onChange}
      onSubmitSearch={onSubmit}
    >
      <Breadcrumb items={categories} />
      {searchResults.map((result) => (
        <SearchResult
          key={result.id}
          title={result.title}
          price={result.price}
          imageSrc={result.picture}
          freeShipping={result.freeShipping}
          authorName={result.author.name}
          authorLastName={result.author.lastName}
        />
      ))}
    </SearchPage>
  );
};
