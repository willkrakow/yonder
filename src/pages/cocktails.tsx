/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql, PageProps } from 'gatsby'
import { Cocktail } from '../typings'
import MenuSection from '../components/menuSection'
import Seo from '../components/seo'

interface Props extends PageProps {
    data: {
        allSanityDrink: {
            nodes: Array<Cocktail>
        }
    }
}

const Cocktails = (props: Props) => {
    const {nodes: cocktails} = props.data.allSanityDrink
    return (
        <React.Fragment>
          <Seo pageTitle={`Cocktails`}  />
            <MenuSection menuitems={cocktails.filter(i => i.available)} descriptionItems={["liquor", "ingredients"]} />
        </React.Fragment>
    )
}

export default Cocktails


export const query = graphql`
  {
    sanityCategory {
      drinks {
        ... on SanityCocktail {
          _key
          _type
          ingredients
          available
          liquor
          name
          price
        }
      }
      id
      categoryImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;