/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Themed, Box } from 'theme-ui'
import { Event as EventProps } from '../typings'
import {graphql, PageProps} from 'gatsby'
import EventBadges from '../components/eventBadges'
import {GatsbyImage} from 'gatsby-plugin-image'

interface EventPageProps extends PageProps {
    data: {
        sanityEvent: EventProps
    }
}

const Event = (props: EventPageProps) => {
    const { sanityEvent: event } = props.data
    const { date, subtitle, name, fromNow, timeStart, timeEnd, eventTags, image, description } = event;

    const timeSpan = timeEnd ? `${timeStart} - ${timeEnd}` : `${timeStart}`

    return (
      <React.Fragment>
        <Box sx={{ maxWidth: 10, margin: "auto" }} as="article" >
          <header>
            <Themed.h3>{name}</Themed.h3>
            <Themed.h4>
              {date}{" "}
              <span
                sx={{
                  fontWeight: "body",
                  color: "muted",
                  display: "inline-block",
                  fontSize: 0,
                }}
              >
                {fromNow}
              </span>
            </Themed.h4>
            <Themed.h5>{timeSpan}</Themed.h5>
            {eventTags && <EventBadges badges={event.eventTags || []} />}
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
            <Themed.p>{d.children[0].text}</Themed.p>
          ))}
        </Box>
      </React.Fragment>
    );
}

export default Event

export const query = graphql`
  query SanityEventQuery($id: String!) {
    sanityEvent(id: { eq: $id }) {
      slug {
        current
      }
      image {
        asset {
          gatsbyImageData(height: 700)
        }
      }
      description {
        children {
          text
        }
      }
      name
      eventTags
      fromNow: date(fromNow: true)
      date(formatString: "dddd, MMMM DD")
      timeStart: date(formatString: "LT")
      timeEnd: dateEnd(formatString: "LT")
      subtitle
    }
  }
`;