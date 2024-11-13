import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../components/inner-page"
import InnerPageSection from "../components/inner-page-section"
import { Link } from "gatsby"
import {Text, Paragraph, LargeText} from "../components/text"

const title="Contact"

const Contact = () => {

  return (
    <Layout>
        <InnerPage title={title} sidebar={true} testimonials={false} image={
          <StaticImage 
            alt="" 
            src="../images/contact.jpg"
            className="[gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />}
        >
            <InnerPageSection title={false}>
              <LargeText>Contact us for any further advice or queries regarding your employment issues.</LargeText>
              <Paragraph margin="mb-6">Please get in touch by telephone or using the contact form. We can arrange meetings over video call or in person at the address below.</Paragraph>
              <Text className="font-semibold mb-6">Telephone: <Link to="tel:01619291921" className="text-ar-orange font-extrabold">0161 929 1921</Link></Text>
              <Text className="font-semibold mb-2">Chambers:</Text>
              <Text>20 Market Street,<br/>
                    Altrincham<br/>
                    Cheshire<br/>
                    WA14 1PF</Text>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default Contact

export const Head = () => <Seo title={title}/>
