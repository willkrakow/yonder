/** @jsx jsx */
import React from 'react'
import { jsx, Themed, Card, Grid } from 'theme-ui'
import { graphql, PageProps } from 'gatsby'
import Seo from '../components/seo'
import PictureCard from '../components/pictureCard'
import { Event } from '../typings'

interface Props extends PageProps {
    data: {
        allSanityEvent: {
            nodes: Array<Event>
        }
    }
}

const Events = (props: Props) => {
    const {nodes: events} = props.data.allSanityEvent
    return (
      <React.Fragment>
        <Seo pageTitle={`Events`} />
        <Grid columns={[1, 2, 3]}>
          {events.map((e) => (
            <Card>
              <PictureCard
                image={e.image}
                title={e.name}
                link={`/events/${e.slug.current}`}
              />
              <Themed.h5>{e.subtitle}</Themed.h5>
            </Card>
          ))}
        </Grid>
      </React.Fragment>
    );
}


export const query = graphql`
  {
    allSanityEvent {
      nodes {
        slug {
          current
        }
        name
        date(formatString: "dddd, MMMM DD")
        id
        subtitle
        image {
          asset {
            gatsbyImageData(aspectRatio: 0.8, layout: CONSTRAINED)
          }
        }
        dateEnd(formatString: "dddd, MM DD")
      }
    }
  }
`;


export default Events