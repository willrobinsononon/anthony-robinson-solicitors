import * as React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Title from "../../../components/title"
import Sidebar from "../../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const Redundancy = () => {

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
                                  If you are involved in restructuring your organisation or if there is a reduction in the need for certain kinds of work to be undertaken, do you know how to deal with a redundancy situation safely?

                                  Redundancy is one of the fair reasons for dismissal. This is where there is a reduced requirement for employees to carry out work of a particular kind or where the need for work has ceased or diminished at a particular workplace.

                                  It is vital that the employer carries out a fair procedure to avoid the risk of a tribunal claim. This will include:

                                  • identifying the employees at risk and advising them at an early stage;
                                  • considering the “pool for selection” from which the employees will be chosen to be made redundant;
                                  • drafting fair and objective selection criteria;
                                  • applying the chosen criteria fairly and objectively when identifying the employees that the employer proposes to make redundant;
                                  • consulting with the employees provisionally selected for redundancy;
                                  • considering whether there are any suitable alternative positions available to offer to the employees concerned;
                                  • ensuring that the employees to be dismissed are paid the sums to which they are entitled.

                                  There is also a requirement for collective consultation and notification of the Secretary of State where 20 or more employees are being made redundant within a 90-day period.

                                  If you need expert advice and assistance upon issues arising out of redundancy situations please contact Anthony Robinson or phone  0161 929 1921.
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

export default Redundancy

export const Head = () => <SEO />
