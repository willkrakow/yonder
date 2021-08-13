/** @jsx jsx */

import React from "react";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import { Themed, jsx, Grid, Box } from "theme-ui";
import "animate.css/animate.compat.css";
import {
  Navbar,
  Footer,
  MobileNavbar,
  MenuLinkProps,
} from "../components/navigation";
import StaticHead from "./staticHead";
import Seo from "../components/seo";
import { Global } from "@emotion/react";
export interface MenuProps {
  site: {
    siteMetadata: {
      menuLinks: Array<MenuLinkProps>;
      title: string;
      subtitle: string;
      description: string;
    };
  };
}
import { darken, lighten } from "@theme-ui/color";

export interface LayoutProps extends PageProps {
  pageContext: {
    title: string;
    description?: string;
  };
}

export default (context: LayoutProps) => {
  
  const data: MenuProps = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          subtitle
          description
          siteUrl
          menuLinks {
            name
            path
          }
        }
      }
    }
  `);
  const { menuLinks } = data.site.siteMetadata;

  const isHome = context.location.pathname === "/"
  return (
    <React.Fragment>
      <Global
        styles={(theme) => ({
          "*": {
            scrollBehavior: "smooth",
          },
          main: {
            minHeight: "100vh",
          },
          body: {
            background:
              `linear-gradient(to bottom right, ${lighten(
                "background",
                0.05
              )(theme)}, ${darken("background", 0.1)(theme)})`,
          },
        })}
      />
      <StaticHead />
      <Seo
        pageDescription={
          context.pageContext.description || data.site.siteMetadata.description
        }
        pageTitle={context.path === "/" ? null : context.pageContext.title}
        path={context.location.origin}
      />
      <Grid
        as="header"
        columns={[1, 1, 2]}
        px={[1, 3, 4]}
        sx={{ rowGap: 0, columnGap: [0, 0, 6] }}
      >
        <Box sx={{ gridColumn: ["span 1", "span 1", "span 2"] }}>
          <MobileNavbar
            context={context}
            menuLinks={menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <Navbar
            context={context}
            menuLinks={menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
        </Box>

        <Grid
          sx={{
            position: "relative",
            placeItems: "center",
            alignContent: "center",
            justifyContent: "center",
            overflow: "hidden",
            gridColumn: isHome ? "span 1" : "span 2",
          }}
        >
          {!isHome && (
            <>
              <Themed.h2
                sx={{
                  alignSelf: "flex-start",
                  justifySelf: "center",
                  textAlign: "center",
                  gridColumn: "span 2",
                  p: 3,
                  mb: 5,
                }}
              >
                {context?.pageContext?.title ||
                  context.location.pathname.slice(1).toUpperCase()}
              </Themed.h2>
            </>
          )}
        </Grid>
      </Grid>

      <main sx={{ variant: "layout.main" }}>{context.children}</main>
      <Footer
        copyright={new Date()}
        street={"105 W. King St."}
        city={"Hillsborough"}
        state={"NC"}
        phone={"(919) 923-9882"}
        zip={27278}
      />
    </React.Fragment>
  );
};
