import * as React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Title from "../../../components/title"
import Sidebar from "../../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"
import { Link } from "gatsby"

const DisciplinaryProcedures = () => {

  return (
    <>
      <Layout>
        <Title title="Disciplinary Procedures" image={
          <StaticImage 
            alt="" 
            src="../../../images/title1.jpg"
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
                            <div className="px-5 text-ar-blue text-lg">
                                <p className="mb-5 lg:mb-10 text-xl lg:text-2xl font-bold">
                                  There are times when employers have concerns or issues regarding an employee’s work. 
                                  It is important for employers to follow due process when managing a disciplinary procedure.
                                </p><p className="mb-5 ">
                                  In order to do this there should be a written disciplinary procedure in place which is accessible to all employees. 
                                  This should clearly outline what type of behaviour and performance could lead to disciplinary action, the action the employer is likely to take
                                   and it should confirm that there will be an opportunity for the employee to provide an explanation.
                                </p><p className="mb-5 lg:mb-10">
                                  Once the disciplinary procedure has been clearly defined, the employer is able to follow a 
                                  pre-defined structure which will ensure that the disciplinary procedure will be handled correctly and fairly for both parties.
                                </p><p className="mb-5 lg:mb-10 text-xl lg:text-2xl font-bold">
                                  As employment lawyers, we have the experience and the expertise needed to help both employers and employees.
                                </p><p className="font-bold">
                                  So whether you are an employer requiring assistance with:
                                </p><p className="mb-5">  
                                  <ul className="list-disc pl-8">
                                    <li className="py-1">drawing up a disciplinary procedure as a standalone policy or as part of a company handbook</li>
                                    <li className="py-1">implementing the procedure and following it fairly</li>
                                    <li className="py-1">helping with an appeal that by the employee</li>
                                  </ul>
                                </p><p className="font-bold ">
                                  or an employee requiring assistance with:
                                </p><p className="mb-5">
                                  <ul className="list-disc pl-8">
                                    <li className="py-1">preparing for a disciplinary hearing</li>
                                    <li className="py-1">exercising your right of appeal against disciplinary action</li>
                                    <li className="py-1">instituting legal action for unfair dismissal</li>
                                  </ul>
                                </p><p className="mb-5 font-bold">
                                  we can help.
                                </p><p className="mb-5 ">
                                  We focus exclusively upon employment law, meaning that you can be sure that you will receive a high-quality personal service that can deal with all aspects of this ever-changing area.
                                </p><p className="mb-5 ">
                                  Please do not hesitate to <Link to="/contact"><div className="bg-ar-orange hover:bg-ar-orange-hi hover:text-black rounded-xl px-3 inline-block">Contact Us</div></Link>  if you have any queries regarding employment law.
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

export default DisciplinaryProcedures

export const Head = () => <SEO />
