/**@jsx jsx */
import { graphql, PageProps } from "gatsby";
import React from "react";
import { jsx, Container, Themed } from "theme-ui";
import MenuCategorySection from "../components/menuCategorySection";
import { BeerProps, CocktailProps, ImageAsset, ISubcategory, WineProps } from "../typings";
import Seo from "../components/seo";
import { flatten } from "lodash";
// import { navigate } from "@reach/router";
interface IMenuPage {
  data: {
    beer: {
      name: string;
      drinks: Array<BeerProps>;
      categoryImage: ImageAsset;
      subcategories: ISubcategory[];
    };
    wine: {
      name: string;
      drinks: Array<WineProps>;
      categoryImage: ImageAsset;
      subcategories: ISubcategory[];
    };
    cocktails: {
      name: string;
      drinks: Array<CocktailProps>;
      categoryImage: ImageAsset;
      subcategories: ISubcategory[];
    };
  };
}

type MenuPageProps = IMenuPage & PageProps;

function mergeSubcategories<T>(subcategories: ISubcategory[]): Array<T> {
  let acc: Array<T> = []
  subcategories.map(subcategory => {
    //@ts-ignore
    acc.push(subcategory.drinks)
  });
  console.log(acc)
  return flatten(acc);
}

const Menu: React.FC<MenuPageProps> = (props) => {
  const { wine, beer, cocktails } = props.data;
  
  return (
    <Container>
      <Seo pageTitle={`Menu`} />

      <Themed.h2 sx={{ textAlign: "center" }}>Menus</Themed.h2>
      <MenuCategorySection
        title={`Wine`}
        menuitems={mergeSubcategories<WineProps>(wine.subcategories)}
        descriptionItems={["ABV", "maker"]}
        link={"/wine"}
        image={wine.categoryImage}
        index={1}
        appendFirstDescription={"%"}
      />
      <MenuCategorySection
        title={`Beer`}
        menuitems={mergeSubcategories<BeerProps>(beer.subcategories)}
        descriptionItems={["ABV", "origin"]}
        link={`/beer`}
        index={2}
        image={beer.categoryImage}
        appendFirstDescription={"%"}
      />
      <MenuCategorySection
        title={`Cocktails`}
        menuitems={mergeSubcategories<CocktailProps>(cocktails.subcategories)}
        descriptionItems={["liquor", "ingredients"]}
        link={`/cocktails`}
        index={3}
        image={cocktails.categoryImage}
      />
    </Container>
  );
};

export const query = graphql`
  {
    beer: sanityCategory(name: { eq: "Beer" }) {
      categoryImage {
        asset {
          gatsbyImageData
        }
      }
      name
      id
      _id
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
        _key
      }
    }
    wine: sanityCategory(name: { eq: "Wine" }) {
      categoryImage {
        asset {
          gatsbyImageData
        }
      }
      name
      id
      _id
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
            variety
            drinkType
            available
          }
        }
        _key
      }
    }
    cocktails: sanityCategory(name: { eq: "Cocktails" }) {
      categoryImage {
        asset {
          gatsbyImageData
        }
      }
      name
      id
      _id
      subcategories {
        name
        drinks {
          ... on SanityCocktail {
            _key
            _type
            ingredients
            price
            name
            liquor
            available
          }
        }
        _key
      }
    }
  }
`;
export default Menu;
