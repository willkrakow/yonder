/** @jsx jsx*/
import * as React from "react";
import { graphql } from "gatsby";
import CenterTextSection from "../components/centerTextSection";
import { MenuSection } from "../components/imageGrid";
import Form from "../components/form";
import {
  CenterTextProps,
  CtaProps,
  EventSectionProps,
  FormSectionProps,
} from "../typings";
// @ts-ignore
import { Themed, jsx } from "theme-ui";
import Hero from "../components/hero";
import EventSection from "../components/eventSection";
interface IndexPageProps {
  data: {
    sanityLandingPage: {
      content: Array<
        CenterTextProps | CtaProps | EventSectionProps | FormSectionProps | any
      >;
      name: string;
      id: string;
    };
  };
}

export const query = graphql`
  {
    sanityLandingPage(name: { eq: "Home" }) {
      name
      id
      content {
        ... on SanityCenterTextSection {
          _key
          _type
          bodyText
          headerText
        }
        ... on SanityCta {
          _key
          _type
          link
          isInternal
          buttonText
          text
        }
        ... on SanityEventSection {
          _key
          _type
          mainText
          content {
            description {
              children {
                text
                _key
                _type
              }
              _key
              _type
            }
            date(formatString: "dddd, MMMM DD")
            _key
            _type
            slug {
              current
            }
            subtitle
            name
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
        ... on SanityFormSection {
          _key
          _type
          buttonText
          collectEmail
          collectMessage
          collectName
          formIntro {
            bodyText
            headerText
          }
        }
        ... on SanityMenuSection {
          _key
          _type
          categories {
            _key
            id
            name
            slug {
              current
            }
            categoryImage {
              asset {
                gatsbyImageData(width: 500, height: 500)
              }
            }
          }
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
          heroImage {
            asset {
              gatsbyImageData
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
        el = <Hero key={b._key} _key={b._key} _type={b._type} heroImage={b.heroImage} mainText={b.mainText} subtitleText={b.subtitleText || null} cta={b.cta || null} />
        break
      case "menuSection":
        el = <MenuSection categories={b.categories} key={b._key} />
        break
      case "eventSection":
        el = <EventSection key={b._key} content={b.content} _key={b._key} _type={b._type} />
        break
      case "formSection":
        el = <Form collectEmail={b.collectEmail} collectName={b.collectName || false} collectMessage={b.collectMessage || false} buttonText={b.buttonText || "Submit"} />
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
