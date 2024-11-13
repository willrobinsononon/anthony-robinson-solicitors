import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../components/inner-page"
import InnerPageSection from "../components/inner-page-section"
import { Link } from "gatsby"
import {Paragraph,} from "../components/text"

const title="Complaints"

const Complaints = () => {

  return (
    <Layout>
        <InnerPage title={title} sidebar={true} testimonials={true} image={
          <StaticImage 
            alt="" 
            src="../images/title1.jpg"
            className="[gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />}
        >
            <InnerPageSection title=" Our Complaints Procedure">
            <Paragraph>
                At Anthony Robinson Solicitors we endeavour to provide a high-quality service and try to ensure that all our clients are pleased with the services received. However, if you are not satisfied with level or quality of service then please raise a complaint as soon as you are able and we will seek to resolve the issue fairly and quickly. We aim to uphold the standards that we set out to achieve and we will look to learn from mistakes made, thereby improving our standards.
            </Paragraph>
            <Paragraph>
                If you have any complaint, please set out details in writing and send these through to us for the attention of Olivia Robinson. The complaint may be sent by post to our office address 20 Market Street Altrincham WA14 1PF or by email to or@anthonyrobinsonsolicitors.co.uk.
            </Paragraph>
            <Paragraph>
                We will write to you acknowledging your complaint within 3 working days of receiving it.
                Your complaint will then be investigated and we may correspond with you requesting further information if necessary.
            </Paragraph>
            <Paragraph>
                We aim to provide you with an outcome to your complaint within 14 days of the complaint being raised. If the matter is complicated and further time is required we will advise you of that as soon as it becomes apparent that the 14-day timeframe will not be met.
                We will send you a detailed written reply to your and this will include our suggestions for resolving the matter. If our service to you is found to be below standard we will discuss ways in which we can make things better or, if appropriate, recompense you in some way.
            </Paragraph>
            <Paragraph>    
                If you are not satisfied with the response to the complaint we will look to meet with you to try to resolve the matter to the satisfaction of us both. You will be notified in writing of the outcome of any such meeting and the decision of the firm within 7 days of the date of the meeting.  Our general aim is to resolve any formal complaints within 28 days.
            </Paragraph>
            <Paragraph>    
                Should you not be happy with the outcome of the Complaints Procedure you have a right to refer your complaint to the Legal Ombudsman.
            </Paragraph>
            <Paragraph>  
                You can contact the Legal Ombudsman by the following means:<br/>
                Visit: <Link to="https://www.legalombudsman.org.uk" className="underline">https://www.legalombudsman.org.uk</Link><br/>
                Call: 0300 555 0333 between 9am to 5pm.<br/>
                Email: enquiries@legalombudsman.org.uk<br/>
                Write to The Legal Ombudsman, PO Box 6806, Wolverhampton, WV1 9WJ
            </Paragraph>
            <Paragraph>  
                Any complaint to the Legal Ombudsman should be brought within six months of our final response to the complaint or within six years of the act or omission about which you are complaining occurring (or if outside of this period, within three years of when you should reasonably have been aware of it).
                For further information you may visit the Ombudsman’s website (at the address above).
            </Paragraph>
            <Paragraph>  
                You also have the right to complain to the Solicitors Regulation Authority if you have concerns about the conduct of Anthony Robinson Solicitors or its staff. Further information is available on the SRA website: <Link to="https://www.legalombudsman.org.uk" className="underline">https://www.sra.org.uk/consumers/problems/</Link>.
            </Paragraph>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default Complaints

export const Head = () => <Seo title={title}/>
