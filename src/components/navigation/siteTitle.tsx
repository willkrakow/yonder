/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import React from 'react'
import { Link } from "gatsby";


interface Props {
    siteTitle?: string
}
const SiteTitle = ({siteTitle = "Yonder Bar"}: Props) => (
    <>
  <Link to="/" sx={{ textDecoration: "none" }}>
    <Themed.h1 sx={{ my: 0, fontSize: "1.5em", fontWeight: 800, letterSpacing: 2 }}>
      {siteTitle.split(" ")[0]}&nbsp;
      <span sx={{ fontWeight: 200, color: "muted" }}>bar</span>
    </Themed.h1>
  </Link>
  </>
)

SiteTitle.defaultProps = {
    siteTitle: "Yonder"
}

export default SiteTitle