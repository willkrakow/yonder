/** @jsx jsx */
import { PageProps, graphql } from "gatsby";
import React from "react";
import MenuCategorySection from "../components/menuCategorySection";
import { ICategory } from "../typings";
import { Container, jsx, Themed } from 'theme-ui'
import Seo from "../components/seo";

interface IBeerPage {
  data: {
    sanityCategory: ICategory
  };
}

type BeerPageProps = IBeerPage & PageProps

const BeerPage = (props: BeerPageProps) => {
  const { subcategories } = props.data.sanityCategory;

  return (
    <>
      <Seo pageTitle={`Beer`} />
      <Container>
        <Themed.h2 sx={{ textAlign: "center" }} >Beer</Themed.h2>
        {subcategories.map((subcategory) => (
          <MenuCategorySection
            image={subcategory.image}
            key={subcategory._key}
            nested
            index={0}
            title={subcategory.name}
            menuitems={subcategory.drinks.filter((i) => i.available)}
          />
        ))}
      </Container>
    </>
  );
};

export const query = graphql`
  {
    sanityCategory(name: { eq: "Beer" }) {
      subcategories {
        name
        drinks {
          ... on SanityBeer {
            _key
            _type
            maker
            origin
            price
            name
            IBU
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
export default BeerPage;
