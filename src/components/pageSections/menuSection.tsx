/**@jsx jsx */
import React from "react";
import { jsx, Themed, Grid, Button, Card, Container, Box } from "theme-ui";
import { Link } from "gatsby";
import { ICategory, ICta, ISanityImage } from "../../typings";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ScrollAnimation from "react-animate-on-scroll";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { sanityConfig } from "../../utils";

export interface MenuSectionProps {
  title: string;
  description: string;
  categories: ICategory[];
  cta: ICta;
}

const MenuSection = ({
  title,
  description,
  cta,
  categories,
}: MenuSectionProps) => {

  const getImage = (image: ISanityImage): IGatsbyImageData | null => {
    const imageData = getGatsbyImageData(image, {}, sanityConfig);
    return imageData
  }
  return (
    <>
      <Container as="section" >
        <Grid columns={[1, 2, 3]} gap={5}>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <Box
              pr={5}
              pb={6}
              sx={{ gridColumn: ["span 1", "span 2", "span 1"] }}
            >
              <Themed.h3>{title}</Themed.h3>
              <Themed.p>{description}</Themed.p>
                <Link to="/menu">
                  <Button variant="action">{cta.buttonText}</Button>
                </Link>
            </Box>
          </ScrollAnimation>
          {categories.map((category) => (
            <Card key={category.slug.current} sx={{ display: "grid" }}>
              <GatsbyImage
                //@ts-ignore
                image={getImage(category.categoryImage)}
                alt={category.name}
                sx={{ gridArea: "1/1" }}
              />
              <div
                sx={{
                  gridArea: "1/1",
                  position: "relative",
                  placeItems: "center",
                  placeContent: "center",
                  display: "grid",
                }}
              >
                <Link
                  sx={{ textAlign: "center", textDecoration: "none" }}
                  to={`/${category.slug.current}`}
                >
                  <Button variant="secondary">{category.name}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MenuSection;
