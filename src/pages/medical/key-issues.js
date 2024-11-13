import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {Bold, List, ListItem} from "../../components/text"

const  title="Medical Professionals - Key Issues"

const MedicalKeyIssues = () => {

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
          <Bold>
            Common issues that may apply to you that we deal with on a regular basis:
          </Bold>
          <List>
            <ListItem>Have the GMC initiated proceedings against you?</ListItem>
            <ListItem>Have you been invited to an IOP Hearing?</ListItem>
            <ListItem>Has your application for inclusion on the specialist register been rejected?</ListItem>
            <ListItem>Are you encountering difficulties with your Hospital Trust or PCT?</ListItem>
            <ListItem>Do you believe you may be suffering from some form of discrimination?</ListItem>
            <ListItem>Have you been made a scapegoat for a procedure with a tragic outcome?</ListItem>
            <ListItem>Is there an issue surrounding your pay or conditions?</ListItem>
            <ListItem>Have you been contingently removed from the PCT Performers’ List?</ListItem>
            <ListItem>Does your GP surgery need advice upon employment issues?</ListItem>
            <ListItem>Is there a problem with your partnership agreement?</ListItem>
          </List>
</InnerPageSection>
</InnerPage>
</Layout>
      
  )
}

export default MedicalKeyIssues

export const Head = () => <Seo title={title}/>
