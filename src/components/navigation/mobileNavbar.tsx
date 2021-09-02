/** @jsx jsx */
import React from 'react'
import { Flex, Switch, Close, jsx, MenuButton, useColorMode, Label, IconButton } from 'theme-ui'
import { NavbarProps } from '.';
import NavListItem from './navListItem';
import { alpha } from '@theme-ui/color';
import SiteTitle from './siteTitle';
import SearchBar from '../searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
          py: 3,
          display: ["flex", null, "none"],
          placeSelf: "start",
          justifyContent: "space-between",
        }}
      >
        <SiteTitle />

        {!isOpen ? (
          <MenuButton
            variant="icon"
            onClick={handleClick}
            sx={{
              zIndex: 999,
              placeSelf: "center",
              justifyContent: "flex-end",
              svg: { width: 5, height: 5 },
              mx: 3,
              color: "primary",
              transform: "scale(1.3)",
            }}
          />
        ) : (
          <Close
            onClick={handleClick}
            sx={{
              zIndex: 999,
              placeSelf: "center",
              justifyContent: "flex-end",
              svg: { width: 5, height: 5 },
              mx: 4,
            }}
          />
        )}

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
            pb: 6,
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
          <li
            sx={{
              transition: "all 0.4s ease",
              borderBottomStyle: "solid",
              borderBottomWidth: 2,
              borderBottomColor: "transparent",
              "&:hover": {
                color: "primary",
                borderBottomColor: "primary",
              },
            }}
          >
            <SearchBar onSearch={handleClick} slim />
          </li>
          <li
          >
            <IconButton onClick={handleSwitch} value={colorMode} id="colormode" ><FontAwesomeIcon sx={{color: "primary"}} icon={colorMode === "light" ? faSun : faMoon} /></IconButton>
          </li>
        </ul>
      </Flex>
    </>
  );
};

export default MobileNavbar