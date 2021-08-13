/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Themed, Box } from 'theme-ui'
import { IEvent as EventProps } from '../typings'
import {graphql, PageProps} from 'gatsby'
import {EventBadges} from '../components/event'
import {GatsbyImage} from 'gatsby-plugin-image'

interface IEventPage {
    data: {
        sanityEvent: EventProps
    }
}

type EventPageProps = IEventPage & PageProps

const Event = (props: EventPageProps) => {
    const { sanityEvent: event } = props.data
    const { date, subtitle, name, fromNow, timeStart, timeEnd, eventTags, image, description } = event;

    const timeSpan = timeEnd ? `${timeStart} - ${timeEnd}` : `${timeStart}`

    return (
      <React.Fragment>
        <Box sx={{ maxWidth: 10, margin: "auto", px: 3 }} as="article">
          <header>
            {eventTags && (
              <EventBadges centered badges={event.eventTags || []} />
            )}
            <Themed.h4 sx={{ textAlign: "center" }}>
              {date} <br />
            </Themed.h4>
            <Themed.h5 sx={{ textAlign: "center" }}>{timeSpan}</Themed.h5>
            <Themed.p
              sx={{
                textAlign: "center",
                fontWeight: "body",
                color: "muted",
                fontSize: 0,
              }}
            >
              {fromNow}
            </Themed.p>
            {subtitle && (
              <Themed.p color="muted" sx={{ fontWeight: "bold" }}>
                {subtitle}
              </Themed.p>
            )}
          </header>
          <Flex sx={{ flexDirection: "column", mb: 5 }}>
            <GatsbyImage
              image={image.asset.gatsbyImageData}
              alt={image.caption || event.name}
            />
          </Flex>
          {description.map((d) => (
            <Themed.p key={d._key}>{d.children[0].text}</Themed.p>
          ))}
        </Box>
      </React.Fragment>
    );
}

export default Event

export const query = graphql`
  query SanityEventQuery($id: String!) {
    sanityEvent(id: { eq: $id }) {
      ...EventFragment
      image {
        asset {
          gatsbyImageData(height: 700)
        }
      }
    }
  }
`;