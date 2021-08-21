/** @jsx jsx */
import React from 'react'
import { Container, jsx, Themed } from 'theme-ui'
import { graphql, PageProps } from 'gatsby'
import { ICategory } from '../typings'
import MenuCategorySection from '../components/menuCategorySection'
import Seo from '../components/seo'

interface ICocktailProps {
    data: {
        sanityCategory: ICategory
    }
}

type CocktailPageProps = ICocktailProps & PageProps

const Cocktails = (props: CocktailPageProps) => {
    const { subcategories } = props.data.sanityCategory

    return (
      <React.Fragment>
        <Seo pageTitle={`Cocktails`} />
        <Container>
          <Themed.h2 sx={{ textAlign: "center" }} >Cocktails</Themed.h2>
          {subcategories.map(subcategory => (
          <MenuCategorySection
            image={subcategory.image}
            nested
            key={subcategory._key}
            index={0}
            title={subcategory.name}
            menuitems={subcategory.drinks.filter((i) => i.available) || []}
            descriptionItems={["liquor", "ingredients"]}
          />))}
        </Container>
      </React.Fragment>
    );
}

export default Cocktails


export const query = graphql`
  {
    sanityCategory(name: { eq: "Cocktails" }) {
      subcategories {
        name
        drinks {
          ... on SanityCocktail {
            _key
            _type
            price
            name
            liquor
            ingredients
            available
          }
        }
        image {
          asset {
            gatsbyImageData
          }
        }
        _key
      }
    }
  }
`;