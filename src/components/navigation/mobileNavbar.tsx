/** @jsx jsx */
import React from 'react'
import { Flex, Switch, Close, jsx, MenuButton, Grid, useColorMode, Label } from 'theme-ui'
import { NavbarProps } from '.';
import NavListItem from './navListItem';
import { alpha } from '@theme-ui/color';
import AddressBlock from '../addressBlock';
import SiteTitle from './siteTitle';
import SearchBar from '../searchBar';

const MobileNavbar = ({ menuLinks, context, ...props }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ colorMode, setColorMode ] = useColorMode();

  const setColorPreferenceCookie = (colorMode: string) => {
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `color-mode=${colorMode};${expires};path=/`;
  }

  const handleSwitch = (): void => {
    switch(colorMode) {
      case 'dark':
        setColorPreferenceCookie("light");
        setColorMode('light');
        break;
      case 'light':
        setColorMode('dark');
        setColorPreferenceCookie('dark');
        break;
      default:
        setColorMode('dark');
        setColorPreferenceCookie("dark");
        break;
  }
}
  const handleClick = () => {
    console.log("click")
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      {isOpen && (
        <div
          {...props}
          sx={{
            display: "flex",
            position: "fixed",
            inset: 0,
            zIndex: 700,
            backgroundColor: alpha("background", 0.5),
          }}
        />
      )}
      <Flex
        as="nav"
        sx={{
          width: "100%",
          px: 4,
          display: ["flex", null, "none"],
          flexDirection: "column",
          placeSelf: "start",
        }}
      >
        <Grid
          columns={["3fr 1fr"]}
          sx={{ placeItems: "center", justifyItems: "start" }}
        >
          <SiteTitle />
          {!isOpen ? (
            <MenuButton
              variant="icon"
              onClick={handleClick}
              sx={{
                width: 6,
                height: 6,
                zIndex: 999,
                placeSelf: "center",
                justifyContent: "flex-end",
                svg: { width: 5, height: 5 },
                color: "primary",
              }}
            />
          ) : (
            <Close
              onClick={handleClick}
              sx={{
                width: 6,
                height: 6,
                zIndex: 999,
                placeSelf: "center",
                justifyContent: "flex-end",
                svg: { width: 5, height: 5 },
                color: "primary",
              }}
            />
          )}
        </Grid>
        <ul
          sx={{
            listStyleType: "none",
            height: "100vh",
            zIndex: 701,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignContent: "flex-end",
            position: "fixed",
            top: 0,
            left: isOpen ? ["25%", 9, null] : "100%",
            bottom: 0,
            right: 0,
            margin: 0,
            padding: isOpen ? 4 : 0,
            backgroundColor: alpha("background", 0.98),
            opacity: isOpen ? "1.0" : "0.0",
            transition: "all 0.2s ease",
            overflow: "hidden",
            pt: 0,
            pb: 7,
          }}
        >
          {menuLinks.map((l, index) => (
            <NavListItem
              isActive={context.location.pathname === l.path}
              key={index}
              index={index}
              link={l}
            />
          ))}
          <li>
            <SearchBar onSearch={handleClick} slim />
          </li>
          <li>
            <SiteTitle />
            <AddressBlock withLocation withSocial />
          </li>
          <li
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
              px: 3,
              display: "flex",
              backgroundColor: alpha("primary", 0.2),
              borderRadius: "20px",
            }}
          >
            <div>
              <Switch
                onClick={handleSwitch}
                value={colorMode}
                id="colormode"
                sx={{ display: isOpen ? "initial" : "none" }}
              />
            </div>
            <Label htmlFor="colormode" sx={{ flex: 1, ml: 2 }}>
              {colorMode === "light" ? "🌞 Light mode" : "🌚 Dark mode"}
            </Label>
          </li>
        </ul>
      </Flex>
    </>
  );
};

export default MobileNavbar