/** @jsx jsx */

import React from "react";
import { jsx, Grid, Themed, Box, Button, Container } from "theme-ui";
import GoogleMapReact from "google-map-react";
import { IDailyHours } from "../../typings";
import { useStaticQuery, graphql } from "gatsby";
import { alpha } from "@theme-ui/color";
import ScrollAnimation from 'react-animate-on-scroll'

interface IMarker {
  text: string;
  lat: number;
  lng: number;
}

interface IHours {
  settings: {
    schedule: Array<{
      hours: IDailyHours[];
    }>
  };
}
const Marker: React.FC<IMarker> = (props) => {
  const arrow = props.text.slice(0, 1);
  const text = props.text.slice(1);
  return (
    <Themed.p
      sx={{
        px: 3,
        py: 2,
        color: "background",
        display: "inline-flex",
        backgroundColor: alpha("primary", 0.7),
        width: "max-content",
        fontWeight: "bold",
        boxShadow: "lg",
        borderRadius: 2,
        fontSize: 2,
      }}
    >
      <span sx={{ fontWeight: "bold" }}>
        <strong>{arrow}</strong>
      </span>
      {"  "}
      {text}
    </Themed.p>
  );
}


const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const LocationSection = () => {
  const [currentDay, setCurrentDay] = React.useState(days[new Date().getDay()]);
  const [ isOpen, setIsOpen ] = React.useState(false)

  const data: IHours = useStaticQuery(graphql`
    {
      settings: allSanitySiteSettings {
        schedule: nodes {
          hours: openingHours {
            closesAt
            opensAt
            day
          }
        }
      }
    }
  `);
  const { hours } = data.settings.schedule[0];
  const createMapOptions = (
    //@ts-ignore
    maps: GoogleMapReact.Maps
  ): GoogleMapReact.MapOptions => {
    return {
      zoomControl: false,
      gestureHandling: "none",
      disableDefaultUI: true,

      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#181818",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#5b8095",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#373737",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text",
          stylers: [
            {
              color: "#fafafa",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#31444e",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#4e4e4e",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#5b8095",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              weight: 1,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.icon",
          stylers: [
            {
              color: "#fafafa",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text",
          stylers: [
            {
              color: "#f0f2fa",
            },
            {
              weight: 0.5,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f0f2fa",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3d3d3d",
            },
          ],
        },
      ],
    };
  };

  const defaultProps = {
    center: {
      lat: 36.07563509537464,
      lng: -79.10004213038407,
    },
    zoom: 15,
  };

  

  React.useEffect(() => {

    const isCurrentlyOpen = () => {
      const dailySchedule = data.settings.schedule[0].hours.filter(h => h.day === currentDay)[0]
      const currentTime = new Date().getHours();
      const openHour = parseInt(dailySchedule.opensAt.toString().split(":")[0]) + 12;
      const closeHour = parseInt(dailySchedule.closesAt.toString().split(":")[0]) + 12;
      if (currentTime >= openHour && currentTime <= closeHour) {
        return true
      }
      return false;
      }

    setIsOpen(isCurrentlyOpen())
  }, [currentDay]);

  return (
    <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
      <Container as="section">
        <Grid columns={[1, 2, 2]} gap={6}>
          <Box>
            <div style={{ height: "100%", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key:
                    process.env.GATSBY_GOOGLE_MAP_KEY ||
                    "AIzaSyCvVDXPXHetj1jbEsA2Cd1LYEAukq7RN2M",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={createMapOptions}
              >
                <Marker
                  lat={36.077236095375}
                  lng={-79.10064213038407}
                  text="&#10553; Our Location"
                />
              </GoogleMapReact>
            </div>
          </Box>
          <Box>
            <Themed.h3>Stop on by</Themed.h3>
            <Themed.p>
              We're open 7 days a week, give or take a few. Stay for a drink,
              stay for a day. Heck you can even help us close if you're about
              that.
            </Themed.p>
            <Themed.ul sx={{ ml: 5 }}>
              {hours.map((h) => (
                <Themed.li
                  key={h.day}
                  sx={{
                    py: 3,
                    px: 3,
                    listStyleType: "none",
                    backgroundColor:
                      h.day === currentDay ? alpha("primary", 0.2) : null,
                    boxShadow: h.day === currentDay ? "sm" : "none",
                  }}
                >
                  <span
                    aria-label={h.day}
                    sx={{
                      color: "primary",
                      fontWeight: h.day === currentDay ? "bold" : "normal",
                    }}
                  >
                    {h.day}
                  </span>
                  {!h.opensAt ? (
                    <span> – CLOSED</span>
                  ) : (
                    <span>
                      {" "}
                      –{" "}
                      {`${h.opensAt.toString().split(":")[0]}pm – ${
                        h.closesAt.toString().split(":")[0]
                      }pm`}
                    </span>
                  )}
                  {isOpen && h.day === currentDay && (
                    <>
                    <br />
                    <span
                      sx={{
                        color: "accent",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      open now
                    </span>
                    </>
                  )}
                </Themed.li>
              ))}
            </Themed.ul>
            <a
              sx={{ textDecoration: "none" }}
              href="https://www.google.com/maps/dir//Yonder:+Southern+Cocktails+and+Brew,+114+W+King+St,+Hillsborough,+NC+27278/@36.075492,-79.1022201,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89acdf924f5833c9:0x39c761f95557be93!2m2!1d-79.1000315!2d36.0754905!3e0"
            >
              <Button sx={{ mt: 4 }}>Get directions</Button>
            </a>
          </Box>
        </Grid>
      </Container>
    </ScrollAnimation>
  );
};

export default LocationSection;
