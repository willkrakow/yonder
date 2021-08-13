import { graphql } from "gatsby";

export const ctaFragment = graphql`
fragment CtaFragment on SanityCta {
  _key
  _type
  buttonText
  isInternal
  link
  text
}
`