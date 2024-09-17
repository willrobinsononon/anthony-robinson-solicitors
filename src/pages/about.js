import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Sidebar from "../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const About = () => {

  return (
    <>
      <Layout>
        <Title title="About" image={
          <StaticImage 
            alt="" 
            src="../images/title1.jpg"
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
                                <h2 className="font-extrabold text-xl lg:text-3xl text-ar-blue">Anthony Robinson</h2>
                            </div>
                            <div className="p-5 text-ar-blue">
                                <p className="mb-2 text-md">
                                Having been a successful partner in a city-centre firm Anthony Robinson has recently set up Anthony Robinson Solicitors Limited.

                               Anthony has specialised in employment law since 2002, having previously had experience in personal injury and civil litigation. As an employment lawyer, he acts for both employers and employees in both contentious and non-contentious matters and advises on all aspects of employment law.

                                Anthony is also experienced in acting for doctors in relation to all aspects of their careers, including GMC matters and employer issues.

                                Anthony is a Member of the Employment Lawyers Association.

                                Anthony is married with two children. As well as spending time with the family he enjoys music, singing, reading and sports.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="py-5 lg:py-10 px-5">
                                <h2 className="font-extrabold text-xl lg:text-3xl text-ar-blue">Testemonials</h2>
                            </div>
                            <div className="p-5 text-ar-blue">
                                <p className="mb-2 text-md">
                                We are very proud of the work we conduct at Anthony Robinson Solicitors – here are some recent client comments.

                                    “I have had the need to use Anthony’s services in recent times. I have to say that I have been really impressed not just with the legal advice given but also with Anthony’s approach to the situation. He showed empathy and broke the issues down into understandable segments – he didn’t at any time try to blind me with science. Logic and common sense were high on his agenda. A pleasure to deal with Anthony in what was a difficult time for my company.”
                                    Nick Langley
                                    Managing Director, Advance Recruitment


                                    “Anthony provided excellent client care and support throughout our matter. He was personable and brought the matter to conclusion swiftly and with the least fuss possible. We would recommend Anthony for all employment law issues.”
                                    Nicola Ford
                                    Partner, Cooper Ford Solicitors

                                    “I would have no hesitation in recommending Anthony Robinson Solicitors.
                                    From the first moment I made contact I was given honest advice and support in what was a very difficult time. Everything was explained in great detail and queries were always answered very quickly.
                                    I would recommend the service to anyone requiring legal advice on any employment matter.”
                                    Rob Jones, Finance Director

                                    “I was recommended to Anthony by a friend. I found Anthony to be very personable and he explained matters in a relaxed, simple straightforward way. Importantly I felt that Anthony had the subject matter knowledge and I had every confidence in the advice being given by him. All round Anthony provided me with a great service. I have since recommended Anthony to one of my ex work colleagues and I would not hesitate to use his services or recommend him further in the future.”
                                    John Ryan, Project Manager


                                    “Having lost my employment I was advised to contact Anthony Robinson Solicitors. I made one simple phone call and within the hour Mr Robinson called me back. After a thorough consultation Mr Robinson agreed to take on my case. With daily updates via email and phone calls I was never left wondering as to what was happening using words I could understand – no jargon. His advice and guidance was outstanding and unbeatable. The case only lasted 4-5 weeks from start to finish resulting in me winning. I found Anthony to be a very very professional friendly gentleman. Should I ever need a solicitor Anthony is definitely on speed dial”
                                    Neil Mullen
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="py-5 lg:py-10 px-5">
                                <h2 className="font-extrabold text-xl lg:text-3xl text-ar-blue">Complaints Procedure</h2>
                            </div>
                            <div className="p-5 text-ar-blue">
                                <p className="mb-2 text-md">
                                    At Anthony Robinson Solicitors we endeavour to provide a high-quality service and try to ensure that all our clients are pleased with the services received. However, if you are not satisfied with level or quality of service then please raise a complaint as soon as you are able and we will seek to resolve the issue fairly and quickly. We aim to uphold the standards that we set out to achieve and we will look to learn from mistakes made, thereby improving our standards.

                                    Our Complaints Procedure

                                    If you have any complaint, please set out details in writing and send these through to us for the attention of Olivia Robinson. The complaint may be sent by post to our office address 20 Market Street Altrincham WA14 1PF or by email to or@anthonyrobinsonsolicitors.co.uk.
                                    We will write to you acknowledging your complaint within 3 working days of receiving it.
                                    Your complaint will then be investigated and we may correspond with you requesting further information if necessary.
                                    We aim to provide you with an outcome to your complaint within 14 days of the complaint being raised. If the matter is complicated and further time is required we will advise you of that as soon as it becomes apparent that the 14-day timeframe will not be met.
                                    We will send you a detailed written reply to your and this will include our suggestions for resolving the matter. If our service to you is found to be below standard we will discuss ways in which we can make things better or, if appropriate, recompense you in some way.
                                    If you are not satisfied with the response to the complaint we will look to meet with you to try to resolve the matter to the satisfaction of us both. You will be notified in writing of the outcome of any such meeting and the decision of the firm within 7 days of the date of the meeting.  Our general aim is to resolve any formal complaints within 28 days.
                                    Should you not be happy with the outcome of the Complaints Procedure you have a right to refer your complaint to the Legal Ombudsman.
                                    You can contact the Legal Ombudsman by the following means:
                                    Visit: https://www.legalombudsman.org.uk
                                    Call: 0300 555 0333 between 9am to 5pm.
                                    Email: enquiries@legalombudsman.org.uk
                                    Write to The Legal Ombudsman, PO Box 6806, Wolverhampton, WV1 9WJ
                                    Any complaint to the Legal Ombudsman should be brought within six months of our final response to the complaint or within six years of the act or omission about which you are complaining occurring (or if outside of this period, within three years of when you should reasonably have been aware of it).
                                    For further information you may visit the Ombudsman’s website (at the address above).
                                    You also have the right to complain to the Solicitors Regulation Authority if you have concerns about the conduct of Anthony Robinson Solicitors or its staff. Further information is available on the SRA website: https://www.sra.org.uk/consumers/problems/.
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

export default About

export const Head = () => <SEO />
