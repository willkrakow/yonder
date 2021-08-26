/** @jsx jsx */
import React from 'react'
import { jsx, Themed, Grid, Button, Flex } from 'theme-ui'
import ListItem from './listItem'
import { WineProps, BeerProps, CocktailProps, ImageAsset } from '../typings'
import { Link } from 'gatsby'
import PostImage from './postImage'

interface MenuCategorySectionProps {
  title?: string;
  menuitems: Array<WineProps | BeerProps | CocktailProps>;
  link?: string,
  index: number,
  image: ImageAsset,
  nested?: boolean
}

const MenuCategorySection = ({ title, image, menuitems, link="#", nested=false }: MenuCategorySectionProps) => {
  return (
    <React.Fragment>
        <Grid columns={[1, 2, 2]} gap={6} mb={6}>
            <PostImage
              image={image.asset.gatsbyImageData}
              alt={title || "Menu"}
            />
          <Flex
            sx={{
              flexDirection: "column",
            }}
          >
            <Themed.h3>{title}</Themed.h3>
            <Themed.ul>
              {menuitems.map((drink) => {
                return (
                  <ListItem
                  key={drink.id || drink._key}
                  drink={drink}
                />
                )}
              )}
              {!nested && (
                <li sx={{ listStyle: "none" }}>
                  <Link to={link}>
                    <Button variant="action">
                      See full selection
                    </Button>
                  </Link>
                </li>
              )}
            </Themed.ul>
          </Flex>
        </Grid>
    </React.Fragment>
  );
};


export default MenuCategorySection