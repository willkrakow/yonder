/** @jsx jsx */
import React from "react";
import { jsx, Themed, Container, Box, Badge } from "theme-ui";
import { IEvent as EventProps } from "../typings";
import { graphql, PageProps } from "gatsby";
import PostImage from "../components/postImage";
import EventOrArtSocialList from "../components/eventOrArtSocialList";
import Seo from "../components/seo";

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
    timeStart,
    timeEnd,
    eventTags,
    image,
    description,
  } = event;
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
      <Seo pageTitle={name} />
      <Container as="article" sx={{ maxWidth: 10 }}>
        <header>
          <Themed.p>
            {date} <br />
            {timeSpan}
          </Themed.p>
          <Themed.h2>
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
            <Themed.h4>
              {subtitle}
            </Themed.h4>
          )}
        </header>
        <PostImage image={image.asset.gatsbyImageData} alt={name} />
          {description.map((d) => (
            <Themed.p key={d._key}>{d.children[0].text}</Themed.p>
          ))}
          <EventOrArtSocialList {...event} />
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
