import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../../components/inner-page"
import InnerPageSection from "../../../components/inner-page-section"
import {Bold, LargeText, Paragraph, FinalParagraph, List, ListItem} from "../../../components/text"

const title="Redundancy"

const Redundancy = () => {

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
            If you are involved in restructuring your organisation or if there is a reduction in the need for certain kinds of work to be undertaken, do you know how to deal with a redundancy situation safely?
          </LargeText>
          <Paragraph>
            Redundancy is one of the fair reasons for dismissal. This is where there is a reduced requirement for employees to carry out work of a particular kind or where the need for work has ceased or diminished at a particular workplace.
          </Paragraph>
          <Bold>
            It is vital that the employer carries out a fair procedure to avoid the risk of a tribunal claim. This will include:
          </Bold>
          <List>
            <ListItem>identifying the employees at risk and advising them at an early stage</ListItem>
            <ListItem>considering the “pool for selection” from which the employees will be chosen to be made redundant</ListItem>
            <ListItem>drafting fair and objective selection criteria</ListItem>
            <ListItem>applying the chosen criteria fairly and objectively when identifying the employees that the employer proposes to make redundant</ListItem>
            <ListItem>consulting with the employees provisionally selected for redundancy</ListItem>
            <ListItem>considering whether there are any suitable alternative positions available to offer to the employees concerned</ListItem>
            <ListItem>ensuring that the employees to be dismissed are paid the sums to which they are entitled</ListItem>
          </List>
          <Paragraph>
            There is also a requirement for collective consultation and notification of the Secretary of State where 20 or more employees are being made redundant within a 90-day period.
          </Paragraph>
          <FinalParagraph>
            If you need expert advice and assistance upon issues arising out of redundancy situations <span className="font-bold">we are here to help.</span>
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>
  )
}

export default Redundancy

export const Head = () => <Seo title={title}/>
