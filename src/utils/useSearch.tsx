import { navigate } from 'gatsby';
import React from 'react';
import { IBeer, ICocktail, IDrink, IWine } from '../typings';

export interface ISearchResults {
  topResults?: ((IWine | IBeer | ICocktail) & IDrink)[];
  partialResults?: ((IWine | IBeer | ICocktail) & IDrink)[];
}


const useSearch = () => {
    const [ query, setQuery ] = React.useState('');
    const [ results, setResults ] = React.useState<ISearchResults>({});
    const [ loading, setLoading ] = React.useState(false);

    const handleChange: React.EventHandler<React.FormEvent> = (e: React.FormEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
    }

    const handleSubmit: React.EventHandler<React.FormEvent> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = new URL(`/api/suggest`, window.location.origin || "http://localhost:8000");
        const params = {search: query}
        url.search = new URLSearchParams(params).toString();
        setLoading(true);
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        })
        const json: ISearchResults = await res.json();
        navigate("/search-results/", {
            state: {
                query: query,
                results: json,
            }
        })
        setLoading(false);
    }
    
    

    return { query, handleChange, handleSubmit, results, setResults, loading };
}

export default useSearch;