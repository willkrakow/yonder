/** @jsx jsx*/
import * as React from "react";
import { graphql } from "gatsby";
import { CenterTextSection, MenuSection, MenuSectionProps, FormSection, FormSectionProps, Hero, EventSection, EventSectionProps } from '../components/pageSections'
import {
  CenterTextProps,
  CtaProps,
} from "../typings";
// @ts-ignore
import { Themed, jsx } from "theme-ui";
interface IndexPageProps {
  data: {
    sanityLandingPage: {
      content: Array<
        CenterTextProps | CtaProps | EventSectionProps | FormSectionProps | MenuSectionProps | any
      >;
      name: string;
      id: string;
    };
  };
}

export const query = graphql`
  {
    sanityLandingPage(name: { eq: "Home" }) {
      content {
        ... on SanityCta {
          ...CtaFragment
        }
        ... on SanityCenterTextSection {
          ...CenterTextFragment
        }
        ... on SanityEventSection {
          _key
          _type
          content {
            ...EventFragment
            slug {
              current
            }
            image {
              asset {
                gatsbyImageData(height: 500, layout: FULL_WIDTH)
              }
            }
          }
        }
        ... on SanityMenuSection {
          _key
          _type
          title
          description
          cta {
            ...CtaFragment
          }
          categories {
            categoryImage {
              asset {
                gatsbyImageData(aspectRatio: 1.1)
                altText
              }
            }
            name
            slug {
              current
            }
          }
        }
        ... on SanityFormSection {
          ...FormFragment
        }
        ... on SanityHero {
          _key
          _type
          cta {
            buttonText
            isInternal
            link
            text
          }
          title
          subtitle
          image {
            asset {
              gatsbyImageData(layout: FULL_WIDTH)
              altText
            }
          }
        }
      }
    }
  }
`;


// markup
const IndexPage: React.FC<IndexPageProps> = (props) => {
  console.log(props);
  const { content } = props.data.sanityLandingPage;
  const blocks = content.map(b => {
    let el
    switch (b._type) {
      case "centerTextSection":
        el = <CenterTextSection key={b._key} bodyText={b.bodyText} headerText={b.headerText} />
        break
      case "hero":
        el = <Hero key={b._key} _key={b._key} _type={b._type} image={b.image} title={b.title} subtitle={b.subtitle || null} cta={b.cta || null} />
        break
      case "menuSection":
        el = <MenuSection categories={b.categories} title={b.title} description={b.description} cta={b.cta} key={b._key} />
        break
      case "eventSection":
        el = <EventSection key={b._key} content={b.content} _key={b._key} _type={b._type} />
        break
      case "formSection":
        el = <FormSection key={b._key} _key={b._key} _type={b._type} collectEmail={b.collectEmail} collectName={b.collectName || false} collectMessage={b.collectMessage || false} buttonText={b.buttonText || "Submit"} />
        break
      default:
        el = null
        break;
    }
    return el
  })
  return (
    <React.Fragment>{blocks}</React.Fragment>
  )
}

export default IndexPage;
