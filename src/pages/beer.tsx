/**@jsx jsx*/
import { PageProps, graphql } from "gatsby";
import React from "react";
import MenuSection from "../components/menuSection";
import { Beer } from "../typings";
//@ts-ignore
import { jsx } from 'theme-ui'
import Seo from "../components/seo";

interface BeerPageProps extends PageProps {
  data: {
    sanityCategory: {
        drinks: Array<Beer>;
    };
  };
}

const BeerPage = (props: BeerPageProps) => {
  console.log(props)
  const { drinks: beers } = props.data.sanityCategory;

  const draft = beers.filter(b => b.medium === "Draft")
  const bottles = beers.filter(b => b.medium === "Bottle")
  const cans = beers.filter(b => b.medium === "Can")

  const sections = [{name: "Draft", items: draft},{name: "Bottles", items: bottles}, {name: "Cans", items: cans}]
  return (
    <>
    <Seo pageTitle={`Beer`} />
      {sections.map((s) => (
        <MenuSection
          key={s.name}
          title={s.name}
          menuitems={s.items.filter(i => i.available)}
          descriptionItems={["ABV", "origin"]}
        />
      ))}
    </>
  );
};

export const query = graphql`
  {
    sanityCategory(name: { eq: "Beer" }) {
      drinks {
        ... on SanityBeer {
          _key
          _type
          maker
          ABV
          IBU
          name
          available
          origin
          price
          drinkType
          medium
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
export default BeerPage;
