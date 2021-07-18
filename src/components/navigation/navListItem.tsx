/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

interface Props {
    variant?: "light" | "primary",
    position?: "left" | "right" | "center",
    border?: boolean,
    menulength: number,
    index?: number,
    link: {
        path: string,
        name: string,
    }
}

const NavListItem = ({variant, position, border, link }: Props) => {
    return (
      <React.Fragment>
        <li
          sx={{
            textAlign: position,
            color: variant,
            p: 3,
            fontSize: 1,
            borderBottom:
              border
                ? "1px solid rgba(150,150,150,0.7)"
                : "none",
          }}
        >
          <GatsbyLink
            sx={{
                color: variant,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "2px",
              "&.active": {
                textDecoration: "underline",
              },
            }}
            to={link.path}
          >
            {link.name}
          </GatsbyLink>
        </li>
      </React.Fragment>
    );
}

NavListItem.defaultProps = {
    variant: "light",
    position: "center",
    border: false,
}

export default NavListItem