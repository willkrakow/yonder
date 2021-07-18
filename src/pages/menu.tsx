/**@jsx jsx */
import { graphql, PageProps } from "gatsby";
import React from "react";
import { jsx } from "theme-ui";
import MenuSection from "../components/menuSection";
import { Beer, Cocktail, Wine } from "../typings";
import Seo from '../components/seo'

export interface DrinkPrototype {
  id: string;
  price: number;
  name: string;
  slug: {
    current: string;
  };
  available?: boolean;
  description?: Array<{
    children: Array<{
      text: string;
    }>;
  }>;
}

export interface BeerProps extends DrinkPrototype {
  IBU?: string;
  abv?: number;
  producer?: string;
  togo?: boolean | null | undefined;
  location?: string | null | undefined;
}

export interface WineProps extends DrinkPrototype {
  abv: number;
}

export interface CocktailProps extends DrinkPrototype {
  ingredients?: Array<any>;
}

export interface MenuPageProps extends PageProps {
  data: {
    beer: {
      drinks: Array<Beer>;
    };
    wine: {
      drinks: Array<Wine>;
    };
    cocktails: {
      drinks: Array<Cocktail>;
    };
  };
}

const Menu: React.FC<MenuPageProps> = (props) => {
  console.log(props);

  const { wine, beer, cocktails } = props.data;

  return (
    <React.Fragment>
      <Seo pageTitle={`Menu`} />
      <MenuSection
        title={`Wine`}
        menuitems={wine.drinks}
        descriptionItems={["ABV", "maker"]}
      />
      <MenuSection title={`Beer`} menuitems={beer.drinks} descriptionItems={["ABV", "origin"]} />
      <MenuSection title={`Cocktails`} menuitems={cocktails.drinks} descriptionItems={["liquor", "ingredients"]} />
    </React.Fragment>
  );
};

export const query = graphql`
  {
    beer: sanityCategory(name: { eq: "Beer" }) {
      drinks {
        ... on SanityBeer {
          _key
          _type
          maker
          ABV
          drinkType
          IBU
          name
          origin
          price
          medium
        }
      }
    }
    wine: sanityCategory(name: { eq: "Wine" }) {
      drinks {
        ... on SanityWine {
          _key
          _type
          name
          origin
          price
          drinkType
          variety
          maker
          ABV
        }
      }
    }
    cocktails: sanityCategory(name: { eq: "Cocktails" }) {
      drinks {
        ... on SanityCocktail {
          _key
          _type
          liquor
          ingredients
          name
          price
        }
      }
    }
  }
`;
export default Menu;
