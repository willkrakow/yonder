import Navbar from "./navbar";
import MobileNavbar from "./mobileNavbar";
import Footer from './footer'

export interface NavbarProps {
  menuLinks: Array<MenuLinkProps>;
  siteTitle: string;
}


export interface MenuLinkProps {
  name: string;
  path: string;
}

export { Navbar, MobileNavbar, Footer }
