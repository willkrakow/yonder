import { graphql } from "gatsby";

export const formFragment = graphql`
fragment FormFragment on SanityFormSection {
    _key
    _type
    buttonText
    collectEmail
    collectMessage
    collectName
    formIntro {
      headerText
      bodyText
      _key
      _type
    }
}
`;
