import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../components/inner-page"
import InnerPageSection from "../components/inner-page-section"

const AboutUs = () => {

  return (
    <Layout>
        <InnerPage title="About Us" sidebar={true} testimonials={true} image={
          <StaticImage 
            alt="" 
            src="../images/title1.jpg"
            className="[gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />}
        >
            <InnerPageSection title="Anthony Robinson">
                <StaticImage 
                    alt="Headshot of Anthony Robinson, Employment Lawyer"
                    src="../images/ar-pic.jpg"
                    className="block m-auto mb-5 float-top md:mb-3 md:mx-3 md:inline md:float-right max-w-56"
                />

                <p className="mb-2 [overflow-wrap:anywhere]">
                Anthony Robinson set up Anthony Robinson Solicitors Limited in 2012, drawing on his experience as a successful partner in a city-centre firm.

                Anthony has specialised in employment law since 2002, having previously had experience in personal injury and civil litigation. As an employment lawyer, he acts for both employers and employees in both contentious and non-contentious matters and advises on all aspects of employment law.
                </p><p className="mb-2 [overflow-wrap:anywhere]">
                Anthony has a wealth of experience working for doctors in relation to all aspects of their careers, including GMC matters and employer issues. Amongst other things Anthony won a landmark ruling for the British Association of Physicians of Indian Origin in 2007.
                </p><p className="mb-2 [overflow-wrap:anywhere]">
                As a Member of the Employment Lawyers Association you can be assured of Anthony's reputation and up-to-date knowledge in all aspects of employment law.
                </p><p className="mb-2 [overflow-wrap:anywhere]">
                Anthony is married with two children. As well as spending time with the family he enjoys music, singing, reading and sports.
                </p>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default AboutUs

export const Head = () => <SEO />
