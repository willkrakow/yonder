/** @jsx jsx */
import React from "react";
import { jsx, Themed, Grid, Flex } from "theme-ui";
import AddressBlock from "../addressBlock";
import { Link } from "gatsby";
import SocialIcons from "./socialIcons";
import SiteTitle from "./siteTitle";
import { darken } from "@theme-ui/color";
interface Props {
  copyright: Date;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
}

const Footer = ({ copyright }: Props) => {
  return (
    <React.Fragment>
      <div sx={{ backgroundColor: darken("secondary", 0.4) }}>
      <Grid
        as="footer"
        columns={["50% 50%", "2fr 1fr 1fr", "2fr 1fr 1fr 1fr"]}
        gap={4}
        sx={{
          margin: "auto",
          my: 3,
          p: 4,
          py: 5,
          maxWidth: [null, null, 11],
          overflow: "hidden",
          div: {
            flexWrap: "wrap",
            alignContent: "flex-start",
            a: {
              color: "muted",
              position: "relative",
              textDecoration: "none",
              flexBasis: "100%",
              transition: "all 0.4s ease",
              "::before": {
                top: "calc(50% - 6px)",
                left: "-20px",
                position: "absolute",
                opacity: "0.0",
                width: "0px",
                borderRight: "4px solid transparent",
                borderTop: "4px solid transparent",
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
                content: "''",
                transition: "all 0.3s ease",
              },
              "&:hover": {
                color: "primary",
                textShadow: "sm",
                "::before": {
                  content: "''",
                  opacity: "1.0",
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  left: "-20px",
                  width: "12px",
                  borderRight: "4px solid transparent",
                  borderTop: "4px solid transparent",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "4px",
                  borderBottomColor: "primary",
                },
              },
            },
          },
        }}
      >
        <div sx={{ gridColumn: ["span 2", "span 1", "span 1"] }}>
          <SiteTitle />
          <AddressBlock copyright={copyright} withLocation />
        </div>
        <Flex>
          <Themed.h5 sx={{ flexBasis: "100%" }}>Menus</Themed.h5>
          <Link to="/wine">Wine</Link>
          <Link to="/beer">Beer</Link>
          <Link to="/cocktails">Cocktails</Link>
          <Link to="/menu">Full menu</Link>
        </Flex>
        <Flex>
          <Themed.h5 sx={{ flexBasis: "100%" }}>More</Themed.h5>
          <Link to="/about">About</Link>
          <Link to="/food">Food</Link>
          <Link to="/events">Events</Link>
          <Link to="/art">Art</Link>
          <Link to="/togo">To-go</Link>
          <Link to="/contact">Contact us</Link>
        </Flex>
        <div sx={{ gridColumn: ["span 2", "span 1", null] }}>
          <Themed.h5 sx={{ flexBasis: "100%" }}>Social</Themed.h5>
          <SocialIcons />
        </div>
      </Grid>
      </div>
    </React.Fragment>
  );
};

export default Footer;
