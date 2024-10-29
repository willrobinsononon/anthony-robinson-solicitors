import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const Medical = () => {

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

                                  We are experienced in acting for doctors and professionals when they meet difficulties or face obstacles in their careers, whether with their employers or their regulatory bodies.

                                  We also assist GPs and others with managing employment issues. We will offer you quality advice and assistance and you can trust that we are committed to your cause.


                                  Specialist advice for the Medical Profession
                                  Are you looking for a solicitor who you will not only offer you quality advice and assistance, but who also understands the importance of your career and the issues you face?

                                  At Anthony Robinson Solicitors, we are here to ensure that you receive the best possible legal service to meet your needs whilst being confident that you have a lawyer committed to your cause.

                                  We are experienced in acting for doctors and professionals across a range of issues arising in the workplace and in the context of regulation by professional bodies.

                                  We are aware that clients want to be guided as to the best way forward with clear and helpful advice. Whether you face a GMC investigation, need assistance with an application to be placed on the specialist register or at your workplace you are being treated unfairly, being discriminated against or a victim of bullying, you can be reassured that you have an advisor who will do their utmost to fight your corner and to try to find a solution to your difficulties.

                                  At Anthony Robinson Solicitors we have the experience and expertise to give you the reassurance that your career concerns are in safe hands. We provide a dedicated personal service and are approachable and friendly. We always seek to ensure that all of our clients feel that they have found a trusted adviser that they can rely on to act in their best interests.

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

export default Medical

export const Head = () => <SEO />
