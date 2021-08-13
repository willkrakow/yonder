import { graphql } from "gatsby";

export const wineFragment = graphql`
    fragment WineFragment on SanityWine {
        _key
        _type
        name
        origin
        price
        drinkType
        variety
        maker
        available
        ABV
    }
`