/** @jsx jsx */
import React from 'react'
import { jsx, NavLink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
    menulength: number,
    index?: number,
    link: {
        path: string,
        name: string,
    },
    isActive: boolean,
}

const NavListItem = ({ link, index, isActive }: Props) => {
  const delay = index ? index * 250 : 250;
    return (
      <>
        <ScrollAnimation
          animateOnce={true}
          delay={delay}
          offset={0}
          animateIn="fadeInDown"
        >
          <li>
            <NavLink
              as={GatsbyLink}
              sx={{
                fontSize: 1,
                textDecoration: isActive ? "underline" : "none",
                textDecorationThickness: 3,
                py: 3,
                color: isActive ? "primary" : "muted",
                textTransform: "uppercase",
                letterSpacing: "2px",
                transition: "all 0.4s ease",
                "::before": {
                  top: "calc(50% - 6px)",
                  left: "-20px",
                  position: "absolute",
                  opacity: "0.0",
                  width: "0px",
                  borderRight: "4px solid transparent",
                  borderTop: "4px solid transparent",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "4px",
                  borderBottomColor: "primary",
                  content: "''",
                  transition: "all 0.3s ease",
                },
                "&:hover": {
                  color: "primary",
                  textShadow: "sm",
                  "::before": {
                    content: "''",
                    opacity: "1.0",
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    left: "-20px",
                    width: "12px",
                    borderRight: "4px solid transparent",
                    borderTop: "4px solid transparent",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "4px",
                    borderBottomColor: "primary",
                  },
                },
              }}
              //@ts-ignore
              activeStyle={{ textDecoration: "underline", color: "red" }}
              //@ts-ignore
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        </ScrollAnimation>
      </>
    );
}

NavListItem.defaultProps = {
    variant: "light",
    position: "center",
    border: false,
}

export default NavListItem