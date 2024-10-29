import * as React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Title from "../../../components/title"
import Sidebar from "../../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const SicknessAbsence = () => {

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
                                    At Anthony Robinson Solicitors we are proud to provide a dedicated personal service to all our clients. Our approach is open and friendly, we care about our clients and ensure to offer the best solutions to their problems.</p><p className="mb-2">

                                    We strive to understand your individual needs and at the outset will give you clear and sensible advice and assistance. Once we have worked with you to decide the way forward we will do all we can to obtain the result you are looking for.</p><p className="mb-2">

                                    We specialise solely in employment law, meaning that if you instruct us you will be represented by a solicitor who is fully up-to-date with the latest developments in this dynamic and complex field of law.

                                    Our personable, friendly service ensures that your concerns are always listened to, and you can relax safe in the knowledge you are in good hands.
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

export default SicknessAbsence

export const Head = () => <SEO />
