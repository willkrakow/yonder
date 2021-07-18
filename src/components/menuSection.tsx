/** @jsx jsx */
import React from 'react'
import { jsx, Themed, Grid, Flex } from 'theme-ui'
import ListItem from './listItem'
import { Wine, Beer, Cocktail } from '../typings'

interface MenuSectionProps {
  title?: string;
  menuitems: Array<Wine | Beer | Cocktail>;
  descriptionItems: [string, string],
}

const MenuSection = ({ title, menuitems, descriptionItems }: MenuSectionProps) => {
  return (
    <React.Fragment>
      <Flex
        as="section"
        sx={{ flexWrap: "wrap", maxWidth: 10, margin: "auto" }}
      >
        <Themed.h3 sx={{ textAlign: "center", flexBasis: "100%" }}>
          {title}
        </Themed.h3>
        <Grid
          as="ul"
          columns={[1, 2, null]}
          gap={[2, 2, 5]}
          sx={{
            flexBasis: "100%",
            px: 3,
            py: [2, 3, 4],
            alignContent: "center",
          }}
        >
          {menuitems.map((drink) => (
            <ListItem
              key={drink.id || drink._key}
              drink={drink}
              descriptionItems={descriptionItems}
            />
          ))}
        </Grid>
      </Flex>
    </React.Fragment>
  );
};


export default MenuSection