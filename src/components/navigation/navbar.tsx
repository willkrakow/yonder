/**@jsx jsx */
import React from 'react'
import { Flex, useColorMode, jsx, Switch, Label, IconButton,  } from 'theme-ui';
import { NavbarProps, MenuLinkProps } from './index'
import NavListItem from './navListItem';
import { darken, lighten } from '@theme-ui/color';
import SiteTitle from './siteTitle';
import useModal from '../../utils/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal';
import SearchBar from '../searchBar';


const Navbar = ({ menuLinks, context  }: NavbarProps) => {
  const [ colorMode, setColorMode ] = useColorMode()
  const modalRef = React.useRef(null);

  const { handleClick: handleModal, isOpen, handleClose } = useModal({modalRef: modalRef})
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
            <IconButton onClick={handleModal}><FontAwesomeIcon icon={faSearch} sx={{ color: "primary", cursor: "pointer" }} /></IconButton>
            <Flex
            as="li"
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
              <div
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
              </div>
              <Label htmlFor="colormode" sx={{ flex: 1, ml: 2 }}>
                {colorMode === "light" ? "🌞" : "🌚"}
              </Label>
            </Flex>
          </Flex>
          <Modal modalRef={modalRef} isOpen={isOpen} handleClose={handleClose}  >
            <SearchBar />
          </Modal>
        </nav>
    </>
  );
};

export default Navbar
