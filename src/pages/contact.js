import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../components/inner-page"
import InnerPageSection from "../components/inner-page-section"
import ContactForm from "../components/contact-form"

const Contact = () => {

  return (
    <Layout>
        <InnerPage title="Contact" sidebar={false} image={
          <StaticImage 
            alt="" 
            src="../images/contact.jpg"
            className="[gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />}
        >
            <InnerPageSection title={false}>
                <ContactForm/>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default Contact

export const Head = () => <SEO />
