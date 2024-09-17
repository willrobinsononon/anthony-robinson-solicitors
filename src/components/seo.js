import * as React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

const SEO = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()
  
    const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: `${siteUrl}${image}`,
      url: `${siteUrl}${pathname || ``}`,
    }
  
    return (
      <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        
        {/*Essential META Tags */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta name="twitter:card" content="summary_large_image"/>

        {/* Non essential, but recommended */}
        <meta property="og:description" content={seo.description} />
        <meta property="og:site_name" content={defaultTitle}/>
        <meta name="twitter:image:alt" content="Alt text for image" />

        {/* Non essential, but required for analytics */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@website-username"></meta>

        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
        {children}
      </>
    )
  }

  export default SEO