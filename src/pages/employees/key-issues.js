import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {Bold, List, ListItem} from "../../components/text"

const title="Employees - Key Issues"

const EmployeesKeyIssues = () => {

  return (

    <Layout>
      <InnerPage title={title} sidebar={true} testimonials={true} genericContact={true} image={
        <StaticImage 
          alt="" 
          src="../../images/title3.jpg"
          className="min-w-full [gridArea:1/1] z-0"
          imgClassName="brightness-50"
          layout="fullWidth"
        />}
      >
        <InnerPageSection title={false}>
          <Bold>
          Here are some of the common questions we deal with on a regular basis:
          </Bold>
          <List>
            <ListItem>Do I have a claim for unfair dismissal?</ListItem>
            <ListItem>What do I do if my employer is setting unreasonable targets and then threatening to dismiss me?</ListItem>
            <ListItem>What holidays am I entitled to when returning after illness?</ListItem>
            <ListItem>What should I do if I feel that I am being unfairly discriminated against?</ListItem>
            <ListItem>What reasonable adjustments does my employer have to make to allow for my disability?</ListItem>
            <ListItem>What are my rights after maternity leave?</ListItem>
            <ListItem>What do I need to know before entering into a compromise agreement?</ListItem>
            <ListItem>What do I do about my former employer threatening me for being in competition?</ListItem>
            <ListItem>Do I have a whistleblowing claim?</ListItem>
            <ListItem>Can I do anything about a misleading and damaging reference?</ListItem>
          </List>
          <Bold>
            If you need help answering these and other questions, we’d be delighted to help and provide detailed advice on outcomes as they arise.
          </Bold>
        </InnerPageSection>
      </InnerPage>
    </Layout>

  )
}

export default EmployeesKeyIssues

export const Head = () => <Seo title={title}/>
