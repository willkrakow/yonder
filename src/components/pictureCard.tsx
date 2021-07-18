/** @jsx jsx */
//@ts-ignore
import React from 'react'
import {jsx, Themed } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { ImageAsset } from '../typings'

interface Props {
  title: string;
  link: string;
  image: ImageAsset;
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
          boxShadow: "2px 2px 4px 2px rgba(0,0,0,0.2)",
          position: "absolute",
          bottom: 0,
          left: 0,
          alignSelf: "flex-end",
          justifySelf: "flex-start",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "backgroundFill",
            transform: "scale(1.02)",
          },
        }}
      >
        <Link to={link} sx={{ textDecoration: "none" }} >
          <Themed.h4>{title}</Themed.h4>
        </Link>
      </header>
    </React.Fragment>
  );
};

export default PictureCard