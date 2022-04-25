module.exports = {
  siteMetadata: {
    title: `NU Blockchain Website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: "/NEU_Blockchain",
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: "images_page",
    //     path: `${__dirname}/src/static/images_page/`,
    //   },
    // },
  ], // Needed for dynamic images],
};
