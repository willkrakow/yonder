/**@jsx jsx */
import { graphql, PageProps } from "gatsby";
import React from "react";
import { jsx, Container, Button, Flex, Box, Grid, Themed } from "theme-ui";
import MenuCategorySection from "../components/menuCategorySection";
import { BeerProps, CocktailProps, WineProps } from "../typings";
import Seo from "../components/seo";
import { navigate } from "@reach/router";
interface IMenuPage {
  data: {
    beer: {
      name: string;
      drinks: Array<BeerProps>;
    };
    wine: {
      name: string;
      drinks: Array<WineProps>;
    };
    cocktails: {
      name: string;
      drinks: Array<CocktailProps>;
    };
  };
}

type MenuPageProps = IMenuPage & PageProps;

const Menu: React.FC<MenuPageProps> = (props) => {
  const { wine, beer, cocktails } = props.data;
  const [ selectedCategory, setSelectedCategory ] = React.useState("");

  const wineRef = React.useRef(null);
  const beerRef = React.useRef(null);
  const cocktailsRef = React.useRef(null);
  React.useEffect(() => {
    const scrollTrack = () =>
      [wineRef, beerRef, cocktailsRef].forEach((ref: React.RefObject<HTMLDivElement>) => {
        if (!ref.current) {
          console.log("no ref");
          return;
        } else {
          const top = ref.current.offsetTop
          const clientPosition = window.scrollY
          const bottom = top + ref.current.offsetHeight

          if (clientPosition > top && clientPosition < bottom) {
            setSelectedCategory(ref.current.id)
          }
        }
      });
    document.addEventListener("scroll", scrollTrack);
    return () => {
      document.removeEventListener("scroll", scrollTrack);
    };
  });
  const executeScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`#${e.currentTarget.value.toLowerCase()}`);
  };

  return (
    <Container sx={{ p: [0, 0, 4]}} >
      <Seo pageTitle={`Menu`} />
      <Grid columns={1}>
        {/* <Flex
          sx={{
            justifyContent: "flex-start",
            position: "sticky",
            zIndex: 50,
            flexDirection: "column",
          }}
        >
          <Themed.h5 sx={{ textAlign: "center" }}>Jump to</Themed.h5>
          {[wine, beer, cocktails].map((c) => (
            <Button
              variant="action"
              key={c.name}
              value={c.name}
              onClick={executeScroll}
              sx={{
                fontSize: 2,
                my: 3,
                backgroundColor: selectedCategory.includes(c.name.toLowerCase())
                  ? "warning"
                  : "auto",
                color: selectedCategory.includes(c.name.toLowerCase())
                  ? "background"
                  : "muted",
              }}
            >
              {c.name}
            </Button>
          ))}
        </Flex> */}
        <section>
          <Box id="wine" ref={wineRef}>
            <MenuCategorySection
              title={`Wine`}
              menuitems={wine.drinks}
              descriptionItems={["ABV", "maker"]}
              link={"/wine"}
              index={1}
            />
          </Box>
          <Box id="beer" ref={beerRef}>
            <MenuCategorySection
              title={`Beer`}
              menuitems={beer.drinks}
              descriptionItems={["ABV", "origin"]}
              link={`/beer`}
              index={2}
            />
          </Box>
          <Box id="cocktails" ref={cocktailsRef}>
            <MenuCategorySection
              title={`Cocktails`}
              menuitems={cocktails.drinks}
              descriptionItems={["liquor", "ingredients"]}
              link={`/cocktails`}
              index={3}
            />
          </Box>
        </section>
      </Grid>
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
    }
    wine: sanityCategory(name: { eq: "Wine" }) {
      name
      drinks {
        ... on SanityWine {
          ...WineFragment
        }
      }
    }
    cocktails: sanityCategory(name: { eq: "Cocktails" }) {
      name
      drinks {
        ... on SanityCocktail {
          ...CocktailFragment
        }
      }
    }
  }
`;
export default Menu;
