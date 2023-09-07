import { useEffect } from "react";
import PropTypes from "prop-types";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { PageContent } from "../components/PageContent/PageContent";

export const SearchPage = ({
  title = "",
  children = null,
  searchValue = "",
  onChangeSearch = () => console.log("onChangeSearch not implemented"),
  onSubmitSearch = () => console.log("onSubmitSearch not implemented"),
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <PageHeader
        searchValue={searchValue}
        onChangeSearch={onChangeSearch}
        onSubmitSearch={onSubmitSearch}
      />
      <PageContent>{children}</PageContent>
    </>
  );
};

SearchPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  searchValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
};
