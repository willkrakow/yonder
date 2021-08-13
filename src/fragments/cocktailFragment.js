import { graphql } from "gatsby";

export const cocktailFragment = graphql`
fragment CocktailFragment on SanityCocktail {
    _key
    _type
    liquor
    ingredients
    name
    price
    available
}
`