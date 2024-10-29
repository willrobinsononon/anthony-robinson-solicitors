import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const DefenseCosts = () => {

  return (
    <>
      <Layout>
        <Title title="Title" image={
          <StaticImage 
            alt="" 
            src="../../images/title1.jpg"
            className="min-w-full [gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />} 
        />
        <div className="my-5 lg:my-16 px-5 sm:px-12 max-w-7xl m-auto flex">
            <div className="font-sans mx-5 sm:mx-12">
                <div className="flex gap-5">
                    <div className="basis-2/3">
                        <div>
                            <div className="py-5 lg:py-10 px-5">
                                <h2 className="font-extrabold text-xl lg:text-3xl text-ar-blue">Title</h2>
                            </div>
                            <div className="p-5 text-ar-blue">
                                <p className="mb-2 text-md">
                                  Employers: Costs of defending an unfair/wrongful dismissal claim
                                  At Anthony Robinson Solicitors we always seek to provide a high quality service whilst giving excellent value to our clients.

                                  Our primary objective is to secure the best possible outcome for you as efficiently and cost-effectively as possible.

                                  The costs for advice and representation for claims brought by an employee for unfair dismissal or wrongful dismissal before the Employment Tribunal are set out below but can vary depending upon the complexity of the case and the stage reached.

                                  Category of case	Likely ARS costs (ex VAT)
                                  Relatively straightforward	 £2,500 – £7,500
                                  Medium Complexity	£7,500 – £12,500
                                  High Complexity	£12,500 – £25,000
                                  Factors that affect the complexity of the case and the likely costs:

                                  • The extent to which the factual history may be convoluted
                                  • The number of witnesses
                                  • The extent of documentation
                                  • The number of days that will be required to hear the case
                                  • If there are additional complicating factors, such as whistleblowing
                                  • If there are allegations of discrimination linked to the dismissal
                                  • A new or complex issue of law
                                  • The extent of loss claimed, where this is significant, or complex areas of loss such as loss of long-term incentives or pension
                                  • If it is necessary to deal with applications to the tribunal, such as an application by the Claimant to amend the claim or preliminary issues such as whether the claim was brought in time
                                  • Defending claims brought by litigants in person
                                  • Dealing with matters where the opponent deals with the case inefficiently or unreasonably

                                  Other costs related to the matter that may be payable

                                  • Barristers’ fees. These will be payable if the case proceeds to a hearing and range from in the region of £500 to £1,500 plus VAT per day for attending a Tribunal Hearing, together with a preparation fee (a “brief fee”) ranging from £500 to £1,500 plus VAT for a one-day Hearing and increasing incrementally by a similar amount for each additional day allocated to the Hearing. The range of fees per day and for preparation will depend upon the seniority of counsel instructed.

                                  Typical timescales

                                  The time taken for the case to conclude can depend upon many factors and in particular whether the case is resolved through reaching a settlement or whether a full hearing is necessary. A claim may be dealt with in a matter of weeks through settlement or it may take in the region of six to twelve months to conclude if the case proceeds to a full hearing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
      </Layout>
      
    </>
      
  )
}

export default DefenseCosts

export const Head = () => <SEO />
