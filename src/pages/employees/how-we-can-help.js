import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const Employees = () => {

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
                                  When you think about having to get help from an employment lawyer does this only add to your worries?

                                  At Anthony Robinson Solicitors, we understand the anxiety that can be caused by difficulties at work and we want to help relieve this as much as possible.  We are here to offer you support whilst ensuring that you meet your needs by receiving the best possible legal service from a reliable employment lawyer.

                                  We know that clients want to be made aware of their rights and to be guided as to the best way forward with clear and helpful advice.

                                  Whether you are being treated unfairly, being discriminated against, or are a victim of bullying you can be reassured that you have an employment lawyer who will do their utmost to fight your corner and to try to find a solution to your difficulties.

                                  If your employment is reaching its end we are experienced in negotiating termination packages or if necessary representing clients in proceedings in the Employment Tribunal or the High Court.

                                  We take pride in finding a way to assist you with your employment issues and will look at the best way that this can be funded so that you know that you are receiving a cost-effective service.

                                  At Anthony Robinson Solicitors we have the experience and expertise to give you the reassurance that your employment concerns are in safe hands.  We provide a dedicated personal service and are approachable and friendly.

                                  We always seek to ensure that all of our clients feel that they have found a trusted adviser that they can rely on to act in their best interests.

                                  For further information please do not hesitate to call us on 0161 929 1921 or contact us here for a free no-obligation chat. We’d be delighted to be of assistance.

                                  Our legal services cover the areas of Manchester, Altrincham, Warrington, Stockport, Wilmslow, Knutsford, Cheshire.
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

export default Employees

export const Head = () => <SEO />
