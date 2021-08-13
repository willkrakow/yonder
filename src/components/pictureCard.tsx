/** @jsx jsx */
//@ts-ignore
import React from 'react'
import {jsx, Themed } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { ImageAsset } from '../typings'
import { StylePropertyValue } from '@theme-ui/css'
import { Property } from 'csstype'
import { darken } from '@theme-ui/color'



interface Props {
  title: string;
  link: string;
  image: ImageAsset;
  headerRightStyle?: StylePropertyValue<Property.Position>
}


const PictureCard = ({ title, link, image }: Props) => {
  return (
    <React.Fragment>
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        alt={image?.caption || title}
      />
      <header
        sx={{
          m: 4,
          py: 2,
          px: 3,
          color: "text",
          textDecoration: "none",
          backgroundColor: "background",
          boxShadow: "sm",
          alignSelf: "flex-end",
          justifySelf: "flex-start",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: darken("background", 0.1),
            transform: "scale(1.02)",
          },
        }}
      >
        <Link to={link} sx={{ textDecoration: "none" }}>
          <Themed.h4>
            {title} <span sx={{ color: "secondary" }}>&rarr;</span>
          </Themed.h4>
        </Link>
      </header>
    </React.Fragment>
  );
};

export default PictureCard