import {graphql} from 'gatsby';
export const imageFragment = graphql`
fragment ImageFragment on SanityImage {
    asset {
      gatsbyImageData
    }
  }
`

export const squareImage = graphql`
fragment SquareImage on SanityImage {
    asset {
      gatsbyImageData(aspectRatio: 1)
    }
}
`