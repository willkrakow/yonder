/**@jsx jsx*/
import { PageProps, graphql } from "gatsby";
import React from "react";
import MenuCategorySection from "../components/menuCategorySection";
import { BeerProps, ImageAsset } from "../typings";
//@ts-ignore
import { jsx } from 'theme-ui'
import Seo from "../components/seo";

interface IBeerPage {
  data: {
    sanityCategory: {
        drinks: Array<BeerProps>;
        categoryImage: ImageAsset
    };
  };
}

type BeerPageProps = IBeerPage & PageProps

const BeerPage = (props: BeerPageProps) => {
  console.log(props)
  const { drinks: beers, categoryImage: image } = props.data.sanityCategory;

  const draft = beers.filter(b => b.medium === "Draft")
  const bottles = beers.filter(b => b.medium === "Bottle")
  const cans = beers.filter(b => b.medium === "Can")

  const sections = [{name: "Draft", items: draft},{name: "Bottles", items: bottles}, {name: "Cans", items: cans}]
  return (
    <>
    <Seo pageTitle={`Beer`} />
      {sections.map((s) => (
        <MenuCategorySection
        image={image}
          key={s.name}
          nested
          index={0}
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
          ...BeerFragment
        }
      }
      id
      categoryImage {
        ...ImageFragment
      }
    }
  }
`;
export default BeerPage;
