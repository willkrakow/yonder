/** @jsx jsx */

import { PageProps, graphql } from "gatsby";
import React from "react";
import { jsx, Container, Themed } from "theme-ui";
import { Art } from "../typings";
import { ArtGrid, ArtistBio, ArtDescription } from "../components/art";
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
      <Container sx={{ maxWidth: 10 }} >
        <header sx={{ mb: 5 }}>
          <Themed.h3>{art.name}</Themed.h3>
          <Themed.h5>by {art.artist.name}</Themed.h5>
        </header>
        <ArtDescription {...art} />
        <Themed.h4 sx={{ mt: 5 }}>Gallery</Themed.h4>
        <ArtGrid artist={art.artist} artArr={art.images} />
        <ArtistBio {...art.artist} />
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
            gatsbyImageData
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
