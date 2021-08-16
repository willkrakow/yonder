/** @jsx jsx */
import React from 'react'
import { IconProps } from '../../typings';
import { useThemeUI, jsx, Link } from 'theme-ui';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Facebook = ({link, withText}: IconProps) => {
  const context = useThemeUI();
  const fillColor = context?.theme?.colors?.primary?.toString() || "#fafafa";
  console.log(fillColor)
  return (
    <>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faFacebook}
          sx={{ fontSize: 1, color: "primary" }}
        />
        {withText && (
          <span sx={{ pl: 3, verticalAlign: "top" }}>
            {link.split(".com/")[1]}
          </span>
        )}
      </Link>
    </>
  );
  }

export default Facebook