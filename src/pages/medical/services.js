import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const MedicalServices = () => {

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
                                  We provide a comprehensive range of services to ensure that if you encounter difficulties we are here to be of help. Our services include:

                                  Acting on your behalf in GMC proceedings, including IOP Hearings, FTP hearings
                                  Assisting with applications for inclusion on the specialist register
                                  Advising upon the terms and conditions of your employment
                                  Acting on your behalf in Employment Tribunal or High Court proceedings including:Claims for unfair dismissal, including constructive dismissal
                                  Claims for unlawful deductions from wages
                                  Breach of contract claims
                                  Claims for discrimination, whether it be on the grounds of race, sex, disability, sexual orientation, age or religion or belief
                                  Equal pay claims
                                  Whistleblowing claims
                                  Advising upon the terms and effect of Compromise Agreements
                                  Representation in disciplinary hearings and appeal hearings

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

export default MedicalServices

export const Head = () => <SEO />
