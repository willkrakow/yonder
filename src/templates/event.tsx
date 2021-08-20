/** @jsx jsx */
import React from "react";
import { jsx, Flex, Themed, Container, Grid, Box, Badge, Card } from "theme-ui";
import { IEvent as EventProps } from "../typings";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GenericIcon } from "../components/icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faSpotify,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface IEventPage {
  data: {
    sanityEvent: EventProps;
  };
}

type EventPageProps = IEventPage & PageProps;

const Event = (props: EventPageProps) => {
  const { sanityEvent: event } = props.data;
  const {
    date,
    subtitle,
    name,
    twitter,
    facebook,
    instagram,
    youtube,
    website,
    email,
    spotify,
    timeStart,
    timeEnd,
    eventTags,
    image,
    description,
  } = event;
  console.log(event);
  // const imageData = getGatsbyImageData(
  //   image,
  //   {},
  //   {
  //     projectId: "hiyhitvr",
  //     dataset: "production",
  //   }
  // );
  const timeSpan = timeEnd ? `${timeStart} - ${timeEnd}` : `${timeStart}`;

  return (
    <React.Fragment>
      <Container as="article" sx={{ maxWidth: 10 }}>
        <header
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignContent: "flex-start",
            justifyContent: "space-around",
          }}
        >
          <Themed.p
            sx={{
              borderLeftColor: "accent",
              borderLeftStyle: "solid",
              borderLeftWidth: 4,
              pl: 3,
            }}
          >
            {date} <br />
            {timeSpan}
          </Themed.p>
          <Themed.h2 sx={{ mt: 0, ml: 0, alignSelf: "flex-start" }}>
            {name}
          </Themed.h2>
          {eventTags && (
              <Box>
                {eventTags.map((tag) => (
                  <Badge key={tag}>#{tag}</Badge>
                ))}
              </Box>
          )}
          {subtitle && (
            <Themed.p sx={{ fontWeight: "bold", letterSpacing: 2 }}>
              {subtitle}
            </Themed.p>
          )}
        </header>
        <Flex sx={{ flexDirection: "column" }}>
          <GatsbyImage
            //@ts-ignore
            image={image.asset.gatsbyImageData}
            alt={event.name}
            sx={{ mt: 4, mb: 5 }}
          />
        </Flex>
        <Box>
          {description.map((d) => (
            <Themed.p key={d._key}>{d.children[0].text}</Themed.p>
          ))}
        </Box>
        <Box>
          <Themed.h3>Social media</Themed.h3>
          <Themed.ul
            sx={{ display: "flex", flexDirection: "column", ml: [0, 0, 5] }}
          >
            {facebook && (
              <Themed.li>
                <GenericIcon
                  icon={faFacebookSquare}
                  url={`https://facebook.com/${facebook}`}
                  label={facebook}
                />
              </Themed.li>
            )}
            {instagram && (
              <Themed.li>
                <GenericIcon
                  icon={faInstagramSquare}
                  url={`https://instagram.com/${instagram}`}
                  label={instagram}
                />
              </Themed.li>
            )}
            {email && (
              <Themed.li>
                <GenericIcon
                  icon={faEnvelope}
                  url={`mailto:${email}`}
                  label={email}
                />
              </Themed.li>
            )}
            {twitter && (
              <Themed.li>
                <GenericIcon
                  icon={faTwitter}
                  url={`https://twitter.com/${twitter}`}
                  label={twitter}
                />
              </Themed.li>
            )}
            {spotify && (
              <Themed.li>
                <GenericIcon
                  icon={faSpotify}
                  url={`https://open.spotify.com/user/${spotify}`}
                  label={"Spotify"}
                />
              </Themed.li>
            )}
            {youtube && (
              <Themed.li>
                <GenericIcon
                  icon={faYoutube}
                  url={`https://www.youtube.com/user/${youtube}`}
                  label={youtube}
                />
              </Themed.li>
            )}
            {website && (
              <Themed.li>
                <GenericIcon
                  icon={faGlobe}
                  url={website}
                  label={website
                    .replace("http://", "")
                    .replace("https://", "")
                    .replace("www.", "")}
                />
              </Themed.li>
            )}
          </Themed.ul>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Event;

export const query = graphql`
  query SanityEventQuery($id: String!) {
    sanityEvent(id: { eq: $id }) {
      ...EventFragment
      image {
        asset {
          gatsbyImageData(height: 700)
        }
      }
      youtube: YouTube
      facebook
      instagram
      twitter
      email
      website
      spotify
    }
  }
`;
