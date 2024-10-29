import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const EmployersServices = () => {

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
                                  Employment law advisors for employers
                                  As employment law advisors, we provide a comprehensive range of services to ensure that your organisation is equipped to deal with all employment issues that may arise. The services include:

                                  Drafting contracts of employment and contracts for consultants and contractors
                                  Preparing staff handbooks including:
                                  equal opportunity policies
                                  flexible working policy
                                  attendance policy
                                  data protection
                                  employee use of social media
                                  whistleblowing policy
                                  Drafting restrictive covenants to protect your business from unlawful competition from your departing employees
                                  Advising upon recruitment processes
                                  Advising upon data protection and confidentiality
                                  Advising and assisting with redundancy or restructuring exercises, including preparation of all relevant documentation
                                  Advising and assisting with managing sickness absence and underperformance, including preparation of all relevant documentation
                                  Advising and assisting with disciplinary proceedings, for example to deal with conduct or capability issues, including preparation of all relevant documentation
                                  Advising and assisting with issues surrounding discrimination, including preparation of all relevant documentation
                                  Advising upon employment issues arising if you acquire a business or are involved in a merger (TUPE)
                                  Advising about pay and benefits
                                  Conducting disciplinary hearings and appeal hearings
                                  Acting on your behalf in Employment Tribunal claims
                                  Acting on your behalf in High Court proceedings, for example to restrain a former employee dealing with your clients
                                  Our work as employment law advisors covers all aspects of employment law – please call 0161 929 1921 or contact us for further information and an no obligation chat.

                                  Our legal services generally cover the Manchester, Altrincham, Stockport, Wilmslow, Knutsford, Warrington and Cheshire areas.
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

export default EmployersServices

export const Head = () => <SEO />
