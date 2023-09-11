import { useState } from "react";
import _ from "lodash";
import { useQueryParams } from "./useQueryParams";

export const useSearchBar = ({ name = "search" }) => {
  const params = useQueryParams();
  const querySearch = params.get(name);
  const [search, setSearch] = useState(querySearch || "");
  const onChange = (e) => setSearch(_.get(e, "target.value", ""));

  const sanitizeQuery = (query = "") => {
    return encodeURIComponent(query.trim());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    window.location = `/items?search=${sanitizeQuery(search)}`;
  };

  return { name, value: search, onChange, onSubmit };
};
