/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Address, ImageAsset } from "../typings";
import { GatsbyImage } from 'gatsby-plugin-image'

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
}

const AddressBlock = ({withLogo, withLocation, centered, withContactInfo, textColor}: BlockProps) => {
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
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          phoneNumber
          email
        }
      }
    `);

    const { address, email, logo, title, phoneNumber } = data.siteSettings
    return (
      <address sx={{ mt: 5, textAlign: `${centered ? "center" : "left"}`, fontStyle: "normal" }}>
        {withLogo ? (
          <div sx={{ px: 5, py: 3 }}>
            <GatsbyImage
              image={logo.asset.gatsbyImageData}
              alt={title || "Yonder"}
            />
          </div>
        ) : (
          <Themed.h1 sx={{ fontSize: 3, color: textColor }}>{title}</Themed.h1>
        )}
        {withLocation && (
          <Themed.p sx={{ color: textColor }}>
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
          <Themed.p sx={{ color: textColor }}>
            {phoneNumber && (
              <>
                {phoneNumber}
                <br />
              </>
            )}
            {email}
          </Themed.p>
        )}
      </address>
    );
}

export default AddressBlock