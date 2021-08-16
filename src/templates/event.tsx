/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Themed, Container, Grid, Box } from 'theme-ui'
import { IEvent as EventProps } from '../typings'
import {graphql, PageProps} from 'gatsby'
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
        <Container as="article">
          <Grid columns={[1, "3fr 2fr", "3fr 2fr"]} gap={6}>
            <header>
              <Themed.h2>{name}</Themed.h2>
              <Themed.h4>
                {date} <br />
              </Themed.h4>
              <Themed.h5>{timeSpan}</Themed.h5>
              {eventTags && (
                <Flex sx={{ flexWrap: "wrap", justifyContent: ["center", "left", "left"] }}>
                  {eventTags.map(tag => <Themed.h6 sx={{ px: 2 }} >#{tag}</Themed.h6>)}
                  </Flex>
              )}
              <Themed.p
                sx={{
                  fontWeight: "body",
                  color: "muted",
                  fontSize: 0,
                }}
              >
                {fromNow}
              </Themed.p>
              {subtitle && (
                <Themed.p color="muted" sx={{ fontWeight: "bold", letterSpacing: 2 }}>
                  {subtitle}
                </Themed.p>
              )}
            </header>
            <Flex sx={{ flexDirection: "column" }}>
              <GatsbyImage
                image={image.asset.gatsbyImageData}
                alt={image.caption || event.name}
              />
            </Flex>
            <Box>
              {description.map((d) => (
                <Themed.p key={d._key}>{d.children[0].text}</Themed.p>
              ))}
            </Box>
          </Grid>
        </Container>
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