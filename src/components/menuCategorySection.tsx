/** @jsx jsx */
import React from 'react'
import { jsx, Themed, Grid, Button, Flex } from 'theme-ui'
import ListItem from './listItem'
import { WineProps, BeerProps, CocktailProps, ImageAsset } from '../typings'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

interface MenuCategorySectionProps {
  title?: string;
  menuitems: Array<WineProps | BeerProps | CocktailProps>;
  descriptionItems: [string, string],
  link?: string,
  index: number,
  image: ImageAsset,
  nested?: boolean
  appendFirstDescription?: string
}

const MenuCategorySection = ({ title, image, menuitems, descriptionItems, link="#", nested=false, appendFirstDescription }: MenuCategorySectionProps) => {
  return (
    <React.Fragment>
        <Grid columns={[1, 2, 2]} gap={6} mb={6}>
            <GatsbyImage
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
                  title={title || ""}
                  key={drink.id || drink._key}
                  drink={drink}
                  descriptionItems={descriptionItems}
                  appendFirstDescription={appendFirstDescription}
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