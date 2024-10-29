import * as React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Title from "../../../components/title"
import Sidebar from "../../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const EmploymentContracts = () => {

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
                                  Have you got employment contracts in place for all your staff? If not it would be a good idea to do something about it!

                                  First and foremost it is a requirement that all employees are provided with an employment contract or statement of terms and conditions within two months of the commencement of employment. Failure to comply with this can lead to an employee being awarded an additional two or four weeks’ pay if they are successful in a claim in the Employment Tribunal.

                                  A contract of employment can also play a vital part in the protection of your business. An employee with access to confidential information or who has close contacts with customers and contacts can be prevented from leaving and taking away clients provided that the restriction is drawn no wider than reasonably necessary to protect the business.

                                  Employment contracts will set out many aspects of the employment relationship such as pay, hours, holiday entitlement and notice requirements. The contract terms will help to ensure that your employees know where they stand.

                                  There are many other benefits gained from having written employment contracts. For instance, did you know that if an employee owes you money you are unable to deduct this from a payment of wages without a contractual clause allowing this?

                                  If you need expert advice and assistance with drafting contracts for your business or organisation, please contact Anthony Robinson on 0161 929 1921 or click here
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

export default EmploymentContracts

export const Head = () => <SEO />
