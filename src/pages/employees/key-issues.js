import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/title"
import Sidebar from "../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const EmployeesKeyIssues = () => {

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
                                Key issues
                                Here are some of the common questions we deal with on a regular basis:

                                Do I have a claim for unfair dismissal?
                                What do I do if my employer is setting unreasonable targets and then threatening to dismiss me?
                                What holidays am I entitled to when returning after illness?
                                What should I do if I feel that I am being unfairly discriminated against?
                                What reasonable adjustments does my employer have to make to allow for my disability?
                                What are my rights after maternity leave?
                                What do I need to know before entering into a compromise agreement?
                                What do I do about my former employer threatening me for being in competition?
                                Do I have a whistleblowing claim?
                                Can I do anything about a misleading and damaging reference?
                                If you need help answering these and other questions, we’d be delighted to help and provide detailed advice on outcomes as they arise. Contact us today.
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

export default EmployeesKeyIssues

export const Head = () => <SEO />
