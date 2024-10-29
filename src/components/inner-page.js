import * as React from "react"
import Title from "../components/title"
import Sidebar from "../components/sidebar"

const InnerPage = ({title, sidebar, testimonials, image, children}) => {

  return (
    <>
      <Title title={title} image={image}/>
      <div className="my-5 lg:my-16 px-4 flex">
          <div className="font-sans max-w-7xl m-auto px-5">

            {!sidebar && children}

            {sidebar &&
              <div className="flex flex-col sm:flex-row gap-20">
                <div className="basis-2/3">
                    {children}
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
