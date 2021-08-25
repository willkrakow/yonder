/** @jsx jsx */
import React from 'react';
import { Themed, jsx, Container } from 'theme-ui';
import ListItem from '../components/listItem';
import { ISearchResults } from '../utils/useSearch';
interface Props {
    location: {
        state: {
            query: string
            results: ISearchResults
        }
    }
}

const SearchResults = ({location} : Props) => {
    const { query, results } = location.state || {};
    // const prioritizeDrinkType = (a: IResult): 1 | -1 => {
    //   return query.includes(a.drinkType) ? 1 : -1;
    // };

    return (
        <>
        <Container sx={{ maxWidth: 10 }} >
            <Themed.h3>
                Search results
            </Themed.h3>
            <Themed.h4 sx={{ fontStyle: "italic" }}>"{query}"</Themed.h4>
            {results ? (
            <Themed.ul>
                {results.topResults && results.topResults.map(result => (
                    <ListItem key={result._key} drink={result} />
                ))}
                {results.partialResults && results.partialResults.map(result => (
                    <ListItem key={result._key} drink={result} />
                ))}
            </Themed.ul>
            ): (
                <Themed.p>No results found</Themed.p>
            )}
            
        </Container>
        </>
    )
}

export default SearchResults;