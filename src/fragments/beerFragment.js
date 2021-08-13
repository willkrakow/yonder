import { graphql } from "gatsby"

export const beerFragment = graphql`
    fragment BeerFragment on SanityBeer {
        _key
        _type
        name
        ABV
        IBU
        available
        origin
        price
        drinkType
        medium
    }
        
`