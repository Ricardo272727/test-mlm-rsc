import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ErrorBox } from "../components/ErrorBox/ErrorBox";
import { SearchResult } from "../components/SearchResult/SearchResult";
import { useSearchBar } from "../hooks/useSearchBar";
import { useSearchResult } from "../hooks/useSearchResult";
import { SearchPage } from "../layouts/SearchPage";

export const SearchResultPage = () => {
  const { value, onChange, onSubmit } = useSearchBar({ name: "search" });

  const { search, categories, results, error } = useSearchResult({
    queryParameter: "search",
  });
  console.log({results, categories})

  return (
    <SearchPage
      title={`${search} | Mercado libre`}
      searchValue={value}
      onChangeSearch={onChange}
      onSubmitSearch={onSubmit}
    >
      {error && <ErrorBox title={error} />}
      {!error && (
        <>
          <Breadcrumb items={categories} />
          {results.map((result) => (
            <SearchResult
              key={result.id}
              href={`/items/${result.id}`}
              title={result.title}
              price={result.price.amount}
              picture={result.picture}
              freeShipping={result.freeShipping}
              authorName={result.author.name}
              authorLastName={result.author.lastName}
            />
          ))}
        </>
      )}
    </SearchPage>
  );
};
