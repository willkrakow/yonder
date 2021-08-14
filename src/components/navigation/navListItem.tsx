/** @jsx jsx */
import React from 'react'
import { jsx, Link } from 'theme-ui'
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

const NavListItem = ({ link, index }: Props) => {
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
            <Link
              as={GatsbyLink}
              //@ts-ignore
              to={link.path}
            >
              {link.name}
            </Link>
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