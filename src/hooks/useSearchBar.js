import { useState } from "react";
import _ from "lodash";

export const useSearchBar = ({ name = "search" }) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => setSearch(_.get(e, "target.value", ""));

  const sanitizeQuery = (query = "") => {
    return encodeURIComponent(query.trim());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.location = `/items?search=${sanitizeQuery(search)}`;
  };

  return { name, value: search, onChange, onSubmit };
};
