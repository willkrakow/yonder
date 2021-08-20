/** @jsx jsx */
import * as React from 'react';
import { jsx, Flex } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby'
import { GenericIcon, } from '../icons/'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
interface QueryProps {
        socialLinks: {
            instagram?: string;
            facebook?: string;
            email?: string;
            phoneNumber?: string;
            venmo?: string;
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
        venmo
      }
    }
  `)
  
  const { socialLinks } = data
  const { instagram, facebook, email, phoneNumber, venmo } = socialLinks
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
          {instagram && (
            <GenericIcon
              label={withText ? instagram.replace("https://www.instagram.com/", "@").replace("/", "") : ""}
              url={`https://instagram.com/${instagram}`}
              icon={faInstagram}
            />
          )}
          {facebook && (
            <GenericIcon
              label={withText ? facebook.replace("https://www.", "") : ""}
              url={`https://facebook.com/${facebook}`}
              icon={faFacebook}
            />
          )}
          {email && (
            <GenericIcon
              label={withText ? email : ""}
              url={`mailto:${email}`}
              icon={faEnvelopeOpen}
            />
          )}
          {phoneNumber && (
            <GenericIcon
              label={withText ? phoneNumber : ""}
              url={`tel:${phoneNumber}`}
              icon={faPhone}
            />
          )}
          {venmo && (
            <GenericIcon
              label={withText ? venmo : ""}
              url={`https://venmo.com/${venmo}`}
              icon={faDollarSign}
            />
          )}
        </Flex>
      </>
    );
}

export default SocialIcons