/** @jsx jsx */
import React from "react";
import { jsx, Label, Input, Button } from "theme-ui";
import useSearch from "../../utils/useSearch";
import { navigate } from 'gatsby'

const SearchBar = () => {
  if (window.location !== undefined) {
    const { query, handleChange, handleSubmit } = useSearch();
    return (
      <>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="query">
            <Input
              id="query"
              type="text"
              name="query"
              value={query}
              onChange={handleChange}
              placeholder="Search"
            />
          </Label>
          <Button type="submit">Go</Button>
        </form>
      </>
    );
  }
  return null
};

export default SearchBar;
