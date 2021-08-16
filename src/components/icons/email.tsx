/** @jsx jsx */
import React from 'react'
import { IconProps } from '../../typings';
import { jsx, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Email = ({link, withText}: IconProps) => {


  return (
    <>
      <Link target="_blank" rel="noopener noreferrer" href={`mailto:${link}`}>
        <FontAwesomeIcon
          icon={faEnvelope}
          sx={{ fontSize: 1, color: "primary" }}
        />
        {withText && <span sx={{ pl: 3, verticalAlign: "top" }}>{link}</span>}
      </Link>
    </>
  );}

export default Email