/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql, PageProps } from 'gatsby'
import { CocktailProps } from '../typings'
import MenuCategorySection from '../components/menuCategorySection'
import Seo from '../components/seo'

interface ICocktailProps {
    data: {
        sanityCategory: {
            nodes: Array<CocktailProps>
        }
    }
}

type CocktailPageProps = ICocktailProps & PageProps

const Cocktails = (props: CocktailPageProps) => {
    const {nodes: cocktails} = props.data.sanityCategory
    return (
        <React.Fragment>
          <Seo pageTitle={`Cocktails`}  />
            <MenuCategorySection nested index={0} menuitems={cocktails?.filter(i => i.available) || []} descriptionItems={["liquor", "ingredients"]} />
        </React.Fragment>
    )
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