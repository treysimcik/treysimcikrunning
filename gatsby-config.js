module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      export: `GATSBY_CONTENTFUL_OFFLINE=true`,
      options: {
        //spaceId: process.env.API_SPACE_ID,
        //accessToken: process.env.CONTENT_DELIVERY_API,
        spaceId: 'fyol2bxju7g0',
        accessToken: '798336d17a10b5ff10bdb2e461f333eaa7ccebc1fdec6b9531ab217de8c69411'
      },
    },
  ],
}