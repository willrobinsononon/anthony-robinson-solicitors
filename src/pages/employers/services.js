import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {Bold, LargeText, Paragraph, FinalParagraph, List, ListItem} from "../../components/text"

const title="Services For Employers"

const EmployersServices = () => {

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
            As employment law advisors, we provide a comprehensive range of services to ensure that your organisation is equipped to deal with all employment issues that may arise.
          </LargeText>
          <Bold>
            These services include:
          </Bold>
          <List>
            <ListItem>Drafting contracts of employment and contracts for consultants and contractors</ListItem>
            <ListItem>
              <Paragraph margin="mb-1 ">
                Preparing staff handbooks including:
              </Paragraph>
              <List margin="mb-0">
                <ListItem>equal opportunity policies</ListItem>
                <ListItem>flexible working policy</ListItem>
                <ListItem>attendance policy</ListItem>
                <ListItem>data protection</ListItem>
                <ListItem>employee use of social media</ListItem>
                <ListItem>whistleblowing policy</ListItem>
              </List>
            </ListItem>
            <ListItem>Drafting restrictive covenants to protect your business from unlawful competition from your departing employees</ListItem>
            <ListItem>Advising upon recruitment processes</ListItem>
            <ListItem>Advising upon data protection and confidentiality</ListItem>
            <ListItem>Advising and assisting with redundancy or restructuring exercises, including preparation of all relevant documentation</ListItem>
            <ListItem>Advising and assisting with managing sickness absence and underperformance, including preparation of all relevant documentation</ListItem>
            <ListItem>Advising and assisting with disciplinary proceedings, for example to deal with conduct or capability issues, including preparation of all relevant documentation</ListItem>
            <ListItem>Advising and assisting with issues surrounding discrimination, including preparation of all relevant documentation</ListItem>
            <ListItem>Advising upon employment issues arising if you acquire a business or are involved in a merger (TUPE)</ListItem>
            <ListItem>Advising about pay and benefits</ListItem>
            <ListItem>Conducting disciplinary hearings and appeal hearings</ListItem>
            <ListItem>Acting on your behalf in Employment Tribunal claims</ListItem>
            <ListItem>Acting on your behalf in High Court proceedings, for example to restrain a former employee dealing with your clients</ListItem>
          </List>
          <FinalParagraph>
            Our legal services cover the areas of Manchester, Altrincham, Stockport, Wilmslow, Knutsford, Warrington and Cheshire.
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>      
  )
}

export default EmployersServices

export const Head = () => <Seo title={title}/>
