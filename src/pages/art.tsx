/** @jsx jsx */

import { PageProps, graphql, Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { Button, Container, jsx, Themed, Link } from 'theme-ui'
import { Art } from '../typings'
import { ArtGrid } from '../components/art'
import Seo from '../components/seo'

interface IArt {
    data: {
        art: {
            nodes: Array<Art>
        }
    }
}

type ArtProps = IArt & PageProps


const ArtPage = (props: ArtProps) => {
  
  console.log(props);
  const { art } = props.data;
  return (
    <React.Fragment>
      <Container sx={{ maxWidth: 10 }}>
        <Themed.h2 sx={{ textAlign: "center" }} >Art</Themed.h2>
        <Seo pageTitle={`Art`} />
        {art.nodes.map((artExpo) => (
          <article key={artExpo._key}>
            <header>
              <Themed.h3>{artExpo.name}</Themed.h3>
              <Themed.h5>by {artExpo.artist.name}</Themed.h5>
            </header>
            <ArtGrid
              artist={artExpo.artist}
              artArr={artExpo.images.slice(0, 2)}
            />
            <Link
              as={GatsbyLink}
              //@ts-ignore
              to={`/art/${artExpo.slug.current}`}
            >
              <Button variant="action">More info</Button>
            </Link>
          </article>
        ))}
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
`

export default ArtPage
