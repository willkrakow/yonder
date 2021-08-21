/** @jsx jsx */
import React from 'react'
import { jsx, Themed, Container, Grid, Flex, Button } from 'theme-ui'
import { graphql, PageProps } from 'gatsby'
import { ImageAsset } from '../typings'
import { GatsbyImage } from 'gatsby-plugin-image'

interface IMerch {
    price: number,
    name: string
    description: string
    image: ImageAsset
    url: string
    _key: string
}

interface Props {
    data: {
        allSanityMerch: {
            nodes: IMerch[]
        }
    }
}

const Merch = (props: PageProps & Props) => {
    const {nodes: merch} = props.data.allSanityMerch
    return (
      <>
        <Container>
          <Themed.h2 sx={{ textAlign: "center" }}>Merch</Themed.h2>
          <Grid columns={[1, 2, 3]} gap={6}>
            {merch.map((item) => (
              <Flex
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={item._key}
              >
                <GatsbyImage
                  image={item.image.asset.gatsbyImageData}
                  alt={item.name}
                />
                <Themed.h4 sx={{ textAlign: "center" }}>{item.name}</Themed.h4>
                <Themed.p>{item.description}</Themed.p>
                  <Themed.p sx={{ fontStyle: "italic" }}>
                    ${item.price}
                  </Themed.p>
                  <a href={item.url}>
                    <Button>Buy on Amazon</Button>
                  </a>
              </Flex>
            ))}
          </Grid>
        </Container>
      </>
    );
}

export const query = graphql`
  {
    allSanityMerch {
      nodes {
        name
        price
        url
        available
        image {
          asset {
            gatsbyImageData
          }
        }
        description
      }
    }
  }
`;

export default Merch