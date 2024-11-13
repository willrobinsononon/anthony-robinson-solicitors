import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {Bold, List, ListItem} from "../../components/text"

const title="Services for Employees"

const EmployeesServices = () => {

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
          <Bold>
            We provide employment law advice through a comprehensive range of services to ensure that if you encounter difficulties at work we are here to be of help whatever the issue. Our employment law advice includes:
          </Bold>
          <List>
            <ListItem>Advising upon the terms and conditions of your employment</ListItem>
            <ListItem>Negotiating terms, eg directors’ service contracts, consultancy contracts</ListItem>
            <ListItem>Negotiating severance packages</ListItem>
            <ListItem>Advising upon the terms and effect of Compromise Agreements</ListItem>
            <ListItem>Acting on your behalf in Employment Tribunal proceedings including:</ListItem>
            <ListItem>Claims for unfair dismissal, including constructive dismissalt</ListItem>
            <ListItem>Claims for unlawful deductions from wages</ListItem>
            <ListItem>Breach of contract claims</ListItem>
            <ListItem>Claims for discrimination, whether it be on the grounds of race, sex, disability, sexual orientation, age or religion or belief</ListItem>
            <ListItem>Equal pay claims</ListItem>
            <ListItem>Whistleblowing claims</ListItem>
            <ListItem>Advising and assisting with accusations by former employer concerning alleged breach of restrictive covenants (eg non-competition, non-solicitation of customers and clients)</ListItem>
            <ListItem>Conducting claims relating to negligent references</ListItem>
            <ListItem>Representation in disciplinary hearings and appeal hearings</ListItem>
            <ListItem>Advising upon the terms and conditions of your employment</ListItem>
          </List>
        </InnerPageSection>
      </InnerPage>
    </Layout>      
  )
}

export default EmployeesServices

export const Head = () => <Seo title={title}/>
