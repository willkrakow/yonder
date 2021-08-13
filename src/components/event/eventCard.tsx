/** @jsx jsx */
import React from "react";
import { jsx, Themed, Box, Card, Button, Flex } from "theme-ui";
import { capitalizeString } from "../../utils";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'
import { IEvent } from "../../typings";
import { alpha } from '@theme-ui/color'
import ScrollAnimation from "react-animate-on-scroll";

interface IEventCard {
  e: IEvent;
  index: number
}

const EventCard: React.FC<IEventCard> = ({e, index}) => {
  console.log(index)
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
      <Card
        as="article"
        key={e.slug.current}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flexBasis: ["100%", "60%", null],
            position: "relative",
            p: 0,
            overflow: "hidden",
          }}
        >
          <GatsbyImage
            image={e.image.asset.gatsbyImageData}
            alt={e.name}
            sx={{
              gridArea: "1/1",
              zIndex: 12,
              borderRadius: 1,
            }}
          />
          <div
            sx={{
              position: "absolute",
              gridArea: "1/1",
              p: 3,
              zIndex: 15,
              display: "flex",
              top: 4,
              left: 4,
            }}
          >
            <Themed.p
              sx={{
                color: "primary",
                fontWeight: "bold",
                backgroundColor: alpha("background", 0.9),
                alignSelf: "flex-start",
                py: 2,
                px: 2,
              }}
            >
              {capitalizeString(e.fromNow)}
            </Themed.p>
          </div>
        </Box>
        <Flex
          sx={{
            flexBasis: ["100%", "40%", null],
            p: 4,
            zIndex: 20,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Link
            to={`/events/${e.slug.current}`}
            sx={{
              textDecoration: "none",
              color: "primary",
              mb: 3,
            }}
          >
            {e.date}
          </Link>
          <Themed.h4>{e.name}</Themed.h4>
          {e.eventTags && (
            <Themed.h5
              sx={{
                mb: 5,
                color: "muted",
                fontWeight: "body",
                textTransform: "lowercase",
                fontStyle: "italic",
                fontSize: 0,
              }}
            >
              {e.eventTags.map((e, i) => (
                <span key={i}>#{e?.toLowerCase()} </span>
              ))}
            </Themed.h5>
          )}
          <Link to={`/events/${e.slug.current}`}>
            <Button variant="secondary">Learn more &rarr;</Button>
          </Link>
        </Flex>
      </Card>
    </ScrollAnimation>
  );
};

export default EventCard