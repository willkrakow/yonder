/** @jsx jsx */
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { jsx, Container, Themed, Box, Grid } from "theme-ui";

const About = (content: Array<any>) => {
  console.log(content);
  return (
    <React.Fragment>
      <Container>
        <Themed.h2 sx={{textAlign: "center", width: "100%"}} >About us</Themed.h2>
        <Grid columns={[1, 2, 2]} gap={6}>
          <Box
            sx={{
              order: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Themed.h3>Where we started</Themed.h3>
            <Themed.p>
              Back in early 2013, I was working at a small startup in San
              Francisco called Stitch Fix, alongside Adam Morse and a handful of
              others. We were designing and building out early versions of their
              marketing pages and some internal tools. I had the word designer
              in my title, and until that point in my career, I'd not shipped
              much production code for work. I learned Flash in college and
              taught myself HTML and CSS on the side over the years, using it
              for small side projects and design prototypes for user research,
              but had never used Git and knew next-to-nothing about JavaScript.
              We were both enamored by the work that people like Nicole Sullivan
              and Nicolas Gallagher were doing with Object-Oriented CSS and
              stealing lots of ideas for what we were working on. After we left
              the company, I decided to move back to the east coast and work for
              Kickstarter. In late 2013, I'd taken some of the ideas Adam and I
              were talking about at the time, and some of the problems we were
              working on at Kickstarter (involving a 1MB+ CSS bundle), and
              released the first version of Basscss. Around the same time, Adam
              released Tachyons. We both continued to develop each project
              separately and never landed on a common API for the two libraries.
            </Themed.p>
          </Box>
          <Box sx={{ order: 2 }}>
            <StaticImage
              src="https://images.pexels.com/photos/2611814/pexels-photo-2611814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Us, in the early days"
              layout="constrained"
              sx={{ mt: 6 }}
            />
          </Box>
          <Box sx={{ order: [4, 3, 3] }}>
            <StaticImage
              src="https://images.pexels.com/photos/3417441/pexels-photo-3417441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Us, in the early days"
              layout="constrained"
              sx={{ mt: 6 }}
            />
          </Box>
          <Box
            sx={{
              order: [3, 4, 4],
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Themed.h3>Early days</Themed.h3>
            <Themed.p>
              In hindsight, I wish I'd pushed forward with Tachyons naming
              conventions, but at the time, I don't think my team would have
              gone for it. I had changed btn to button because the designers &
              developers I worked with prefered "human readable" naming
              conventions. There's nothing objectively more or less "human
              readable" between btn or button, but I do understand the concern
              and think it's valuable to side with the team your working with in
              situations like this. But there's no reason Basscss, as an open
              source library, had to adhere to the same conventions. The real
              tragedy here in the divergent naming conventions is that if you've
              started building an application with Basscss, but then want to
              upgrade to something more fully-featured like Tachyons, you'll
              have to do a lot of manual work to migrate. Essentially, HTML
              templates written with either of these libraries isn't as portable
              as if we'd used a standard syntax, for example inline styles.
              Today's tools would make this a lot easier, using type checking,
              unit tests, and perhaps even AST parsing, but it would still
              create a barrier.
            </Themed.p>
          </Box>

          <Box
            sx={{
              order: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Themed.h3>Where we're at</Themed.h3>
            <Themed.p>
              hy am I talking about approaches to CSS from five years ago? Call
              me naive, but I like to think that humans are capable of learning
              from their past mistakes. A lot of modern front-end libraries are
              starting to settle on more standard, more interoperable APIs that
              help reduce lock-in. Take React and Preact, or Styled Components
              and Emotion. These libraries share virtually the same API, which
              means teams can easily migrate from one to another in the span of
              an afternoon. This is great thing, and it allows developers to
              start thinking at a higher level of abstraction. Styled System is
              one small attempt at a higher level of abstraction on top of the
              current CSS-in-JS libraries. It's completely decoupled from Styled
              Components, Emotion, and even React itself. For the most part,
              Styled System uses CSS property names as React component props,
              which is something that other libraries do as well and doesn't
              require much additional learning if you already know some CSS. I
              think this is great. Some libraries have even re-implemented the
              core of Styled System for various reasons, which I think is fine
              and helps encourage exploration. Where I see differences start to
              arise is at the theme definition level. Even outside of React
              context-based theming, a lot of React applications will store
              global style constants in a common module. Something I'm starting
              to notice is that there are no standard conventions for what that
              module contains or how its structured, but all of them seem to be
              doing the same thing, in a slightly different way.
            </Themed.p>
          </Box>
          <Box sx={{ order: 6 }}>
            <StaticImage
              src="https://images.pexels.com/photos/4667147/pexels-photo-4667147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Us, today"
              layout="constrained"
              sx={{ mt: 6 }}
            />
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default About;
