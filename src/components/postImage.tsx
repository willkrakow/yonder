/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";

interface Props {
  image: IGatsbyImageData;
  alt: string;
}


const PostImage = ({ image, alt, ...props }: Props) => {
  if ("images" in image) {
    return (
      <>
        <Flex sx={{ flexDirection: "column" }}>
          <GatsbyImage image={image} alt={alt} sx={{ mt: 4, mb: 5}} {...props} />
        </Flex>
      </>
    );
  }
  return (
    <>
      <Flex sx={{ flexDirection: "column" }}>
      </Flex>
    </>
  );
};



export default PostImage;
