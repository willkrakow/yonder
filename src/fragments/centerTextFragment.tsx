import { graphql } from 'gatsby'

export const centerTextFragment = graphql`
fragment CenterTextFragment on SanityCenterTextSection {
    _key
    _type
    bodyText
    headerText
}
`