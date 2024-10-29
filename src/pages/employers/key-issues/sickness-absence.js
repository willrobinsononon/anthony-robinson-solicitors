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
                                  Do you have problems with sickness absence?  Do you get frustrated because some employees have too many days off ill, affecting staff morale and the productivity of your business?

                                  This can’t be eliminated – there’ll always be illness and genuine reasons for absence – but you can take steps to minimise the extent of unwarranted absenteeism that occurs.  First and foremost you need a sickness absence policy in place and we can draft this for you or check whether your existing policy is doing all it should.  Having a sound policy will help you deal with absences consistently and effectively and will also place employees on notice as to the standards that you expect.

                                  We will also advise you as to the best processes to adopt to manage absences in the workplace including return-to-work interviews, identifying underlying causes of regular short-term absence, obtaining medical evidence and making reasonable adjustments to working conditions.  Where the sickness absence is not genuine or where the employee’s return to work is unlikely we will provide clear guidance to ensure you deal with the issue fairly and safely and take all relevant issues into account.

                                  Adopting fair procedures and dealing with matters openly and reasonably at all stages will not only minimise the risk of an Employment Tribunal claim but also help you establish a loyal and motivated workforce.

                                  If you need expert advice and assistance with sickness absence issues please contact Anthony Robinson on ….
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
