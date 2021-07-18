/**@jsx jsx */
import React, { HTMLAttributes } from 'react'
import { jsx, Themed } from 'theme-ui'
import { WineProps, BeerProps, CocktailProps } from '../pages/menu'


interface ListItemProps {
  drink: WineProps & BeerProps & CocktailProps | any;
  props?: HTMLAttributes<HTMLLIElement>;
  descriptionItems: Array<string>,
}



const ListItem = ({ drink, descriptionItems, ...props }: ListItemProps) => {
  const firstDescriptor = descriptionItems[0]
  const secondDescriptor = descriptionItems[1]
  
  return (
    <React.Fragment>
      <Themed.li
        {...props}
        sx={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Themed.h4 sx={{ flexBasis: "70%", alignSelf: "center" }}>{drink.name}</Themed.h4>
        <span
          sx={{
            flex: "1 1 20%",
            color: "text",
            textAlign: "center",
            fontWeight: "body",
            fontStyle: "italic",
            alignSelf: "start",
          }}
        >
          ${drink.price.toString()}
        </span>
        <Themed.p sx={{ flexBasis: "100%", position: "relative" }} >
          <span sx={{ fontWeight: "bold" }}>{drink[firstDescriptor] && `${drink[firstDescriptor]}`}</span>
          <span>{drink[firstDescriptor] && drink[secondDescriptor] && ` | `}</span>
          <span>{drink[secondDescriptor] &&  `${drink[secondDescriptor]}`}</span>
        </Themed.p>
        
      </Themed.li>
    </React.Fragment>
  );
};


export default ListItem