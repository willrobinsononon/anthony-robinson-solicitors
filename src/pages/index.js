import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby"

const IndexPage = () => {

  return (
    <>
      <Layout>
        <Hero/>
        <div className="my-5 lg:my-16 max-w-6xl m-auto">
          <div className="shadow-sm font-sans mx-5 sm:mx-12">
            <div className="flex bg-ar-o-grey-hi">
              <div className="lg:basis-3/5">
                <div className="text-ar-blue pt-5 lg:pt-10 rounded-tr-md lg:rounded-tr-none rounded-tl-md px-5">
                  <h2 className="font-extrabold text-xl lg:text-3xl mb-5">Why we are different</h2>
                  <p className="mb-2 text-md">
                    At Anthony Robinson Solicitors we are proud to provide a dedicated personal service to all our clients. Our approach is open and friendly, we care about our clients and ensure to offer the best solutions to their problems.</p><p className="mb-2">

                    We strive to understand your individual needs and at the outset will give you clear and sensible advice and assistance. Once we have worked with you to decide the way forward we will do all we can to obtain the result you are looking for.</p><p className="mb-2">

                    We specialise solely in employment law, meaning that if you instruct us you will be represented by a solicitor who is fully up-to-date with the latest developments in this dynamic and complex field of law.

                    Our personable, friendly service ensures that your concerns are always listened to, and you can relax safe in the knowledge you are in good hands.
                  </p>
                </div>
              </div>
              <div className="basis-2/5 hidden lg:block">
                <StaticImage 
                  alt="" 
                  src="../images/smile-meeting.jpg"
                  className="h-full rounded-tr-lg"
                />
              </div>
            </div>
            <div className="bg-ar-o-grey-hi p-5 rounded-b-md text-ar-blue">
              <h2 className="font-bold text-xl lg:text-2xl mb-4">Services include:</h2>
              <div className="flex gap-3 flex-col sm:flex-row">
                <div className="basis-1/3">
                  <h3 className="font-bold text-lg lg:text-xl mb-2">For employers:</h3>
                  <ul>
                    <li className="mb-1">Drafting contracts and policies</li>
                    <li className="mb-1">Advising on restructuring</li>
                    <li className="mb-1">Dealing with Tribunal claims or High Court actions</li>
                  </ul>
                </div>
                <div className="basis-1/3">
                  <h3 className="font-bold text-lg lg:text-xl mb-2">For employees:</h3>
                  <ul>
                    <li className="mb-1">Assistance with discrimination grievances or bullying</li>
                    <li className="mb-1">Bringing proceedings in the Employment Tribunal</li>
                    <li className="mb-1">Negotiating severance packages</li>
                  </ul>
                </div>
                <div className="basis-1/3">
                  <h3 className="font-bold text-lg lg:text-xl mb-2">For medical professionals:</h3>
                  <ul>
                    <li className="mb-1">Dealing with issues with employers and regulatory bodies</li>
                    <li className="mb-1">Assistance with managing employment issues for GPs and others</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      
    </>
      
  )
}

export default IndexPage

export const Head = () => <SEO />
