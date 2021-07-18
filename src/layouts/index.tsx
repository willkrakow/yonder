/** @jsx jsx */

import React from "react";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import { Themed, jsx, Grid } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import {
  Navbar,
  Footer,
  MobileNavbar,
  MenuLinkProps,
} from "../components/navigation";
import StaticHead from "./staticHead";
import Seo from "../components/seo";

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

export interface LayoutProps extends PageProps {
  pageContext: {
    title: string;
    description?: string;
  };
}

export default (context: LayoutProps) => {
  console.log(context);
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
      <StaticHead />
      <Seo
        pageDescription={
          context.pageContext.description || data.site.siteMetadata.description
        }
        pageTitle={context.path === "/" ? null : context.pageContext.title}
        path={context.location.origin}
      />
      <Grid as="header">
        <StaticImage
          src={`https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          alt="Dark bar"
          layout={"fullWidth"}
          aspectRatio={2 / 1}
          quality={100}
          //@ts-ignore
          sx={{
            gridArea: "1/1",
            minHeight: "75vh",
            maxHeight: "75vh",
          }}
        />

        <Grid
          sx={{ gridArea: "1/1", position: "relative", placeItems: "center" }}
        >
          <MobileNavbar
            menuLinks={menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <Navbar
            menuLinks={menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          {context.location !== "/" && (
            <Themed.h2 sx={{ color: "light", alignSelf: "flex-start", p: 3 }}>
              {context?.pageContext?.title ||
                context.location.pathname.slice(1).toUpperCase()}
            </Themed.h2>
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
