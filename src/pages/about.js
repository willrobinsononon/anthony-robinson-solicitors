import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../components/inner-page"
import InnerPageSection from "../components/inner-page-section"

const About = () => {

  return (
    <Layout>
        <InnerPage title="About" sidebar={true} image={
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
                    className="block m-auto mb-5 float-top md:m-3 md:inline md:float-right w-56"
                />

                <p className="mb-2 text-md [overflow-wrap:anywhere]">
                Anthony Robinson set up Anthony Robinson Solicitors Limited in 2015, drawing on his experience as a successful partner in a city-centre firm.

                Anthony has specialised in employment law since 2002, having previously had experience in personal injury and civil litigation. As an employment lawyer, he acts for both employers and employees in both contentious and non-contentious matters and advises on all aspects of employment law.
                </p><p className="mb-2 text-md [overflow-wrap:anywhere]">
                Anthony has a wealth of experience working for doctors in relation to all aspects of their careers, including GMC matters and employer issues. Amongst other things Anthony won a landmark ruling for the British Association of Physicians of Indian Origin in 2007.
                </p><p className="mb-2 text-md [overflow-wrap:anywhere]">
                As a Member of the Employment Lawyers Association you can be assured of Anthony's reputation and up-to-date knowledge in all aspects of employment law.

                Anthony is married with two children. As well as spending time with the family he enjoys music, singing, reading and sports.
                </p>
            </InnerPageSection>
            <InnerPageSection title="Complaints Procedure">
            <p className="mb-2 text-md hyphens-auto [overflow-wrap:anywhere]">
                        At Anthony Robinson Solicitors we endeavour to provide a high-quality service and try to ensure that all our clients are pleased with the services received. However, if you are not satisfied with level or quality of service then please raise a complaint as soon as you are able and we will seek to resolve the issue fairly and quickly. We aim to uphold the standards that we set out to achieve and we will look to learn from mistakes made, thereby improving our standards.

                        Our Complaints Procedure

                        If you have any complaint, please set out details in writing and send these through to us for the attention of Olivia Robinson. The complaint may be sent by post to our office address 20 Market Street Altrincham WA14 1PF or by email to or@anthonyrobinsonsolicitors.co.uk.
                        We will write to you acknowledging your complaint within 3 working days of receiving it.
                        Your complaint will then be investigated and we may correspond with you requesting further information if necessary.
                        We aim to provide you with an outcome to your complaint within 14 days of the complaint being raised. If the matter is complicated and further time is required we will advise you of that as soon as it becomes apparent that the 14-day timeframe will not be met.
                        We will send you a detailed written reply to your and this will include our suggestions for resolving the matter. If our service to you is found to be below standard we will discuss ways in which we can make things better or, if appropriate, recompense you in some way.
                        If you are not satisfied with the response to the complaint we will look to meet with you to try to resolve the matter to the satisfaction of us both. You will be notified in writing of the outcome of any such meeting and the decision of the firm within 7 days of the date of the meeting.  Our general aim is to resolve any formal complaints within 28 days.
                        Should you not be happy with the outcome of the Complaints Procedure you have a right to refer your complaint to the Legal Ombudsman.
                        You can contact the Legal Ombudsman by the following means:
                        Visit: https://www.legalombudsman.org.uk
                        Call: 0300 555 0333 between 9am to 5pm.
                        Email: enquiries@legalombudsman.org.uk
                        Write to The Legal Ombudsman, PO Box 6806, Wolverhampton, WV1 9WJ
                        Any complaint to the Legal Ombudsman should be brought within six months of our final response to the complaint or within six years of the act or omission about which you are complaining occurring (or if outside of this period, within three years of when you should reasonably have been aware of it).
                        For further information you may visit the Ombudsman’s website (at the address above).
                        You also have the right to complain to the Solicitors Regulation Authority if you have concerns about the conduct of Anthony Robinson Solicitors or its staff. Further information is available on the SRA website: https://www.sra.org.uk/consumers/problems/.
                    </p>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default About

export const Head = () => <SEO />
