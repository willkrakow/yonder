/**@jsx jsx */
import React from 'react'
import { Flex, useColorMode, jsx, Switch, Label, Box,  } from 'theme-ui';
import { NavbarProps, MenuLinkProps } from './index'
import NavListItem from './navListItem';
import { darken, lighten } from '@theme-ui/color';
import SiteTitle from './siteTitle';


const Navbar = ({ menuLinks, context  }: NavbarProps) => {
  const [ colorMode, setColorMode ] = useColorMode()

  const handleClick = () => {colorMode === "light" ? setColorMode("dark") : setColorMode("light")}
  return (
    <>
        <nav
          sx={{
            display: ["none", null, "flex"],
            justifySelf: "center",
            alignSelf: "start",
            px: 5,
            py: 4,
            width: "-webkit-fill-available",
            justifyContent: "space-between",
            borderBottomStyle: "solid",
            borderBottomColor: "muted",
            borderBottomWidth: 1,
          }}
        >
          <SiteTitle />
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
                isActive={context.location.pathname === menuItem.path}
                link={menuItem}
                index={index}
                key={index}
              />
            ))}
            <Flex
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
                px: 3,
                backgroundColor: darken("background", 0.1),
                borderColor: "muted",
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: lighten("background", 0.1),
                  borderRadius: "20px",
                  mr: 0,
                }}
              >
                <Switch
                  id="colormode"
                  onChange={handleClick}
                  value={colorMode}
                />
              </Box>
              <Label htmlFor="colormode" sx={{ flex: 1, ml: 2 }}>
                {colorMode === "light" ? "🌞" : "🌚"}
              </Label>
            </Flex>
          </Flex>
        </nav>
    </>
  );
};

export default Navbar
