module.exports = {
  siteMetadata: {
    title: `devjacks blog`,
    description: `The devjacks blog`,
    author: `devjacks`,
  },
  plugins: [
    // REACT HELMET
    `gatsby-plugin-react-helmet`,
    // SOURCE FILESYSTEM
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // PLUGIN MANIFEST
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // WPGRAPHQL
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "http://data.brainsky.io/graphql",
      },
    },
    // STYLED-COMPONENTS
    `gatsby-plugin-styled-components`,
  ],
}
