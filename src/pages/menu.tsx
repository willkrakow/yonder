/**@jsx jsx */
import { graphql, PageProps } from "gatsby";
import React from "react";
import { jsx, Container, Themed } from "theme-ui";
import MenuCategorySection from "../components/menuCategorySection";
import { BeerProps, CocktailProps, ImageAsset, WineProps } from "../typings";
import Seo from "../components/seo";
// import { navigate } from "@reach/router";
interface IMenuPage {
  data: {
    beer: {
      name: string;
      drinks: Array<BeerProps>;
      categoryImage: ImageAsset
    };
    wine: {
      name: string;
      drinks: Array<WineProps>;
      categoryImage: ImageAsset
    };
    cocktails: {
      name: string;
      drinks: Array<CocktailProps>;
      categoryImage: ImageAsset
    };
  };
}

type MenuPageProps = IMenuPage & PageProps;

const Menu: React.FC<MenuPageProps> = (props) => {
  const { wine, beer, cocktails } = props.data;
  // const [ selectedCategory, setSelectedCategory ] = React.useState("");

  // const wineRef = React.useRef(null);
  // const beerRef = React.useRef(null);
  // const cocktailsRef = React.useRef(null);
  // React.useEffect(() => {
  //   const scrollTrack = () =>
  //     [wineRef, beerRef, cocktailsRef].forEach((ref: React.RefObject<HTMLDivElement>) => {
  //       if (!ref.current) {
  //         console.log("no ref");
  //         return;
  //       } else {
  //         const top = ref.current.offsetTop
  //         const clientPosition = window.scrollY
  //         const bottom = top + ref.current.offsetHeight

  //         if (clientPosition > top && clientPosition < bottom) {
  //           setSelectedCategory(ref.current.id)
  //         }
  //       }
  //     });
  //   document.addEventListener("scroll", scrollTrack);
  //   return () => {
  //     document.removeEventListener("scroll", scrollTrack);
  //   };
  // });
  // const executeScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   navigate(`#${e.currentTarget.value.toLowerCase()}`);
  // };

  return (
    <Container>
      <Seo pageTitle={`Menu`} />

      <Themed.h2 sx={{ textAlign: "center" }}>Menus</Themed.h2>
      <MenuCategorySection
        title={`Wine`}
        menuitems={wine.drinks}
        descriptionItems={["ABV", "maker"]}
        link={"/wine"}
        image={wine.categoryImage}
        index={1}
        appendFirstDescription={"%"}
      />
      <MenuCategorySection
        title={`Beer`}
        menuitems={beer.drinks}
        descriptionItems={["ABV", "origin"]}
        link={`/beer`}
        index={2}
        image={beer.categoryImage}
        appendFirstDescription={"%"}
      />
      <MenuCategorySection
        title={`Cocktails`}
        menuitems={cocktails.drinks}
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
      name
      drinks {
        ... on SanityBeer {
          ...BeerFragment
        }
      }
      categoryImage {
        ...ImageFragment
      }
    }
    wine: sanityCategory(name: { eq: "Wine" }) {
      name
      drinks {
        ... on SanityWine {
          ...WineFragment
        }
      }
      categoryImage {
        ...ImageFragment
      }
    }
    cocktails: sanityCategory(name: { eq: "Cocktails" }) {
      name
      drinks {
        ... on SanityCocktail {
          ...CocktailFragment
        }
      }
      categoryImage {
        ...ImageFragment
      }
    }
  }
`;
export default Menu;
