/** @jsx jsx */
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { jsx } from "theme-ui";
import { Address, DailyHours } from "../../typings";

interface Props {
  siteSettings: {
    address: Address;
    email: string;
    facebook: string;
    instagram: string;
    hours: Array<DailyHours>;
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
        hours {
          day
          closed
          hourClose
          hourOpen
          isAm
          minuteClose
          minuteOpen
        }
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
    hours,
    phoneNumber,
    email,
    siteUrl,
    title,
    description,
    logo,
  } = data.siteSettings;
  const defaultTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  const defaultDescription = pageDescription ? pageDescription : description;
  const defaultPath = path ? path : siteUrl;
  
  const padAndMakeString = (num: number): string => {
    if (num < 10) {
      return `0${num}`;
    }
    return num.toString();
  };

  const hoursSpec = hours.map((h) => {
    return h.hourOpen && h.hourClose
      ? `
        {
                    "@type": "OpeningHoursSpecification",
                    "closes":  "${padAndMakeString(
                      h.hourClose
                    )}:${padAndMakeString(h.minuteClose || 0)}:00",
                    "dayOfWeek": "https://schema.org/${h.day}",
                    "opens":  "${padAndMakeString(
                      h.hourOpen
                    )}:${padAndMakeString(h.minuteOpen || 0)}:00",
                },
                `
      : null;
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
            "openingHoursSpecification": ${JSON.stringify(hoursSpec)},
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
