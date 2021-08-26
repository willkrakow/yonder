/** @jsx jsx */
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { jsx } from "theme-ui";
import { Address, IDailyHours, ImageAsset } from "../../typings";

interface Props {
  siteSettings: {
    address: Address;
    email: string;
    facebook: string;
    instagram: string;
    openingHours: Array<IDailyHours>;
    id: string;
    phoneNumber: string;
    siteUrl: string;
    title: string;
    description: string;
    seoImage1x1: ImageAsset;
    seoImage16x9: ImageAsset;
    seoImage4x3: ImageAsset;
    logo: {
      asset: {
        url: string;
        metadata: {
          dimensions: {
            height: number;
            width: number;
          };
        };
      };
    };
    icon: {
      asset: {
        url: string;
        metadata: {
          dimensions: {
            height: number;
            width: number;
          };
        };
      };
    };
  };
}

interface SeoProps {
  path?: string | null;
  pageTitle?: string | null;
  pageDescription?: string | null;
}

const Seo = ({ path, pageTitle, pageDescription }: SeoProps) => {
  const data: Props = useStaticQuery(graphql`
    {
      siteSettings: sanitySiteSettings {
        seoImage1x1: seoImage {
          asset {
            gatsbyImageData(aspectRatio: 1)
          }
        }
        seoImage16x9: seoImage {
          asset {
            gatsbyImageData(aspectRatio: 1.7777)
          }
        }
        seoImage4x3: seoImage {
          asset {
            gatsbyImageData(aspectRatio: 1.3333)
          }
        }
        openingHours {
          opensAt
          closesAt
          day
        }
        address {
          city
          zip
          streetOne
          streetTwo
          region
        }
        email
        facebook
        instagram
        id
        phoneNumber
        siteUrl
        title
        description
        logo {
          asset {
            url
            metadata {
              dimensions {
                height
                width
              }
            }
          }
        }
        icon {
          asset {
            url
            metadata {
              dimensions {
                height
                width
              }
            }
          }
        }
      }
    }
  `);

  const {
    address,
    phoneNumber,
    email,
    siteUrl,
    title,
    description,
    logo,
    openingHours,
  } = data.siteSettings;
  const defaultTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  const defaultDescription = pageDescription ? pageDescription : description;
  const defaultPath = path ? path : siteUrl;
  

  const schedule = openingHours.map((h) => {
    return `${h.day} ${h.opensAt}-${h.closesAt}`;
  });
  return (
    <React.Fragment>
      <Helmet
        link={[
          {
            rel: "canonical",
            href: siteUrl,
          },
        ]}
        title={defaultTitle || "Yonder"}
        defer={false}
        meta={[
          {
            name: "charset",
            content: "utf-8",
          },
          {
            name: "description",
            content: defaultDescription,
          },
          {
            property: "og:title",
            content: defaultTitle,
          },
          {
            property: "og:description",
            content: defaultDescription,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:url",
            content: defaultPath,
          },
          {
            property: "og:image",
            content: logo.asset.url,
          },
          {
            property: "og:image:width",
            content:
              logo?.asset?.metadata?.dimensions?.width.toString() || "256",
          },
          {
            property: "og:image:height",
            content:
              logo?.asset?.metadata?.dimensions?.height.toString() || "256",
          },
          {
            property: "og:site_name",
            content: title,
          },
          {
            property: "twitter:title",
            content: title,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]}
      >
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BarOrPub",
            "name": "${title}",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "${address.streetOne}",
                "addressLocality": "${address.city}",
                "addressRegion": "${address.region}",
                "postalCode": "${address.zip}"
            },
            "email": "${email}",
            "openingHoursSpecification": ${JSON.stringify(schedule)},
            "priceRange": "$$",
            "servesCuisine": [
                "Cocktails",
                "Beer",
                "Wine",
                "Spirits"
            ],
            "telephone": "${phoneNumber}",
            "url": "${siteUrl}",
            "image": "${logo.asset.url}",
            "menu": "${siteUrl}/menu"
            }
          `}</script>
      </Helmet>
    </React.Fragment>
  );
};

export default Seo;
