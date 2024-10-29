import * as React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Title from "../../../components/title"
import Sidebar from "../../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const DiscriminationWorkplace = () => {

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
                                  Are you or do you know someone who has been a victim of discrimination in the workplace?

                                  This may be based on age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, or sexual orientation.

                                  All employees have a right to be treated fairly at work, the law protects you against discrimination in the workplace including issues regarding;

                                  Employment terms and conditions
                                  Pay and benefits
                                  Promotion and transfer opportunities
                                  Training
                                  Recruitment
                                  Dismissal
                                  Redundancy
                                  Less favourable treatment
                                  We have gained a wealth of experience and established an excellent reputation with regard to providing an approachable and efficient service to those who have become a victim of discrimination in the workplace.

                                  Do you know what action you can take?

                                  Depending on the circumstances, there are a number of steps individuals can take if they feel they are being discriminated against. The Equality Act 2010 simplified previous laws on discrimination and created a single piece of clear and simple legislation.

                                  Do you know who can be held liable?

                                  If another employee acts in a way that is discriminatory in the course of their employment, the employer can be held liable.

                                  What proof is required to demonstrate discrimination in the workplace has occurred?

                                  If the individual making the claim can provide adequate proof to establish a “prima facie” case of discrimination, the burden of proof will shift to the employer who will need to prove that the action complained of was not discriminatory.

                                  Do you know how to raise a grievance?

                                  If you have tried to resolve the matter informally with no success you may wish to  raise a formal grievance and we can advise on how to approach this in the best way. Any compensation awarded can be reduced if the statutory grievance procedure has not been followed.

                                  Compensation

                                  If the tribunal finds in favour of the individual there is no set limit to the compensation a tribunal can award for discrimination. As well as compensation for losses the tribunal will make an award for injury to feelings.

                                  Employers

                                  Employers have a duty to comply with the law on discrimination and should do all possible to prevent discrimination in the workplace. Is your organisation well-equipped to deal with all employment issues that may involve discrimination? We can assist with drawing up policies and procedures and we are well-placed to advise on a course of action to address your particular situation if a case of discrimination has been identified.

                                  Whether you are an employer or an employee, Anthony Robinson Solicitors can guide you through all processes that are relevant to discrimination arising in the workplace.

                                  Contact us today.
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

export default DiscriminationWorkplace

export const Head = () => <SEO />
