import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../components/inner-page"
import InnerPageSection from "../components/inner-page-section"
import { Link } from "gatsby"

const Contact = () => {

  return (
    <Layout>
        <InnerPage title="Contact" sidebar={true} testimonials={false} image={
          <StaticImage 
            alt="" 
            src="../images/contact.jpg"
            className="[gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />}
        >
            <InnerPageSection title={false}>
              <p className="text-2xl font-semibold mb-10">Contact us for any further advice or queries regarding your employment issues.</p>
              <p className="mb-6">Please get in touch by telephone or using the contact form. We can arrange meetings over video call or in person at the address below.</p>
              <p className="font-semibold mb-6">Telephone: <Link to="tel:01619268500" className="text-ar-orange font-extrabold">0161 926 8500</Link></p>
              <p className="font-semibold mb-2">Chambers:</p>
              <p>20 Market Street,<br/>
                    Altrincham<br/>
                    Cheshire<br/>
                    WA14 1PF</p>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default Contact

export const Head = () => <SEO />
