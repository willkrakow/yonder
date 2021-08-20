/** @jsx jsx */
import React from "react";
import { jsx, Container, Themed, Box, Grid, Flex } from "theme-ui";
import { graphql } from "gatsby";
import { ISanityImage } from "../typings";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { sanityConfig } from "../utils";
import { GatsbyImage } from "gatsby-plugin-image";

interface ITextWithImage {
  _type: "textWithImage",
  image: ISanityImage,
  title: string,
  text: string,
  _key: string,
  id: string,
}


const TextWithImage = ({ image, title, text }: ITextWithImage) => {
  const imageData = getGatsbyImageData(image, {width: 800, height: 1200, fit: "clip", layout: "constrained" }, sanityConfig)
  return (
    <Grid columns={[1, 2]} gap={6}>
      {/* @ts-ignore */}
      <Flex sx={{ justifyContent: "center", alignItems: "center" }} >
        {/* @ts-ignore */}
        <GatsbyImage image={imageData} alt={title} />
      </Flex>
      <Box sx={{ p: 4 }}>
        <Themed.h3>{title}</Themed.h3>
        <Themed.p>{text}</Themed.p>
      </Box>
    </Grid>
  );
}

interface IBlock {
  _type: "block",
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  children: Array<IRawBlock>
  _key: string,
}

interface IRawBlock {
  marks: Array<any>,
  text: string,
  _key: string,
  _type: "span" | string
}

interface Props {
  data: {
    sanityLandingPage: {
      id: string,
      _id: string,
      _key: string,
      _rawContent: Array<ITextWithImage | IBlock>
    }
  }
}

const ParagraphBlock = ({children}: IBlock) => {
  const blocks = children.map(child => {<Themed.p>{child.text}</Themed.p>})
  return (
    <Box sx={{ p: 4 }}>
      {blocks}
    </Box>
  )
}

const About = ({ data }: Props) => {

  const { _rawContent: content } = data.sanityLandingPage
  const blocks = content.map(item => {
    let el
    switch (item._type) {
      case "textWithImage":
        el = <TextWithImage {...item} key={item._key} />
        break
      case "block":
        el = <ParagraphBlock key={item._key} {...item} />
        break
      default:
        el = <Themed.p>null stuff</Themed.p>
        break
    }
    return el
  })

  return (
    <React.Fragment>
      <Container>
        <Themed.h2 sx={{textAlign: "center", width: "100%"}} >About us</Themed.h2>
        {blocks}
      </Container>
    </React.Fragment>
  );
};

export default About;


export const query = graphql`
  {
    sanityLandingPage(name: { eq: "About" }) {
      _id
      _key
      id
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;