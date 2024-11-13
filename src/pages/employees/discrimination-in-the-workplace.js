import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {Bold, LargeText, Paragraph, FinalParagraph, List, ListItem} from "../../components/text"

const title="Discrimination in the Workplace"

const DiscriminationWorkplace = () => {

  return (

    <Layout>
      <InnerPage title={title} sidebar={true} testimonials={true} genericContact={true} image={
        <StaticImage 
          alt="" 
          src="../../images/title1.jpg"
          className="min-w-full [gridArea:1/1] z-0"
          imgClassName="brightness-50"
          layout="fullWidth"
        />}
      >
        <InnerPageSection title={false}>
          <LargeText>
            Are you or do you know someone who has been a victim of discrimination in the workplace?
          </LargeText>
          <Bold margin="mb-5">
            This may be based on age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, or sexual orientation.
          </Bold>
          <Bold margin="mb-2">
            All employees have a right to be treated fairly at work, the law protects you against discrimination in the workplace including issues regarding;
          </Bold>
          <List>
            <ListItem>Employment terms and conditions</ListItem>
            <ListItem>Pay and benefits</ListItem>
            <ListItem>Promotion and transfer opportunities</ListItem>
            <ListItem>Training</ListItem>
            <ListItem>Recruitment</ListItem>
            <ListItem>Dismissal</ListItem>
            <ListItem>Redundancy</ListItem>
            <ListItem>Less favourable treatment</ListItem>
          </List>
          <Paragraph>
            We have gained a wealth of experience and established an excellent reputation with regard to providing an approachable and efficient service to those who have become a victim of discrimination in the workplace.
          </Paragraph>
          <Bold>
            Do you know what action you can take?
          </Bold>
          <Paragraph>
            Depending on the circumstances, there are a number of steps individuals can take if they feel they are being discriminated against. The Equality Act 2010 simplified previous laws on discrimination and created a single piece of clear and simple legislation.
          </Paragraph>
          <Bold>
            Do you know who can be held liable?
          </Bold>
          <Paragraph>
            If another employee acts in a way that is discriminatory in the course of their employment, the employer can be held liable.
          </Paragraph>
          <Bold>
            What proof is required to demonstrate discrimination in the workplace has occurred?
          </Bold>
          <Paragraph>
            If the individual making the claim can provide adequate proof to establish a “prima facie” case of discrimination, the burden of proof will shift to the employer who will need to prove that the action complained of was not discriminatory.
          </Paragraph>
          <Bold>
            Do you know how to raise a grievance?
          </Bold>
          <Paragraph>
            If you have tried to resolve the matter informally with no success you may wish to  raise a formal grievance and we can advise on how to approach this in the best way. Any compensation awarded can be reduced if the statutory grievance procedure has not been followed.
          </Paragraph>
          <Bold>
            Compensation
          </Bold>
          <Paragraph>
            If the tribunal finds in favour of the individual there is no set limit to the compensation a tribunal can award for discrimination. As well as compensation for losses the tribunal will make an award for injury to feelings.
          </Paragraph>
          <Bold>
            Employers
          </Bold>
          <Paragraph>
            Employers have a duty to comply with the law on discrimination and should do all possible to prevent discrimination in the workplace. Is your organisation well-equipped to deal with all employment issues that may involve discrimination? We can assist with drawing up policies and procedures and we are well-placed to advise on a course of action to address your particular situation if a case of discrimination has been identified.
          </Paragraph>
          <FinalParagraph>
            Whether you are an employer or an employee, Anthony Robinson Solicitors can guide you through all processes that are relevant to discrimination arising in the workplace.
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>
  )
}

export default DiscriminationWorkplace

export const Head = () => <Seo title={title} />
