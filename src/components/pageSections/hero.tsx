/**@jsx jsx */
import React from 'react'
import { Themed, jsx, Flex, Box, Button, Grid } from 'theme-ui'
import { HeroProps } from '../../typings'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link as GatsbyLink } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { alpha } from '@theme-ui/color'
import { getGatsbyImageData } from "gatsby-source-sanity";

const Hero: React.FC<HeroProps> = (props) => {
  const { title, image } = props
  const imageData = getGatsbyImageData(
    image,
    { fit: "fill" },
    { projectId: "hiyhitvr", dataset: "production"}
  );

  console.log(imageData);
    return (
      <Grid columns={[1, 1, "1fr 1fr"]}>
        <Box
          sx={{
            placeContent: "center",
            placeSelf: "normal",
            zIndex: 60,
            maxWidth: [null, null, 9],
            minHeight: "80vh",
            px: 4,
            mx: "auto",
            gridArea: ["1 / 1", null, "1 / 1"],
            display: "flex",
            position: "relative",
            flexDirection: "column",
            backgroundColor: (t) => {
              return [
              `${alpha("dark", 0.5)(t)}`,
              `${alpha("dark", 0.5)(t)}`,
              "transparent",
            ]},
          }}
        >
          <ScrollAnimation
            animateIn="fadeIn"
            offset={0}
            animateOnce={true}
            delay={250}
          >
            <Themed.h2
              sx={{
                my: 2,
                fontSize: ["3.4em", "6em", "6em"],
                lineHeight: "120%",
                color: ["light", "light", "primary"],
                fontWeight: 100,
                textAlign: ["center", null, "left"],
                "&::after": { content: "none" },
              }}
            >
              {title}
            </Themed.h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeInUp"
            offset={0}
            delay={500}
          >
            <Flex
              sx={{
                my: 5,
                justifyContent: "space-between",
                flexWrap: "wrap",
                a: {
                  my: 4,
                },
              }}
            >
              <GatsbyLink to="/menu">
                <Button variant="primary">View menu</Button>
              </GatsbyLink>
              <a href="https://www.google.com/maps/dir//Yonder:+Southern+Cocktails+and+Brew,+114+W+King+St,+Hillsborough,+NC+27278/@36.075492,-79.1022201,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89acdf924f5833c9:0x39c761f95557be93!2m2!1d-79.1000315!2d36.0754905!3e0">
                <Button variant="secondary">Get directions</Button>
              </a>
            </Flex>
          </ScrollAnimation>
        </Box>
        <GatsbyImage
          sx={{ gridArea: ["1 / 1", null, "1 / 2"] }}
              //@ts-ignore
          image={imageData}
          alt={title}
          //@ts-ignore
        />
      </Grid>
    );
}


export default Hero