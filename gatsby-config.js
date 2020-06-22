require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Lee Tian`,
    siteTitle: `LeeTian`,
    siteTitleAlt: `Lee Tian`,
    siteHeadline: `LeeTian`,
    siteUrl: `https://leetian.xyz`,
    siteDescription: `Includes Light/Dark mode.`,
    siteLanguage: `en`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Lee Tian`,
        location: `Seattle`,
        showThemeAuthor: false,
        socialMedia: [
          // {
          //   title: `Linkedin`,
          //   href: `https://www.linkedin.com/in/le-tian/`
          // }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lee Tian`,
        short_name: `Lee`,
        description: `Lee's photography site`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
