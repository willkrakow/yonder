/** @jsx jsx */

import { PageProps, graphql, Link } from 'gatsby'
import React from 'react'
import { Button, Container, jsx, Themed } from 'theme-ui'
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
      <Container sx={{ maxWidth: 10 }} >
        <Seo pageTitle={`Art`} />
        {art.nodes.map((artExpo) => (
          <article key={artExpo._key}>
            <header>
              <Themed.h3>{artExpo.name}</Themed.h3>
              <Themed.h5>by {artExpo.artist.name}</Themed.h5>
            </header>
            <ArtGrid artist={artExpo.artist} artArr={artExpo.images.slice(0,2)} />
            <Link to={`/art/${artExpo.slug.current}`}>
              <Button variant="primary">More info</Button>
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
