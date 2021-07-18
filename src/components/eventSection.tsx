/** @jsx jsx */
import React from "react";
import { jsx, Button, Grid, Themed, Card, Box } from "theme-ui";
import { EventSectionProps } from "../typings";
import { Link } from "gatsby";
import PictureCard from "./pictureCard";
import EventBadges from "./eventBadges";

const EventSection = ({content}: EventSectionProps) => {
  return (
    <React.Fragment>
      <Themed.h3
        sx={{
          fontSize: 4,
          textAlign: "center",
          borderBottomWidth: 2,
          borderBottomStyle: "solid",
          borderBottomColor: "primary",
        }}
      >
        Events
      </Themed.h3>
      <Grid columns={1} gap={6} sx={{ gridAutoRows: "400px" }} >
        {content.map((e) => (
          <Card
            as="article"
            key={e.id}
            sx={{ display: "flex", flexWrap: "wrap", maxHeight: "100%", overflow: "hidden" }}
          >
            <Box sx={{ flexBasis: ["100%", "50%", "67%"] }}>
              <PictureCard image={e.image} link={`/events/${e.slug.current}`} title={e.date} />
            </Box>
            <Box sx={{ flexBasis: ["100%", "50%", "33%"], p: 5, maxHeight: "100%" }}>
              {e.eventTags && <EventBadges badges={e.eventTags} />}
              <Themed.h4>{e.name}</Themed.h4>
              <Themed.p sx={{ overflow: "hidden", textOverflow: "ellipsis", WebkitLineClamp: 8, display: "-webkit-box", WebkitBoxOrient: "vertical" }} >{e.description[0].children[0].text}</Themed.p>
              <Link to={`/events/${e.slug.current}`}>
                <Button variant="primary">Learn more</Button>
              </Link>
            </Box>
          </Card>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default EventSection;


