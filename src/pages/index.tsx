/** @jsx jsx*/
import * as React from "react";
import { graphql } from "gatsby";
import { CenterTextSection, LocationSection, MenuSection, MenuSectionProps, FormSection, FormSectionProps, Hero, EventSection, EventSectionProps } from '../components/pageSections'
import {
  CenterTextProps,
  CtaProps,
} from "../typings";
// @ts-ignore
import { Themed, jsx } from "theme-ui";
interface IndexPageProps {
  data: {
    sanityLandingPage: {
      _rawContent: Array<
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
      _id
      _key
      id
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;

// markup
const IndexPage: React.FC<IndexPageProps> = (props) => {
  const { _rawContent: content } = props.data.sanityLandingPage;
  const blocks = content.map(b => {
    let el
    switch (b._type) {
      case "centerTextSection":
        el = <CenterTextSection key={b._key} bodyText={b.bodyText} headerText={b.headerText} />
        break
      case "hero":
        el = <Hero key={b._key} _key={b._key} _type={b._type} image={b.image} title={b.title} subtitle={b.subtitle || null} cta={b.cta || null} />
        console.log(b.image)
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
      case "locationAndHoursSection":
        el = <LocationSection {...b} key={b._key} />;
        break
      default:
        el = null;
        break;
    }
    return el
  })
  return (
    <React.Fragment>{blocks}</React.Fragment>
  )
}

export default IndexPage;
