/** @jsx jsx */
import React from 'react'
import { Flex, Close, jsx, MenuButton, Themed, Grid } from 'theme-ui'
import { NavbarProps } from '.';
import NavListItem from './navListItem';

const MobileNavbar = ({ menuLinks, siteTitle }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

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
      <Flex
        as="nav"
        sx={{
          width: "100%",
          background: "linear-gradient(180deg, black, transparent)",
          p: 4,
          display: ["flex", null, "none"],
          flexDirection: "column",
          placeSelf: "start",
          justifySelf: "center",
        }}
      >
        <Grid columns={["3fr 1fr"]}>
          <Themed.h1>{siteTitle}</Themed.h1>
          <MenuButton variant="icon" onClick={handleClick} sx={{ width: 6, height: 6, placeSelf: 'center', 'svg': {width: 5, height: 5} }} />
        </Grid>
        <Close
          onClick={handleClick}
          sx={{
            display: isOpen ? "block" : "none",
            color: "light",
            position: "absolute",
            top: 4,
            right: 4,
            zIndex: 109,
            'svg': {
                width: 5,
                height: 5,
            }
          }}
        />
        <ul
          sx={{
            listStyleType: "none",
            height: "100vh",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            position: "absolute",
            top: 0,
            left: isOpen ? 6 : "100%",
            bottom: 0,
            right: 0,
            margin: 0,
            padding: isOpen ? 4 : 0,
            boxShadow: isOpen ? `-64px 0 rgba(0,0,0,0.5)` : "none",
            backgroundColor: "primary",
            opacity: isOpen ? "1.0" : "0.0",
            transition: "all 0.2s ease",
            overflow: "hidden",
          }}
        >
          {menuLinks.map((l, index) => (
            <NavListItem
              key={index}
              index={index}
              link={l}
              menulength={menuLinks.length}
              border={true}
              variant="light"
              position="right"
            />
          ))}
        </ul>
      </Flex>
    </React.Fragment>
  );
};

export default MobileNavbar