/** @jsx jsx */
import React from 'react'
import { Container, jsx, Themed } from 'theme-ui'
import { graphql, PageProps } from 'gatsby'
import { CocktailProps, ImageAsset } from '../typings'
import MenuCategorySection from '../components/menuCategorySection'
import Seo from '../components/seo'

interface ICocktailProps {
    data: {
        sanityCategory: {
            drinks: Array<CocktailProps>
            categoryImage: ImageAsset
        },
    }
}

type CocktailPageProps = ICocktailProps & PageProps

const Cocktails = (props: CocktailPageProps) => {
    const {drinks: cocktails, categoryImage: image} = props.data.sanityCategory
    return (
      <React.Fragment>
        <Seo pageTitle={`Cocktails`} />
        <Container>
          <Themed.h2 sx={{ textAlign: "center" }} >Cocktails</Themed.h2>
          <MenuCategorySection
            image={image}
            nested
            index={0}
            menuitems={cocktails?.filter((i) => i.available) || []}
            descriptionItems={["liquor", "ingredients"]}
          />
        </Container>
      </React.Fragment>
    );
}

export default Cocktails


export const query = graphql`
  {
    sanityCategory {
      drinks {
        ... on SanityCocktail {
          ...CocktailFragment
        }
      }
      id
      categoryImage {
        ...ImageFragment
      }
    }
  }
`;