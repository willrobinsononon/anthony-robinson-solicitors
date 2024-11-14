import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {LargeText, Paragraph, FinalParagraph} from "../../components/text"
import { Link } from "gatsby"

const title="Employees - How We Can Help"

const Employees = () => {

  return (

    <Layout>
      <InnerPage title={title} sidebar={true} testimonials={true} genericContact={true} image={
        <StaticImage 
          alt="" 
          src="../../images/title2.jpg"
          className="min-w-full [gridArea:1/1] z-0"
          imgClassName="brightness-50"
          layout="fullWidth"
        />}
      >
        <InnerPageSection title={false}>
          <LargeText>
            When you think about having to get help from an employment lawyer does this only add to your worries?
          </LargeText>
          <Paragraph>
            At Anthony Robinson Solicitors, we understand the anxiety that can be caused by difficulties at work and we want to help relieve this as much as possible.  We are here to offer you support whilst ensuring that you meet your needs by receiving the best possible legal service from a reliable employment lawyer.
          </Paragraph>
          <Paragraph>
            We know that clients want to be made aware of their rights and to be guided as to the best way forward with clear and helpful advice.
          </Paragraph>
          <Paragraph>
            Whether you are being treated unfairly, being discriminated against, or are a victim of bullying you can be reassured that you have an employment lawyer who will do their utmost to fight your corner and to try to find a solution to your difficulties.
          </Paragraph>
          <Paragraph>
            If your employment is reaching its end we are experienced in negotiating termination packages or if necessary representing clients in proceedings in the Employment Tribunal or the High Court.
          </Paragraph>
          <Paragraph>
            We take pride in finding a way to assist you with your employment issues and will look at the best way that this can be funded so that you know that you are receiving a cost-effective service.
          </Paragraph>
          <Paragraph>
            At Anthony Robinson Solicitors we have the experience and expertise to give you the reassurance that your employment concerns are in safe hands.  We provide a dedicated personal service and are approachable and friendly.
          </Paragraph>
          <Paragraph>
            We always seek to ensure that all of our clients feel that they have found a trusted adviser that they can rely on to act in their best interests.
          </Paragraph>
          <Paragraph className="text-xl">
            Have a look through some typical queries we can help with <Link className="hover:text-ar-b-grey font-extrabold" to={"/employees/key-issues"}>here</Link>
          </Paragraph>
          <Paragraph className="text-xl">
            Take a look at some of the services we offer <Link className="hover:text-ar-b-grey font-extrabold" to={"/employees/services"}>here</Link>
          </Paragraph>
          <FinalParagraph>
            Our legal services cover the areas of Manchester, Altrincham, Warrington, Stockport, Wilmslow, Knutsford, Cheshire.
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>
      
  )
}

export default Employees

export const Head = () => <Seo title={title} />
