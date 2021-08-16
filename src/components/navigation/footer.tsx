/** @jsx jsx */
import React from "react";
import { jsx, Themed, Box, Flex, Link, Container } from "theme-ui";
import AddressBlock from "../addressBlock";
import SocialIcons from "./socialIcons";
import SiteTitle from "./siteTitle";
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
    <>
      <Container
        as="footer"
        sx={{
          display: "flex",
          borderTopColor: "muted",
          borderTopWidth: 1,
          borderTopStyle: "solid",
          margin: "auto",
          my: 3,
          py: 5,
          flexWrap: "wrap",
          "& > div": {
            minWidth: "fit-content",
            borderLeftColor: "muted",
            borderLeftStyle: "solid",
            borderLeftWidth: 1,
            p: 3,
            my: 4,
            ml: -3,
            a: {
              fontSize: 0,
            },
          },
        }}
      >
        <Box as="address" sx={{ flex: ["100%", 2, 2] }}>
          <Themed.h5 sx={{ fontFamily: "heading", color: "primary", fontWeight: "bold" }}><span></span></Themed.h5>
          <AddressBlock copyright={copyright} withLocation />
        </Box>
        <Flex sx={{ flexDirection: "column", flex: 1 }}>
          <Themed.h5>Menus</Themed.h5>
          <Link href="/wine">Wine</Link>
          <Link href="/beer">Beer</Link>
          <Link href="/cocktails">Cocktails</Link>
          <Link href="/togo">To-go</Link>
          <Link href="/menu">Food</Link>
        </Flex>
        <Flex sx={{ flexDirection: "column", flex: 1 }}>
          <Themed.h5>More</Themed.h5>
          <Link href="/about">About</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/events">Events</Link>
          <Link href="/art">Art</Link>
          <Link href="/contact">Contact us</Link>
        </Flex>
        <div sx={{ gridColumn: ["span 2", "span 1", null], flex: 1 }}>
          <Themed.h5 sx={{ flexBasis: "100%" }}>Social</Themed.h5>
          <SocialIcons withText layout="column" />
        </div>
      </Container>
    </>
  );
};

export default Footer;
