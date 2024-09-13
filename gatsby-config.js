/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Employment law solicitors, Manchester, Altrincham, Stockport, Cheshire",
    description: "Anthony Robinson Solicitors are employment law solicitors who can take care of any legal issues that may arise in the workplace.",
    image: "/logo.png",
    siteUrl: "https://www.anthonyrobinsonsolicitors.co.uk/",
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Libre Franklin`,
          file: `https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap`,
        },
      ],
    },
  },]
};