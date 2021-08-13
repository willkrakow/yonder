/** @jsx jsx */
import React from 'react'
import { IconProps } from '../../typings';
import { useThemeUI, jsx, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Email = ({link}: IconProps) => {
  const context = useThemeUI();

  const fillColor = context?.theme?.colors?.primary?.toString() || "#fafafa"

  return (
    <>
      <Link target="_blank" rel="noopener noreferrer" href={`mailto:${link}`}>
        <FontAwesomeIcon
          icon={faEnvelope}
          fill={fillColor}
          sx={{ fontSize: 0 }}
        />
        <span>{link}</span>
      </Link>
    </>
  );}

export default Email