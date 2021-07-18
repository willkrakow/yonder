/** @jsx jsx */
import React from 'react'
import { jsx, Themed } from 'theme-ui'
import AddressBlock from '../addressBlock'

interface Props {
    copyright: Date,
    street: string,
    city: string,
    state: string,
    zip: number,
    phone: string,
}

const Footer = ({copyright}: Props) => {
    return (
      <React.Fragment>
        <footer sx={{ variant: "layout.footer" }}>
          <AddressBlock withLogo={false} withContactInfo withLocation textColor={`light`} />
          <Themed.p sx={{ color: "muted", mt: 4 }} >Copyright {copyright.getFullYear().toString()}</Themed.p>
        </footer>
      </React.Fragment>
    );
}

export default Footer