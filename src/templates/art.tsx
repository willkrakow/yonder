/** @jsx jsx */

import { PageProps, graphql } from "gatsby";
import React from "react";
import { jsx, Container, Themed } from "theme-ui";
import { Art } from "../typings";
import { ArtGrid } from "../components/art";
import PostImage from "../components/postImage";
import EventOrArtSocialList from "../components/eventOrArtSocialList";
import Seo from "../components/seo";
interface IArt {
  data: {
    art: Art;
  };
}

type ArtPageProps = IArt & PageProps

const ArtTemplate = (props: ArtPageProps) => {
  console.log(props);
  const { art } = props.data;
  return (
    <React.Fragment>
      <Seo pageTitle={art.name} />
      <Container as="article" sx={{ maxWidth: 10 }}>
        <header>
          <Themed.h2>{art.name}</Themed.h2>
          <Themed.h4>by {art.artist.name}</Themed.h4>
          <PostImage
            image={art.images[0].asset.gatsbyImageData}
            alt={art.images[0].caption || art.name}
          />
          {art.description[0].children.map((section, index) => (
            <Themed.p key={index}>{section.text}</Themed.p>
          ))}
        </header>
        <Themed.h3>Gallery</Themed.h3>
        <ArtGrid artist={art.artist} artArr={art.images} />
        <Themed.p>{art.artist.bio}</Themed.p>
        <EventOrArtSocialList {...art.artist} />
      </Container>
    </React.Fragment>
  );
};

export const query = graphql`
  query SanityArtQuery($id: String!) {
    art: sanityArt(id: { eq: $id }) {
      id
      _key
      name
      artist {
        bio
        email
        facebook
        image {
          asset {
            gatsbyImageData(height: 600, layout: CONSTRAINED, fit: CROP)
          }
        }
        instagram
        name
        twitter
        website
      }
      images {
        asset {
          gatsbyImageData
        }
        caption
      }
      description {
        children {
          text
          marks
          _key
        }
        _key
      }
      startDate(formatString: "dddd, MMMM DD")
      endDate(formatString: "dddd, MMMM DD")
      slug {
        current
      }
    }
  }
`;

export default ArtTemplate;
