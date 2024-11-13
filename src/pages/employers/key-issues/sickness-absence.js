import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../../components/inner-page"
import InnerPageSection from "../../../components/inner-page-section"
import {LargeText, Paragraph, FinalParagraph,} from "../../../components/text"

const title="Sickness and Absence"

const SicknessAbsence = () => {

  return (

    <Layout>
      <InnerPage title={title} sidebar={true} testimonials={true} genericContact={true} image={
        <StaticImage 
          alt="" 
          src="../../../images/title1.jpg"
          className="min-w-full [gridArea:1/1] z-0"
          imgClassName="brightness-50"
          layout="fullWidth"
        />}
      >
        <InnerPageSection title={false}>
          <LargeText>
            Do you have problems with sickness and absence?  Do you get frustrated because some employees have too many days off ill, affecting staff morale and the productivity of your business?
          </LargeText>
          <Paragraph>
            This can’t be eliminated – there’ll always be illness and genuine reasons for absence – but you can take steps to minimise the extent of unwarranted absenteeism that occurs.  First and foremost you need a sickness absence policy in place and we can draft this for you or check whether your existing policy is doing all it should.  Having a sound policy will help you deal with absences consistently and effectively and will also place employees on notice as to the standards that you expect.
          </Paragraph>
          <Paragraph>
            We will also advise you as to the best processes to adopt to manage absences in the workplace including return-to-work interviews, identifying underlying causes of regular short-term absence, obtaining medical evidence and making reasonable adjustments to working conditions.  Where the sickness absence is not genuine or where the employee’s return to work is unlikely we will provide clear guidance to ensure you deal with the issue fairly and safely and take all relevant issues into account.
          </Paragraph>
          <Paragraph>
            Adopting fair procedures and dealing with matters openly and reasonably at all stages will not only minimise the risk of an Employment Tribunal claim but also help you establish a loyal and motivated workforce.
          </Paragraph>
          <FinalParagraph>
            If you need expert advice and assistance with sickness absence issues <span className="font-bold">we are here to help.</span>
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>
  )
}

export default SicknessAbsence

export const Head = () => <Seo title={title}/>
