/**@jsx jsx */
import { PageProps, graphql } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import MenuSection from '../components/menuSection'
import _ from 'lodash'
import { Wine } from '../typings'
import Seo from '../components/seo'


interface WinePageProps extends PageProps {
  data: {
    sanityCategory: {
      drinks: Array<Wine>;
    };
  };
}



const WinePage = (props: WinePageProps) => {
    const { drinks } = props.data.sanityCategory

    const groupObject = _.groupBy(drinks, 'drinkType')
    const menuSections = _.toPairs(groupObject)
    return ( 
      <React.Fragment>
        <Seo pageTitle={`Wine`} />
        {menuSections.map(s => (
          <MenuSection key={s[0]} title={s[0]} menuitems={s[1].filter(i => i.available)} descriptionItems={["ABV", "origin"]} />
        ))}
      </React.Fragment>
    );
}


export const query = graphql`
  {
    sanityCategory(name: { eq: "Wine" }) {
      drinks {
        ... on SanityWine {
          _key
          _type
          name
          origin
          price
          drinkType
          available
          variety
          maker
          ABV
        }
      }
      categoryImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;


export default WinePage