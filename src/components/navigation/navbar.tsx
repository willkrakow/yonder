/**@jsx jsx */
import React from "react";
import { Flex, useColorMode, jsx, IconButton } from "theme-ui";
import { NavbarProps, MenuLinkProps } from "./index";
import NavListItem from "./navListItem";
import SiteTitle from "./siteTitle";
import useModal from "../../utils/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal";
import SearchBar from "../searchBar";

const Navbar = ({ menuLinks, context }: NavbarProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const modalRef = React.useRef(null);
  
  const {
    handleClick: handleModal,
    isOpen,
    handleClose,
  } = useModal({ modalRef: modalRef });
  const handleClick = () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };

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
          alignItems: "center"
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
          <li
            sx={{
              borderBottomStyle: "solid",
              borderBottomColor: "transparent",
              borderBottomWidth: 2,
              transition: "all 0.4s ease",
              py: 3,
              mx: 3,
              "&:hover": {
                borderBottomColor: "primary",
              },
            }}
          >
            <IconButton onClick={handleModal}>
              <FontAwesomeIcon
                icon={faSearch}
                sx={{ color: "primary", cursor: "pointer", mr: 3 }}
              />
            </IconButton>
          </li>
          <li>
            <IconButton
              sx={{
                color: "primary",
                cursor: "pointer",
                transition: "all 0.4s ease",
                "&:hover": { color: "accent" },
              }}
              id="colormode"
              onClick={handleClick}
              value={colorMode}
            >
              <FontAwesomeIcon sx={{ transform: "scale(1.35)", mb: 2,}}  icon={colorMode === "light" ? faSun : faMoon} />
            </IconButton>
          </li>
        </Flex>
        <Modal modalRef={modalRef} isOpen={isOpen} handleClose={handleClose}>
          <SearchBar />
        </Modal>
      </nav>
    </>
  );
};

export default Navbar;
