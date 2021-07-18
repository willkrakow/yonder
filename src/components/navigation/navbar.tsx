/**@jsx jsx */
import React from 'react'
import { Flex, Themed, jsx } from 'theme-ui';
import { NavbarProps, MenuLinkProps } from './index'
import NavListItem from './navListItem';

const Navbar = ({ menuLinks, siteTitle }: NavbarProps) => {
  return (
    <React.Fragment>
      <Flex
        as="nav"
        sx={{
          display: ["none", null, "flex"],
          background: "linear-gradient(180deg, black, transparent)",
          justifySelf: "center",
          alignSelf: "start",
          padding: 4,
          px: 6,
          width: "-webkit-fill-available",
          justifyContent: "space-around"
        }}
      >
        <Themed.h1 sx={{ flex: "0 0 50%" }} >{siteTitle}</Themed.h1>
        <Flex
          as="ul"
          sx={{
            justifyContent: "space-evenly",
            alignItems: "center",
            listStyleType: "none",
            flexWrap: "wrap",
          }}
        >
          {menuLinks.map((menuItem: MenuLinkProps, index: number) => (
            <NavListItem
              link={menuItem}
              variant="light"
              border={false}
              menulength={menuLinks.length}
              index={index}
              key={index}
            />
          ))}
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Navbar
