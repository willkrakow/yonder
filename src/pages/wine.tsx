/**@jsx jsx */
import { PageProps, graphql } from 'gatsby'
import React from 'react'
import { Container, jsx, Themed } from 'theme-ui'
import MenuCategorySection from '../components/menuCategorySection'
import _ from 'lodash'
import { ICategory, } from '../typings'
import Seo from '../components/seo'

interface IWinePage {
  data: {
    sanityCategory: ICategory
  };
}

type WinePageProps = IWinePage & PageProps



const WinePage = (props: WinePageProps) => {
    const { subcategories } = props.data.sanityCategory
    return (
      <React.Fragment>
        <Seo pageTitle={`Wine`} />
        <Container>
          <Themed.h2 sx={{ textAlign: "center" }} >Wine</Themed.h2>
          {subcategories.map((subcategory) => (
            <MenuCategorySection
              image={subcategory.image}
              index={0}
              key={subcategory._key}
              title={subcategory.name}
              nested
              menuitems={subcategory.drinks.filter((i) => i.available)}
              descriptionItems={["ABV", "origin"]}
              appendFirstDescription={"%"}
            />
          ))}
        </Container>
      </React.Fragment>
    );
}


export const query = graphql`
  {
    sanityCategory(name: { eq: "Wine" }) {
      subcategories {
        name
        drinks {
          ... on SanityWine {
            _key
            _type
            maker
            origin
            price
            name
            ABV
            drinkType
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


export default WinePage