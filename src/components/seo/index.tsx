/** @jsx jsx */
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { jsx } from "theme-ui";
import { Address, IDailyHours } from "../../typings";

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
              content: "utf-8"
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
        <script type="ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BarOrPub",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": ${address.city},
                "addressRegion": ${address.region},
                "postalCode": ${address.zip},
                "streetAddress": ${address.streetOne}
            },
            "name": ${title},
            "email": ${email}
            "openingHours": ${JSON.stringify(schedule)},
            "priceRange": "$$",
            "servesCuisine": [
                "Cocktails",
                "Beer",
                "Wine",
                "Spirits"
            ],
            "telephone": ${phoneNumber},
            "url": ${siteUrl}
            }
          `}</script>
      </Helmet>
    </React.Fragment>
  );
};

export default Seo;
