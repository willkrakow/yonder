/** @jsx jsx */
import React from 'react'
import { IconProps } from '../../typings';
import { useThemeUI, jsx, Link } from 'theme-ui';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Facebook = ({link}: IconProps) => {
  const context = useThemeUI();
  const fillColor = context?.theme?.colors?.primary?.toString() || "#fafafa";

  return (
    <>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faFacebook}
          fill={fillColor}
          sx={{ fontSize: 0 }}
        />
        <span sx={{ pl: 3, verticalAlign: "top" }}>
          {link.split(".com/")[1]}
        </span>
      </Link>
    </>
  );
  }

export default Facebook