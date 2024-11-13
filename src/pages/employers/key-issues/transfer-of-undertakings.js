import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../../components/inner-page"
import InnerPageSection from "../../../components/inner-page-section"
import {LargeText, Paragraph, FinalParagraph,} from "../../../components/text"

const title="Transfer of Undertakings (TUPE)" 

const TransferOfUndertakings = () => {

  return (

    <Layout>
      <InnerPage title={title} sidebar={true} testimonials={true} genericContact={true} image={
        <StaticImage 
          alt="" 
          src="../../../images/title2.jpg"
          className="min-w-full [gridArea:1/1] z-0"
          imgClassName="brightness-50"
          layout="fullWidth"
        />}
      >
        <InnerPageSection title={false}>
          <LargeText>
            If you decide to take over another business or changing a contractor providing services you need to be aware of Transfer of Undertakings legislation.
          </LargeText>
          <Paragraph>
            Employers have to tread extremely carefully when dealing with the Transfer of Undertakings (Protection of Employment) Regulations 2006 (“TUPE”) which apply in such circumstances. Getting it wrong can be very expensive.
          </Paragraph>
          <Paragraph>
            For example if there is a failure to carry out the duty to inform and consult with the affected employees then the businesses can be liable to pay compensation of up to 13 week’s uncapped pay!
          </Paragraph>
          <Paragraph>
            Then there is a high degree of protection for transferring employees, meaning that dismissal for a reason connected with the transfer will be automatically unfair unless it is for an economic, technological or organisational reason entailing changes in the workforce (an “ETO reason”), with limitations upon when this reason will apply.
          </Paragraph>
          <Paragraph>
            Businesses often face issues as to the terms and conditions of the transferring employees and may wish to consider altering these to align them with the workforce already in place, for example if the rates of pay of the incoming staff are higher. However such changes will be unlawful unless they are unconnected to the transfer or for an ETO reason, so again employers must beware taking such action and should never do so without taking legal advice.
          </Paragraph>
          <FinalParagraph>
            If you need expert advice and assistance with TUPE issues <span className="font-bold">we are here to help.</span>
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>
  )
}

export default TransferOfUndertakings

export const Head = () => <Seo title={title}/>
