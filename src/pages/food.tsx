/** @jsx jsx */
import React from "react";
import {
  Badge,
  Button,
  Container,
  Grid,
  jsx,
  Link,
  Themed,
} from "theme-ui";
import { PageProps, graphql } from "gatsby";
import { IRestaurant } from "../typings";
import _ from "lodash";
import { GatsbyImage } from "gatsby-plugin-image";

interface IFood {
  data: {
    allSanityFoodItem: {
      nodes: IRestaurant[];
    };
  };
}

type FoodProps = IFood & PageProps;

const Food = (props: FoodProps) => {
  const { nodes: restaurants } = props.data.allSanityFoodItem;
  return (
    <Container>
      <Themed.h2 sx={{ textAlign: "center" }}>Food</Themed.h2>
      <Grid columns={[1, 2, 2]} gap={[4, 5, 6]}>
        {restaurants.map((restaurant) => (
          <article key={restaurant._id} sx={{ mb: 5 }}>
            <Link href={restaurant.website}>
              <Themed.h3>{restaurant.name}</Themed.h3>
            </Link>
            <Themed.h4>{restaurant.description}</Themed.h4>
            {restaurant.cuisines.map((cuisine) => {
              const cuisineId = _.uniqueId();
              return <Badge key={cuisineId}>#{cuisine}</Badge>;
            })}
            <GatsbyImage
              image={restaurant.image.asset.gatsbyImageData}
              alt={restaurant.name}
              sx={{ mt: 3, mb: 5 }}
            />

            <Themed.p as="address">
              {restaurant.address.streetOne}
              {restaurant.address.streetTwo ? (
                <>
                  <br />
                  `${restaurant.address.streetTwo}`
                </>
              ) : (
                <br />
              )}
              {restaurant.address.city}, {restaurant.address.region}{" "}
              {restaurant.address.zip}
              <br />
              <Link variant="text" href={`tel:+1${restaurant.phone}`}>
                {restaurant.phone}
              </Link>
            </Themed.p>
            <Themed.p
              sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  mt: 5,
                span: {
                  borderRightColor: "accent",
                  borderRightWidth: 2,
                  pr: 3,
                  mr: 3,
                  borderRightStyle: "solid",
                  color: "muted",
                },
                "span:last-of-type": { borderRightColor: "transparent" },
              }}
            >
              {restaurant.delivery && <span>Delivery</span>}
              {restaurant.takeout && <span>Takeout</span>}
              {restaurant.reservations && <span>Reservations</span>}
              {restaurant.dineIn && <span>Dine-In</span>}
            </Themed.p>
            <Link href={restaurant.website}>
              <Button variant="secondary" sx={{ mt: 4 }}>
                View menu
              </Button>
            </Link>
          </article>
        ))}
      </Grid>
    </Container>
  );
};

export default Food;

export const query = graphql`
  {
    allSanityFoodItem {
      nodes {
        address {
          region
          city
          streetOne
          streetTwo
          zip
        }
        cuisines
        dineIn
        delivery
        takeout
        image {
          asset {
            gatsbyImageData(aspectRatio: 1.2, fit: FILL)
          }
        }
        reservations
        menus {
          ... on SanityFile {
            _key
            _type
            asset {
              url
            }
          }
          ... on SanitySocialLink {
            _key
            _type
            url
          }
        }
        description
        phone
        website
        name
        id
        _id
        _key
      }
    }
  }
`;
