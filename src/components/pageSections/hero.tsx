/**@jsx jsx */
import React from 'react'
import { Themed, jsx, Button, Grid, IconButton } from 'theme-ui'
import { HeroProps } from '../../typings'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link as GatsbyLink } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { alpha } from '@theme-ui/color'
import { getGatsbyImageData } from "gatsby-source-sanity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Hero: React.FC<HeroProps> = (props) => {
  const { title, image } = props
  const imageData = getGatsbyImageData(
    image,
    { fit: "fill" },
    { projectId: "hiyhitvr", dataset: "production"}
  );
  const handleScroll = () => {
    window.scroll(0, 800)
  }

    return (
      <Grid columns={[1, 1, "1fr 1fr"]}>
        <div
          sx={{
            placeContent: "center",
            placeSelf: "normal",
            zIndex: 60,
            maxWidth: [null, null, 9],
            minHeight: "90vh",
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
                fontSize: ["4.4em", "6em", "6em"],
                color: ["light", "light", "primary"],
                fontWeight: "bold",
                textAlign: ["center", null, "left"],
                "&::after": { content: "none" },
                letterSpacing: 2,
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
            <div
              sx={{
                display: "flex",
                justifyContent: ["center", null, "space-between"],
                flexWrap: "wrap",
              }}
            >
              <GatsbyLink to="/menu">
                <Button variant="primary">View menu</Button>
              </GatsbyLink>
              <a href="https://www.google.com/maps/dir//Yonder:+Southern+Cocktails+and+Brew,+114+W+King+St,+Hillsborough,+NC+27278/@36.075492,-79.1022201,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89acdf924f5833c9:0x39c761f95557be93!2m2!1d-79.1000315!2d36.0754905!3e0">
                <Button variant="secondary">Get directions</Button>
              </a>
            </div>
          </ScrollAnimation>
          <IconButton onClick={handleScroll} sx={{ mx: "auto", my: 4, display: ["inherit", null, "none"], }} ><FontAwesomeIcon size="3x" icon={faCaretDown} sx={{ color: "light" }} /></IconButton>
        </div>
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