/** @jsx jsx */
import * as React from 'react';
import { jsx, Flex } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby'
import {Instagram, Email, Facebook, } from '../icons/'
interface Props {
        socialLinks: {
            instagram: string;
            facebook: string;
            email: string;
            phoneNumber: string;
        }
}

const SocialIcons = () => {
    const data: Props = useStaticQuery(graphql`
    {
      socialLinks: sanitySiteSettings {
        instagram
        facebook
        email
        phoneNumber
      }
    }
  `)
    return (
      <>
        <Flex
          sx={{
            justifyContent: "flex-start",
            flexDirection: "column",
            a: {
              pr: 4,
              color: "muted",
              span: {
                pl: 3,
                verticalAlign: "top",
              },
            },
          }}
        >
          <Instagram link={data.socialLinks.instagram} />
          <Facebook link={data.socialLinks.facebook} />
          <Email link={data.socialLinks.email} />
        </Flex>
      </>
    );
}

export default SocialIcons