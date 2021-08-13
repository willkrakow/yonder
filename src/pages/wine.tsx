/**@jsx jsx */
import { PageProps, graphql } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import MenuCategorySection from '../components/menuCategorySection'
import _ from 'lodash'
import { WineProps } from '../typings'
import Seo from '../components/seo'

interface IWinePage {
  data: {
    sanityCategory: {
      drinks: Array<WineProps>;
    };
  };
}

type WinePageProps = IWinePage & PageProps



const WinePage = (props: WinePageProps) => {
    const { drinks } = props.data.sanityCategory

    const groupObject = _.groupBy(drinks, 'drinkType')
    const menuSections = _.toPairs(groupObject)
    return ( 
      <React.Fragment>
        <Seo pageTitle={`Wine`} />
        {menuSections.map(s => (
          <MenuCategorySection nested index={0} key={s[0]} title={s[0]} menuitems={s[1].filter(i => i.available)} descriptionItems={["ABV", "origin"]} />
        ))}
      </React.Fragment>
    );
}


export const query = graphql`
  {
    sanityCategory(name: { eq: "Wine" }) {
      drinks {
        ... on SanityWine {
          ...WineFragment
        }
      }
      categoryImage {
        ...ImageFragment
      }
    }
  }
`;


export default WinePage