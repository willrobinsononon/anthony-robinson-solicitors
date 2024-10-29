import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const EmployeesServices = () => {

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
                                  Employment law advice for employees
                                  We provide employment law advice through a comprehensive range of services to ensure that if you encounter difficulties at work we are here to be of help whatever the issue. Our employment law advice includes:

                                  Advising upon the terms and conditions of your employment
                                  Negotiating terms, eg directors’ service contracts, consultancy contracts
                                  Negotiating severance packages
                                  Advising upon the terms and effect of Compromise Agreements
                                  Acting on your behalf in Employment Tribunal proceedings including:
                                  Claims for unfair dismissal, including constructive dismissal
                                  Claims for unlawful deductions from wages
                                  Breach of contract claims.
                                  Claims for discrimination, whether it be on the grounds of race, sex, disability, sexual orientation, age or religion or belief.
                                  Equal pay claims.
                                  Whistleblowing claims.
                                  Advising and assisting with accusations by former employer concerning alleged breach of restrictive covenants (eg non-competition, non-solicitation of customers and clients).
                                  Conducting claims relating to negligent references.
                                  Representation in disciplinary hearings and appeal hearings.
                                  We are always happy to discuss any aspect of employment law advice as it relates to employees or employers – so why not call 0161 929 1921 or contact us today for further information and a no obligation chat.

                                  Our legal services cover the areas of Manchester, Altrincham, Stockport, Wilmslow, Knutsford, Warrington and Cheshire.
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

export default EmployeesServices

export const Head = () => <SEO />
