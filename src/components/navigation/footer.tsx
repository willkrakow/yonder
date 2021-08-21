/** @jsx jsx */
import React from "react";
import { jsx, Themed, Flex, Link, Container } from "theme-ui";
import AddressBlock from "../addressBlock";
import SiteTitle from "./siteTitle";
import {useStaticQuery, graphql} from "gatsby";
import _ from "lodash";
import EventOrArtSocialList from "../eventOrArtSocialList";

interface Props {
  copyright: Date;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
}

interface FooterLink {
  label: string;
  url: string;
  category: string;
  _key: string;
}

interface FooterQueryProps {
  sanitySiteSettings: {
    footerLinks: FooterLink[],
    email: string,
    facebook: string,
    twitter: string,
    venmo: string,
    phone: string,
    instagram: string,
  }
}

const Footer = ({ copyright }: Props) => {
  const data: FooterQueryProps = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        footerLinks {
          label
          url
          category
          _key
        }
        email
        facebook
        twitter
        venmo
        phone: phoneNumber
        instagram
      }
    }
  `)

  const { footerLinks } = data.sanitySiteSettings;

  const footerCategoryNames = new Set(footerLinks.map(link => link.category));
    interface SuperCategory {
      name: string;
      items: FooterLink[];
      key: string
    }
  const superCategoryArray: SuperCategory[] = []
  footerCategoryNames.forEach(category => {
    const categoryLinks = footerLinks.filter(link => link.category === category)
    superCategoryArray.push({name: category, items: categoryLinks, key: _.uniqueId()})
  })

  return (
    <>
      <Container
        as="footer"
        sx={{
          display: "flex",
          borderTopColor: "muted",
          borderTopWidth: 1,
          borderTopStyle: "solid",
          margin: "auto",
          my: 3,
          py: 5,
          flexWrap: "wrap",
          "& > div": {
            minWidth: "fit-content",
            borderLeftColor: "muted",
            borderLeftStyle: "solid",
            borderLeftWidth: 1,
            p: 3,
            my: 4,
            ml: -3,
            a: {
              fontSize: 0,
            },
          },
        }}
      >
        <address sx={{ flex: "100%" }}>
          <SiteTitle />
          <AddressBlock copyright={copyright} withLocation />
        </address>
        {superCategoryArray.map((category) => (
          <Flex key={category.key} sx={{ flexDirection: "column", flex: 1 }}>
            <Themed.h5>{category.name}</Themed.h5>
            <Themed.ul>
              {category.items.map((link) => (
                <li key={link._key}>
                  <Link variant="primary" key={link._key} href={link.url}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </Themed.ul>
          </Flex>
        ))}
        <Flex sx={{ flexDirection: "column", minWidth: "", flex: 1 }}>
          <Themed.h5>Social</Themed.h5>
          <EventOrArtSocialList
            withTitle={false}
            {...data.sanitySiteSettings}
          />
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
