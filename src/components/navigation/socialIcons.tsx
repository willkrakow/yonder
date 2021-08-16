/** @jsx jsx */
import * as React from 'react';
import { jsx, Flex } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby'
import {Instagram, Email, Facebook, } from '../icons/'
import PhoneNumber from '../icons/phoneNumber';
interface QueryProps {
        socialLinks: {
            instagram: string;
            facebook: string;
            email: string;
            phoneNumber: string;
        },
}

interface ISocialIcons {
  withText?: boolean
  layout?: "column" | "row"
}

const SocialIcons = ({ withText, layout }: ISocialIcons) => {
    const data: QueryProps = useStaticQuery(graphql`
    {
      socialLinks: sanitySiteSettings {
        instagram
        facebook
        email
        phoneNumber
      }
    }
  `)
  
  const { socialLinks } = data
  const { instagram, facebook, email, phoneNumber } = socialLinks
    return (
      <>
        <Flex
          sx={{
            justifyContent: "flex-start",
            flexDirection: layout || "column",
            a: {
              flex: 1,
              span: {
                pl: 3,
                verticalAlign: "top",
              },
            },
            
          }}
        >
          <Instagram withText={withText} link={instagram} />
          <Facebook withText={withText} link={facebook} />
          <Email withText={withText} link={email} />
          <PhoneNumber withText={withText} link={phoneNumber || ""} />
        </Flex>
      </>
    );
}

export default SocialIcons