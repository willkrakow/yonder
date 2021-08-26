/** @jsx jsx */
import React from "react";
import { jsx, Themed, Card, Button, Flex, Link, Badge } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link as GatsbyLink } from 'gatsby'
import { IEvent } from "../../typings";
import ScrollAnimation from "react-animate-on-scroll";
import { getGatsbyImageData } from "gatsby-source-sanity";
import {sanityConfig} from '../../utils'

interface IEventCard {
  e: IEvent;
  index: number
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventCard: React.FC<IEventCard> = ({e}) => {
  const eventDate = new Date(e.date)
  const dateString = `${MONTHS[eventDate.getMonth()]} ${eventDate.getDate()}, ${eventDate.getFullYear()}`
    const imageData = getGatsbyImageData(e.image, { width: 900, height: 600, fit: "fill" }, sanityConfig);
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
        <div
          sx={{
            flexBasis: ["100%", "60%", null],
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GatsbyImage
            //@ts-ignore
            image={imageData}
            alt={e.name}
            sx={{
              gridArea: "1/1",
              zIndex: 12,
              borderRadius: 1,
              height: "100%",
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
          ></div>
        </div>
        <Flex
          sx={{
            flexBasis: ["100%", "40%", null],
            py: [4, 5, 6],
            px: 4,
            zIndex: 20,
            flexDirection: "column",
          }}
        >
          <Themed.p>{dateString}</Themed.p>
          <Link
            as={GatsbyLink}
            //@ts-ignore
            to={`/events/${e.slug.current}`}
          >
            <Themed.h3 sx={{ mb: 5, mt: 0 }}>{e.name}</Themed.h3>
          </Link>

          <div sx={{ flex: "100%"}}>
            {e.eventTags &&
              e.eventTags.map((tag, i) => <Badge key={i}>#{tag} </Badge>)}
          </div>
          <GatsbyLink sx={{ mt: 4, }} to={`/events/${e.slug.current}`}>
            <Button variant="action">Learn more &rarr;</Button>
          </GatsbyLink>
        </Flex>
      </Card>
    </ScrollAnimation>
  );
};

export default EventCard