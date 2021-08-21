/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Address, ImageAsset } from "../typings";
import { GatsbyImage } from 'gatsby-plugin-image'
import SocialIcons from "./navigation/socialIcons";
import SiteTitle from "./navigation/siteTitle";

interface Props {
        siteSettings: {
            address: Address,
            title: string,
            phoneNumber: string,
            email: string,
            logo: ImageAsset
        }
    }

interface BlockProps {
  withLogo?: boolean,
  withLocation?: boolean,
  withContactInfo?: boolean,
  textColor?: "light" | "dark" | string,
  centered?: boolean,
  withTitle?: boolean,
  copyright?: Date,
  withSocial?: boolean,
}

const AddressBlock = ({withLogo, withTitle, withLocation, centered, withContactInfo, withSocial, copyright, ...props }: BlockProps) => {
    const data: Props = useStaticQuery(graphql`
      {
        siteSettings: sanitySiteSettings {
          address {
            city
            zip
            streetOne
            streetTwo
            region
          }
          title
          logo {
            asset {
              gatsbyImageData
            }
          }
          phoneNumber
          email
        }
      }
    `);

    const { address, email, logo, title, phoneNumber } = data.siteSettings
    return (
      <address
        sx={{
          textAlign: `${centered ? "center" : "left"}`,
          fontStyle: "normal",
          fontSize: 0,

        }}
        {...props}
      >
        {withLogo && (
          <div sx={{ px: 5, py: 3,  }}>
            <GatsbyImage
              image={logo.asset.gatsbyImageData}
              alt={title || "Yonder"}
              sx={{ maxWidth: 8 }}
            />
          </div>
        )}
        {withTitle && (
          <SiteTitle />
        )}
        {withLocation && (
          <Themed.p sx={{ color: "muted", fontSize: 0 }}>
            {address.streetOne}
            <br />
            {address.streetTwo && (
              <>
                {address.streetTwo}
                <br />
              </>
            )}
            {address.city}, {address.region} {address.zip}
            <br />
          </Themed.p>
        )}
        {withContactInfo && (
          <Themed.p sx={{ mb: 0 }}>
            {phoneNumber && (
              <>
                {phoneNumber}
                <br />
              </>
            )}
            {email}
          </Themed.p>
        )}
        {withSocial && <SocialIcons layout="row" />}
      </address>
    );
}

export default AddressBlock