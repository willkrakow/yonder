/** @jsx jsx */
import React from "react";
import { jsx, Grid, Themed, Container } from "theme-ui";
import { IEvent, QueryPrototypeProps, ImageAsset } from "../../typings";
import {EventCard} from "../event";
import ScrollAnimation from 'react-animate-on-scroll'

export type EventSectionProps = IEventSection & QueryPrototypeProps;

export interface IEventSection {
  mainText?: string;
  content: IEvent[];
  backgroundImage?: ImageAsset;
}

const EventSection = ({ content }: EventSectionProps) => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <Container
          as="section"
        >
          <Themed.h3 sx={{ textAlign: "center", mx: "auto", mb: 5, borderLeft: "none", ml: "auto", pl: "auto" }}>
            Events
          </Themed.h3>
          <Grid columns={1} gap={6}>
            {content.map((event, i) => (
              <EventCard index={i} key={event._id} e={event} />
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </>
  );
};

export default EventSection;
