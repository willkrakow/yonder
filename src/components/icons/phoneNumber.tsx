/** @jsx jsx */
import React from 'react'
import { jsx, Link} from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { IconProps } from '../../typings'


const PhoneNumber = ({ withText, link }: IconProps) => {

return (
  <>
    <Link href={`tel:${link}`}>
      <FontAwesomeIcon
        icon={faPhone}
        sx={{ fontSize: 1, color: "primary" }}
      />
      {withText && (
        <span sx={{ pl: 3, verticalAlign: "top" }}>
          {link}
        </span>
      )}
    </Link>
  </>
);
}

export default PhoneNumber
