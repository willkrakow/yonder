/** @jsx jsx */
import React from "react";
import { jsx, Label, Input, Button, Spinner } from "theme-ui";
import useSearch from "../../utils/useSearch";

interface Props {
  slim?: boolean;
  onSearch?: () => void;
}

const isBrowser = typeof window !== "undefined";
const SearchBar = ({slim = false, onSearch}: Props) => {
  if (isBrowser) {
    const { query, handleChange, handleSubmit, loading } = useSearch();

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleSubmit(e);
      onSearch && onSearch();
    }
    return (
      <>
        <form onSubmit={onSubmit} sx={{ display: "flex" }}>
          <Label htmlFor="query" sx={{ flexBasis: "80%" }}>
            <Input
              id="query"
              type="search"
              name="query"
              value={query}
              onChange={handleChange}
              placeholder="Search"
              sx={{ mb: 0, }}
            />
          </Label>
          {!slim && <Button sx={{ flexBasis: "20%" }} type="submit" variant="search">&rarr;</Button>}
          {loading && <Spinner sx={{ mb: 0, mx: "auto" }} />}
        </form>
      </>
    );
  }
  return null
};

export default SearchBar;
