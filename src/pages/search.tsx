/** @jsx jsx */
import React from 'react'
import { Themed, jsx } from 'theme-ui'
import SearchBar from '../components/searchBar'

const Search = () => {
    return (
        <>
        <Themed.h2>Search</Themed.h2>
        <SearchBar />
        </>
    )
}

export default Search