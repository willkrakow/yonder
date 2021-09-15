/** @jsx jsx */
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { jsx, Label, Input, Spinner, IconButton } from "theme-ui";
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
        <form onSubmit={onSubmit} sx={{ display: "flex", justifyContent: "center", }}>
          <Label htmlFor="query" sx={{ flexBasis: "100%" }}>
            <Input
              id="query"
              type="search"
              name="query"
              value={query}
              onChange={handleChange}
              placeholder="Search"
              sx={{ mb: 0, color: "primary", }}
            />
          </Label>
          {!slim && <IconButton sx={{ flexBasis: "20%", cursor: "pointer" }} type="submit"><FontAwesomeIcon size="2x" sx={{ color: "primary" }} icon={faArrowCircleRight} /></IconButton>}
          {loading && <Spinner sx={{ mb: 0, mx: "auto" }} />}
        </form>
      </>
    );
  }
  return null
};

export default SearchBar;
