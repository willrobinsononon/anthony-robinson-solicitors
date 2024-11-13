import * as React from "react"
import Title from "../components/title"
import Sidebar from "../components/sidebar"
import InnerPageSection from "../components/inner-page-section"
import { Link } from "gatsby"

const InnerPage = ({title, sidebar, testimonials, image, children, genericContact}) => {

  return (
    <>
      <Title title={title} image={image}/>
      <div className="my-5 lg:my-16 px-4 flex">
          <div className="font-sans max-w-7xl m-auto px-5">

            {!sidebar && 
              <>
                {children}
                {genericContact &&
                  <InnerPageSection title={false}>
                    <div className="mt-6 lg:mt-16 text-xl lg:text-2xl font-bold">
                      Please do not hesitate to <Link to="/contact"><div className="bg-ar-orange hover:bg-ar-orange-hi hover:text-black rounded-xl px-3 inline-block font-bold">Contact Us</div></Link> for further information.
                    </div>
                  </InnerPageSection>
                }
              </>
            }

            {sidebar &&
              <div className="flex flex-col sm:flex-row gap-20">
                <div className="basis-2/3">
                    {children}
                    {genericContact &&
                      <InnerPageSection title={false}>
                        <div className="mt-6 lg:mt-16 text-xl lg:text-2xl font-bold">
                          Please do not hesitate to <Link to="/contact"><div className="bg-ar-orange hover:bg-ar-orange-hi hover:text-black rounded-xl px-3 inline-block font-bold">Contact Us</div></Link> for further information.
                        </div>
                      </InnerPageSection>
                    }
                    
                </div>
                <div className="basis-1/3">
                  <Sidebar testimonials={testimonials} />
                </div> 
              </div>
            }
            
          </div>
      </div>
    </>
      
  )
}

export default InnerPage
