/** @jsx jsx */
import React from 'react'
import { jsx, NavLink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

interface Props {
    index?: number,
    link: {
        path: string,
        name: string,
    },
    isActive: boolean,
}

const NavListItem = ({ link }: Props) => {
    return (
      <>
        <li>
            <NavLink
              as={GatsbyLink}
              //@ts-ignore
              to={link.path}
              sx={{ px: 4 }}
            >
              {link.name}
            </NavLink>
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