import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"
import {Bold, Paragraph, FinalParagraph, List, ListItem} from "../../components/text"

const title="Costs of Bringing an Unfair/Wrongful Dismissal Claim"

const DismissalCosts = () => {

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
          <Paragraph>
            At Anthony Robinson Solicitors we always seek to provide a high quality service whilst giving excellent value to our clients.

            Our primary objective is to secure the best possible outcome for you as efficiently as possible. The costs for advice and representation for bringing an unfair dismissal or wrongful dismissal before the Employment Tribunal are set out below but can vary depending upon the complexity of the case and the stage reached.
          </Paragraph>
          <table class="table-auto mb-5 w-full">
            <thead>
              <tr>
                <th className="pb-1 text-left">Category of case</th>
                <th className="pb-1 text-left">Likely ARS costs (ex VAT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pb-1">Relatively straightforward</td>
                <td className="pb-1">£2,500 – £7,500</td>
              </tr>
              <tr>
                <td className="pb-1">Medium Complexity</td>
                <td className="pb-1">£7,500 – £12,500</td>
              </tr>
              <tr>
                <td className="pb-1">High Complexity</td>
                <td className="pb-1">£12,500 – £25,000</td>
              </tr>
            </tbody>
          </table>
          <Bold>
            Factors that affect the complexity of the case and the likely costs:
          </Bold>
          <List>
            <ListItem>The extent to which the factual history may be convoluted</ListItem>
            <ListItem>The number of witnesses</ListItem>
            <ListItem>The extent of documentation</ListItem>
            <ListItem>The number of days that will be required to hear the case</ListItem>
            <ListItem>If there are additional complicating factors, such as whistleblowing</ListItem>
            <ListItem>If there are allegations of discrimination linked to the dismissal</ListItem>
            <ListItem>A new or complex issue of law</ListItem>
            <ListItem>The extent of loss claimed, where this is significant, or complex areas of loss such as loss of long-term incentives or pension</ListItem>
            <ListItem>If it is necessary to deal with applications to the tribunal, such as an application by the Claimant to amend the claim or preliminary issues such as whether the claim was brought in time</ListItem>
            <ListItem>Defending claims brought by litigants in person</ListItem>
            <ListItem>Dealing with matters where the opponent deals with the case inefficiently or unreasonably</ListItem>
          </List>
          <Bold>
            Other costs related to the matter that may be payable
          </Bold>
          <List>
            <ListItem>Barristers’ fees. These will be payable if the case proceeds to a hearing and range from in the region of £500 to £1,500 plus VAT per day for attending a Tribunal Hearing, together with a preparation fee (a “brief fee”) ranging from £500 to £1,500 plus VAT for a one-day Hearing and increasing incrementally by a similar amount for each additional day allocated to the Hearing. The range of fees per day and for preparation will depend upon the seniority of counsel instructed.</ListItem>
          </List>
          <Bold>
              Typical timescales
          </Bold>
          <FinalParagraph>
              The time taken for the case to conclude can depend upon many factors and in particular whether the case is resolved through reaching a settlement or whether a full hearing is necessary. A claim may be dealt with in a matter of weeks through settlement or it may take in the region of six to twelve months to conclude if the case proceeds to a full hearing.
          </FinalParagraph>
        </InnerPageSection>
      </InnerPage>
    </Layout>

  )
}

export default DismissalCosts

export const Head = () => <Seo title={title}/>
