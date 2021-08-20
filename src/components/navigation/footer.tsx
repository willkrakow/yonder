/** @jsx jsx */
import React from "react";
import { jsx, Themed, Box, Flex, Link, Container } from "theme-ui";
import AddressBlock from "../addressBlock";
import SocialIcons from "./socialIcons";
import SiteTitle from "./siteTitle";
import {useStaticQuery, graphql} from "gatsby";
import _ from "lodash";

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
    phoneNumber: string,
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
        phoneNumber
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
        <Box as="address" sx={{ flex: ["100%", 2, 2] }}>
          <SiteTitle />
          <AddressBlock copyright={copyright} withLocation />
        </Box>
        {superCategoryArray.map(category => (
          <Flex key={category.key} sx={{ flexDirection: "column", flex: 1 }}>
            <Themed.h5>{category.name}</Themed.h5>
            {category.items.map(link => (
              <Link key={link._key} href={link.url}>{link.label}</Link>
            ))}
          </Flex>
        ))}
        <div sx={{ gridColumn: ["span 2", "span 1", null], flex: 1 }}>
          <Themed.h5 sx={{ flexBasis: "100%" }}>Social</Themed.h5>
          <SocialIcons withText layout="column" />
        </div>
      </Container>
    </>
  );
};

export default Footer;
