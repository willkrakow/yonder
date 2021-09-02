/**@jsx jsx */
import React, { HTMLAttributes } from "react";
import { jsx, Themed } from "theme-ui";
import { IBeer, IWine, ICocktail, IDrink } from "../typings";
import _ from "lodash";

interface ListItemProps {
  drink: (IWine | IBeer | ICocktail) & IDrink;
  props?: HTMLAttributes<HTMLLIElement>;
  appendFirstDescription?: string;
}

const ListItem = ({
  drink,
  ...props
}: ListItemProps) => {

  const abvOrLiquor = drink.ABV ? `${drink.ABV}%` : drink.liquor;
  const ingredientsOrOrigin = drink?.origin || drink.ingredients;
  return (
    <React.Fragment>
      <li
        {...props}
        sx={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          p: 3,
          my: 4,
        }}
      >
        <Themed.h4 sx={{ flexBasis: "70%", mb: 0, lineHeight: "1.25rem" }}>{drink.name}</Themed.h4>
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
            lineHeight: "1.25rem"
          }}
        >
          ${drink.price.toString()}
        </span>
        <Themed.p sx={{ flexBasis: "100%", position: "relative", mb: 0 }}>
          <span >{abvOrLiquor}</span>
          {" | "}
          <span sx={{ color: "muted" }}>{ingredientsOrOrigin}</span>
        </Themed.p>
      </li>
      {/* <Modal handleClose={handleClose} isOpen={isOpen} modalRef={modalRef} >
        <Themed.h3>{drink.name}</Themed.h3>
        <Themed.h6 sx={{ color: "muted" }}>{drink.ABV ? "ABV" : "Liquor"}</Themed.h6>
        <Themed.p>{abvOrLiquor}</Themed.p>
        <Themed.h6 sx={{ color: "muted" }}>{drink.origin ? "Origin" : "Ingredients"}</Themed.h6>
        <Themed.p>{ingredientsOrOrigin}</Themed.p>
        <Themed.h6>About</Themed.h6>
        <Themed.p>{drink.variety || drink.medium || drink.maker || drink.drinkType || drink.drinkType || drink.description}</Themed.p>
      </Modal> */}
    </React.Fragment>
  );
};

export default ListItem;
