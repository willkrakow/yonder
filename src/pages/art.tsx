/** @jsx jsx */

import { PageProps, graphql, Link as GatsbyLink } from "gatsby";
import React from "react";
import { Button, Grid, jsx, Container, Themed, Link } from "theme-ui";
import { Art } from "../typings";
import Seo from "../components/seo";
import {GatsbyImage} from 'gatsby-plugin-image'


interface IArt {
  data: {
    art: {
      nodes: Array<Art>;
    };
  };
}

type ArtProps = IArt & PageProps;

const ArtPage = (props: ArtProps) => {
  const { nodes: artNodes } = props.data.art;
  return (
    <React.Fragment>
      <Seo pageTitle={`Art`} />
      <Container>
        <Themed.h2 sx={{ textAlign: "center" }}>Art</Themed.h2>
        <Grid columns={[1, 2, 2]} gap={[4, 5, 6]}>
          {artNodes.map((artExpo) => (
            <article key={artExpo._key}>
              <header>
                <GatsbyLink to={`/art/${artExpo.slug.current}`}>
                  <Themed.h3>{artExpo.name}</Themed.h3>
                  <Themed.h5>by {artExpo.artist.name}</Themed.h5>
                </GatsbyLink>
              </header>
              <GatsbyImage
                image={artExpo.images[0].asset.gatsbyImageData}
                alt={artExpo.name}
                sx={{ mt: 4, mb: 5 }}
              />
              <Link
                as={GatsbyLink}
                //@ts-ignore
                to={`/art/${artExpo.slug.current}`}
              >
                <Button variant="action">View gallery</Button>
              </Link>
            </article>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export const query = graphql`
  {
    art: allSanityArt {
      nodes {
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

        slug {
          current
        }
      }
    }
  }
`;

export default ArtPage;
