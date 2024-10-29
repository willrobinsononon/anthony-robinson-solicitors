import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const MedicalKeyIssues = () => {

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
                                Common issues that may apply to you that we deal with on a regular basis:

                              Have the GMC initiated proceedings against you?
                              Have you been invited to an IOP Hearing?
                              Has your application for inclusion on the specialist register been rejected?
                              Are you encountering difficulties with your Hospital Trust or PCT?
                              Do you believe you may be suffering from some form of discrimination?
                              Have you been made a scapegoat for a procedure with a tragic outcome?
                              Is there an issue surrounding your pay or conditions?
                              Have you been contingently removed from the PCT Performers’ List?
                              Does your GP surgery need advice upon employment issues?
                              Is there a problem with your partnership agreement?

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

export default MedicalKeyIssues

export const Head = () => <SEO />
