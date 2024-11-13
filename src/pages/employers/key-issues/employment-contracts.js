import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../../components/inner-page"
import InnerPageSection from "../../../components/inner-page-section"
import {LargeText, Paragraph, FinalParagraph,} from "../../../components/text"

const title="Employment Contracts" 

const EmploymentContracts = () => {

  return (

    <Layout>
      <InnerPage title={title} sidebar={true} testimonials={true} genericContact={true} image={
        <StaticImage 
          alt="" 
          src="../../../images/title3.jpg"
          className="min-w-full [gridArea:1/1] z-0"
          imgClassName="brightness-50"
          layout="fullWidth"
        />}
      >
        <InnerPageSection title={false}>
          <LargeText>
            Have you got employment contracts in place for all your staff? If not it would be a good idea to do something about it!
          </LargeText>
          <Paragraph>
            First and foremost it is a requirement that all employees are provided with an employment contract or statement of terms and conditions within two months of the commencement of employment. Failure to comply with this can lead to an employee being awarded an additional two or four weeks’ pay if they are successful in a claim in the Employment Tribunal.
          </Paragraph>
          <Paragraph>
            A contract of employment can also play a vital part in the protection of your business. An employee with access to confidential information or who has close contacts with customers and contacts can be prevented from leaving and taking away clients provided that the restriction is drawn no wider than reasonably necessary to protect the business.
          </Paragraph>
          <Paragraph>
            Employment contracts will set out many aspects of the employment relationship such as pay, hours, holiday entitlement and notice requirements. The contract terms will help to ensure that your employees know where they stand.
          </Paragraph>
          <Paragraph>
            There are many other benefits gained from having written employment contracts. For instance, did you know that if an employee owes you money you are unable to deduct this from a payment of wages without a contractual clause allowing this?
          </Paragraph>
          <FinalParagraph>
            If you need expert advice and assistance with drafting contracts for your business or organisation <span className="font-bold">we are here to help.</span>
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout> 
  )
}

export default EmploymentContracts

export const Head = () => <Seo title={title}/>
