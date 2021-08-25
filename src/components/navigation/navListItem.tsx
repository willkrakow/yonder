/** @jsx jsx */
import React from 'react'
import { jsx, NavLink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
    index?: number,
    link: {
        path: string,
        name: string,
    },
    isActive: boolean,
}

const NavListItem = ({ link, index }: Props) => {
  const delay = index ? index * 250 : 250;
    return (
      <>
        <li>
          <ScrollAnimation
            animateOnce={true}
            delay={delay}
            offset={0}
            animateIn="fadeInDown"
          >
            <NavLink
              as={GatsbyLink}
              //@ts-ignore
              to={link.path}
              sx={{ px: 4 }}
            >
              {link.name}
            </NavLink>
          </ScrollAnimation>
        </li>
      </>
    );
}

NavListItem.defaultProps = {
    variant: "light",
    position: "center",
    border: false,
}

export default NavListItem