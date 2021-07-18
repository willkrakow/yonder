/** @jsx jsx */

import { PageProps, graphql, Link } from 'gatsby'
import React from 'react'
import { Button, jsx, Themed } from 'theme-ui'
import { Art } from '../typings'
import { ArtGrid } from '../components/imageGrid'
import Seo from '../components/seo'
interface Props extends PageProps {
    data: {
        art: {
            nodes: Array<Art>
        }
    }
}


const ArtPage = (props: Props) => {
  console.log(props);
  const { art } = props.data;
  return (
    <React.Fragment>
      <Seo pageTitle={`Art`} />
      {art.nodes.map((artExpo) => (
        <article key={artExpo._key}>
          <header>
            <Themed.h3>{artExpo.name}</Themed.h3>
            <Themed.h5>by {artExpo.artist.name}</Themed.h5>
          </header>
          <ArtGrid artist={artExpo.artist} artArr={artExpo.images} />
          <Link to={`/art/${artExpo.slug.current}`}><Button variant="primary">More details</Button></Link>
        </article>
      ))}
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
