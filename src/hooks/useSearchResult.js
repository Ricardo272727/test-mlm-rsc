import _ from "lodash";
import { useEffect, useState } from "react";
import { useHttpClient } from "../hooks/useHttpClient";
import { useQueryParams } from "./useQueryParams";

export const useSearchResult = ({ queryParameter = "search" }) => {
  const queryParams = useQueryParams();
  const search = queryParams.get(queryParameter);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState([]);
  const httpClient = useHttpClient({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const findResults = async (query) => {
    if (!query) return;

    const { response, success } = await httpClient.get(`/api/items?q=${query}`);
    if (success) {
      setResults(
        _.get(response, "items", []).map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          author: {
            name: item.author.name,
            lastName: item.author.lastname,
          },
          picture: item.picture,
          condition: item.condition,
          freeShipping: item.free_shipping,
        }))
      );
      setCategories(_.get(response, "categories", []));
    } else {
      console.error({ response });
      setError("Error de conexión por favor intenta de nuevo más tarde");
    }
  };

  useEffect(() => {
    findResults(search);
  }, []);

  return { categories, results, error, search };
};
