/**@jsx jsx */
import React, { HTMLAttributes } from 'react'
import { jsx, Themed } from 'theme-ui'
import { WineProps, BeerProps, CocktailProps } from '../typings'


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
      <li
        {...props}
        sx={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Themed.h4 sx={{ flexBasis: "70%", mb: 0, fontSize: 1 }}>
          {drink.name}
        </Themed.h4>
        <span
          sx={{
            flex: "1 1 20%",
            color: "text",
            fontWeight: "body",
            fontStyle: "italic",
            alignSelf: "flex-start",
            fontSize: 1,
            height: "50%",
            textAlign: "right",
          }}
        >
          ${drink.price.toString()}
        </span>
        <Themed.p sx={{ flexBasis: "100%", position: "relative", mb: 0 }}>
          <span>
            {drink[firstDescriptor] && `${drink[firstDescriptor]}% ${" "}`}
          </span>
          <span>
            {drink[firstDescriptor] && drink[secondDescriptor] && `  |  `}
          </span>
          <span>
            {drink[secondDescriptor] && `${" "} ${drink[secondDescriptor]}`}
          </span>
        </Themed.p>
      </li>
    </React.Fragment>
  );
};


export default ListItem