import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../../components/inner-page"
import InnerPageSection from "../../../components/inner-page-section"
import {Bold, LargeText, Paragraph, ParagraphGap, List, ListItem} from "../../../components/text"

const title="Disciplinary Procedures"

const DisciplinaryProcedures = () => {

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
              There are times when employers have concerns or issues regarding an employee’s work. 
              It is important for employers to follow due process when managing a disciplinary procedure.
            </LargeText>
            <Paragraph>
              In order to do this there should be a written disciplinary procedure in place which is accessible to all employees. 
              This should clearly outline what type of behaviour and performance could lead to disciplinary action, the action the employer is likely to take
                and it should confirm that there will be an opportunity for the employee to provide an explanation.
            </Paragraph>
            <ParagraphGap>
              Once the disciplinary procedure has been clearly defined, the employer is able to follow a 
              pre-defined structure which will ensure that the disciplinary procedure will be handled correctly and fairly for both parties.
            </ParagraphGap>
            <LargeText>
              As employment lawyers, we have the experience and the expertise needed to help both employers and employees.
            </LargeText>
            <Bold>
              So whether you are an employer requiring assistance with:
            </Bold> 
            <List>
              <ListItem>drawing up a disciplinary procedure as a standalone policy or as part of a company handbook</ListItem>
              <ListItem>implementing the procedure and following it fairly</ListItem>
              <ListItem>helping with an appeal that by the employee</ListItem>
            </List>
            <Bold>
              or an employee requiring assistance with:
            </Bold>
            <List>
              <ListItem>preparing for a disciplinary hearing</ListItem>
              <ListItem>exercising your right of appeal against disciplinary action</ListItem>
              <ListItem>instituting legal action for unfair dismissal</ListItem>
            </List>
            <Bold className="text-xl" margin="">
              we can help.
            </Bold>
          </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default DisciplinaryProcedures

export const Head = () => <Seo title={title}/>
