/** @jsx jsx */
import React from 'react'
import { Flex, Switch, Close, jsx, MenuButton, Grid, useColorMode, Label } from 'theme-ui'
import { NavbarProps } from '.';
import NavListItem from './navListItem';
import { alpha } from '@theme-ui/color';
import AddressBlock from '../addressBlock';
import SiteTitle from './siteTitle';





const MobileNavbar = ({ menuLinks, context }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ colorMode, setColorMode ] = useColorMode();

  const handleSwitch = (): void => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  }

  React.useEffect(() => {
      
      const mouseListener = (e: globalThis.MouseEvent) => {
          //@ts-ignore
        if (e.composedPath()[0].tagName !== "UL" && isOpen){
            setIsOpen(false)
            return
        }
        return
      }

      document.addEventListener('click', mouseListener )
    return () => document.removeEventListener('click', mouseListener)
  })
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <div
        sx={{
          display: isOpen ? "flex" : "none",
          position: "fixed",
          inset: 0,
          zIndex: 700,
          backgroundColor: alpha("background", 0.5),
        }}
      ></div>
      <Flex
        as="nav"
        sx={{
          width: "100%",
          px: 4,
          display: ["flex", null, "none"],
          flexDirection: "column",
          placeSelf: "start",
          justifySelf: "center",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor: "secondary",
        }}
      >
        <Grid
          columns={["3fr 1fr"]}
          sx={{ placeItems: "center", justifyItems: "start" }}
        >
          <SiteTitle />
          <MenuButton
            variant="icon"
            onClick={handleClick}
            sx={{
              width: 6,
              height: 6,
              placeSelf: "center",
              justifyContent: "flex-end",
              svg: { width: 5, height: 5 },
              color: "primary",
            }}
          />
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
            pt: isOpen ? 4 : 0,
            pb: 6
          }}
        >
          <li>
            <Close
              onClick={handleClick}
              sx={{
                color: "primary",
                svg: {
                  width: 5,
                  height: 5,
                },
              }}
            />
          </li>
          {menuLinks.map((l, index) => (
            <NavListItem
              isActive={context.location.pathname === l.path}
              key={index}
              index={index}
              link={l}
            />
          ))}
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
                onChange={handleSwitch}
                value={colorMode}
                id="colormode"
              />
            </div>
            <Label htmlFor="colormode" sx={{ flex: 1, ml: 2 }}>
              {colorMode === "light" ? "🌞 Light mode" : "🌚 Dark mode"}
            </Label>
          </li>
        </ul>
      </Flex>
    </React.Fragment>
  );
};

export default MobileNavbar