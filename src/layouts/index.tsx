/** @jsx jsx */

import React from "react";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import { jsx, Grid, Box, Theme, useThemeUI } from "theme-ui";
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
  const { theme } = useThemeUI();
  const [ isDesktop, setIsDesktop ] = React.useState(false);

  const desktopSize = parseInt(theme?.breakpoints?.[2].replace("em", "") || "52")


  React.useEffect(() => {
    const windowSize = window.innerWidth;
    setIsDesktop(windowSize > (desktopSize * 16));
  }, [])

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

  return (
    <React.Fragment>
      <Global
        styles={(theme: Theme) => ({
          "*": {
            scrollBehavior: "smooth",
          },
          main: {
            section: {
              marginTop: `${theme?.space?.[6] || "128px"}`,
              maxWidth: `${theme?.space?.[11] || "1280px"}`,
            },
            minHeight: "100vh",
          },
          body: {
            background: `linear-gradient(to bottom right, ${lighten(
              "background",
              0.05
            )(theme)}, ${darken("background", 0.1)(theme)})`,
          },
          address: {
            fontStyle: "normal",
          },
          a: {
            textDecoration: "none",
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
        sx={{ rowGap: 0, columnGap: [0, 0, 6] }}
      >
        <Box sx={{ gridColumn: ["span 1", "span 1", "span 2"] }}>
          {isDesktop ? (
            <Navbar
              context={context}
              menuLinks={menuLinks}
              siteTitle={data.site.siteMetadata.title}
            />
          ) : (
            <MobileNavbar
              context={context}
              menuLinks={menuLinks}
              siteTitle={data.site.siteMetadata.title}
            />
          )}
        </Box>
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
