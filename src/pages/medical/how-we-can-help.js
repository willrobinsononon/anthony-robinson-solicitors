import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {LargeText, Paragraph, FinalParagraph} from "../../components/text"
import { Link } from "gatsby"

const title="Medical Professionals - How We Can Help"

const Medical = () => {

  return (

    <Layout>
      <InnerPage title={title} sidebar={true} testimonials={true} genericContact={true} image={
        <StaticImage 
          alt="" 
          src="../../images/medical.jpg"
          className="min-w-full [gridArea:1/1] z-0"
          imgClassName="brightness-50"
          layout="fullWidth"
        />}
      >
        <InnerPageSection title={false}>
          <LargeText>
            We are experienced in acting for doctors and professionals when they meet difficulties or face obstacles in their careers, whether with their employers or their regulatory bodies.
          </LargeText>
          <LargeText>
            We also assist GPs and others with managing employment issues. We will offer you quality advice and assistance and you can trust that we are committed to your cause.
          </LargeText>
          <Paragraph>
            Are you looking for a solicitor who you will not only offer you quality advice and assistance, but who also understands the importance of your career and the issues you face?
          </Paragraph>
          <Paragraph>
            At Anthony Robinson Solicitors, we are here to ensure that you receive the best possible legal service to meet your needs whilst being confident that you have a lawyer committed to your cause.
          </Paragraph>
          <Paragraph>
            We are experienced in acting for doctors and professionals across a range of issues arising in the workplace and in the context of regulation by professional bodies.
          </Paragraph>
          <Paragraph>
            We are aware that clients want to be guided as to the best way forward with clear and helpful advice. Whether you face a GMC investigation, need assistance with an application to be placed on the specialist register or at your workplace you are being treated unfairly, being discriminated against or a victim of bullying, you can be reassured that you have an advisor who will do their utmost to fight your corner and to try to find a solution to your difficulties.
          </Paragraph>
          <Paragraph>
            At Anthony Robinson Solicitors we have the experience and expertise to give you the reassurance that your career concerns are in safe hands. We provide a dedicated personal service and are approachable and friendly. We always seek to ensure that all of our clients feel that they have found a trusted adviser that they can rely on to act in their best interests.
          </Paragraph>
          <Paragraph className="text-xl">
            Have a look through some typical queries we can help with <Link className="hover:text-ar-b-grey font-extrabold" to={"/medical/key-issues"}>here</Link>
          </Paragraph>
          <Paragraph className="text-xl">
            Take a look at some of the services we offer <Link className="hover:text-ar-b-grey font-extrabold" to={"/medical/servicess"}>here</Link>
          </Paragraph>
          <FinalParagraph>
            Our legal services cover the areas of Manchester, Altrincham, Warrington, Stockport, Wilmslow, Knutsford, Cheshire.
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>     
  )
}

export default Medical

export const Head = () => <Seo title={title} />
