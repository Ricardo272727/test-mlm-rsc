import { useState } from "react";
import _ from "lodash";
import { useHttpClient } from "./useHttpClient";

export const useSearchBar = ({ name = "search" }) => {
  const [search, setSearch] = useState("");
  const httpClient = useHttpClient({
    baseURL: import.meta.env.API_URL,
  });
  const onChange = (e) => setSearch(_.get(e, "target.value", ""));

  const sanitizeQuery = (query = "") => {
    return encodeURIComponent(query.trim());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const query = sanitizeQuery(search);
    const { response, status } = httpClient.get(`/api/items?q=${query}`);
    console.log({ response, status });
  };
  const [categories, setCategories] = useState([
    "Electronica Audio y Video",
    "iPod",
    "Reproductores",
    "iPod touch",
    "32 GB",
  ]);
  const [searchResults, setSearchResults] = useState([]);

  return { name, value: search, categories, searchResults, onChange, onSubmit };
};
