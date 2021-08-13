/** @jsx jsx */
import React from 'react'
import { jsx, Box, Themed, Grid, Button, Flex } from 'theme-ui'
import ListItem from './listItem'
import { WineProps, BeerProps, CocktailProps } from '../typings'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { alpha, lighten } from '@theme-ui/color'

interface MenuCategorySectionProps {
  title?: string;
  menuitems: Array<WineProps | BeerProps | CocktailProps>;
  descriptionItems: [string, string],
  link?: string,
  index: number,
  nested?: boolean
}

const MenuCategorySection = ({ title, index, menuitems, descriptionItems, link="#", nested=false }: MenuCategorySectionProps) => {
  const flexDirection = ((index + 1 ) % 2 ) === 0 ? "row" : "row-reverse"
  return (
    <React.Fragment>
      <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          flexDirection: flexDirection,
          alignItems: "center",
          margin: "auto",
          pl: 0,
          mb: 7,
        }}
      >
        <StaticImage
          sx={{ flexBasis: 9, boxShadow: "lg", zIndex: 200 }}
          src="https://images.pexels.com/photos/3044/restaurant-love-romantic-dinner.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt={title || "Menu"}
        />
        <Box sx={{ flexBasis: 9, p: 5}}>
          <Themed.h3>{title}</Themed.h3>
          <Grid
            as="ul"
            columns={[1, 1, 1]}
            sx={{
              flexBasis: "100%",
              px: 0,
              py: [2, 3, 4],
              alignContent: "center",
              gridGap: ["16px 16px", "16px 32px", "16px 32px"],
            }}
          >
            {menuitems.map((drink) => (
              <ListItem
                key={drink.id || drink._key}
                drink={drink}
                descriptionItems={descriptionItems}
              />
            ))}
            {!nested && ( <li sx={{ listStyle: "none" }}>
              <Link to={link}>
                <Button color="primary" variant="action">
                  See full selection
                </Button>
              </Link>
            </li>)}
            
          </Grid>
        </Box>
      </Flex>
    </React.Fragment>
  );
};


export default MenuCategorySection