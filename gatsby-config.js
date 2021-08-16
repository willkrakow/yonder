require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Yonder",
    subtitle: "Hillsborough, NC",
    description: "Southern Cocktails & Brew",
    siteUrl: "https://yonderbarnc.com",
    titleTemplate: "Yonder %s",
    menuLinks: [
      {
        name: "Menu",
        path: "/menu",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "Events",
        path: "/events",
      },
      {
        name: "Art",
        path: "/art",
      }
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "hiyhitvr",
        dataset: "production",
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/yonderlogo.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-theme-style-guide",
      options: {
        basePath: "/design-system",
      },
    },
    "gatsby-plugin-layout"
  ],
};
