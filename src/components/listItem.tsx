/**@jsx jsx */
import React, { HTMLAttributes } from "react";
import { jsx, Themed } from "theme-ui";
import { WineProps, BeerProps, CocktailProps } from "../typings";
import _ from "lodash";

interface ListItemProps {
  drink: (WineProps & BeerProps & CocktailProps) | any;
  props?: HTMLAttributes<HTMLLIElement>;
  descriptionItems: Array<string>;
  title: string;
  appendFirstDescription?: string;
}

const ListItem = ({
  title,
  drink,
  descriptionItems,
  appendFirstDescription,
  ...props
}: ListItemProps) => {
  const firstDescriptor = descriptionItems[0];
  const secondDescriptor = descriptionItems[1];

  const append = appendFirstDescription ? `${appendFirstDescription} ` : "";
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
        <Themed.h4 sx={{ flexBasis: "70%", mb: 0 }}>{drink.name}</Themed.h4>
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
          <span >{`${drink[firstDescriptor]}${append}`}</span>
          {" | "}
          <span sx={{ color: "muted" }}>{drink[secondDescriptor]}</span>
        </Themed.p>
      </li>
    </React.Fragment>
  );
};

export default ListItem;
