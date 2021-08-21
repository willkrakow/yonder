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
        <StaticImage
          src="https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt={alt}
          {...props}
        />
      </Flex>
    </>
  );
};

// function isImageNode(node: any): node is ImageNode {
//   return node.internal.type === "Image";
// }

export default PostImage;
