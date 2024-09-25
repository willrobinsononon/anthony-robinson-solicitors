import * as React from "react"

const Title = ({title, image}) => {

  return (
    <div className="grid h-40 sm:h-64">
        {image}
        <div className="z-20 [gridArea:1/1] text-white font-sans px-4">
          <div className="max-w-7xl m-auto px-5">
              <div className="pt-10 sm:pt-20 pb-2 sm:pb-5">
                <div className="mb-5">
                        <h2 className="font-extrabold text-4xl sm:text-5xl text-white">{title}</h2>
                </div>
              </div>
          </div>  
        </div>
    </div>
  )
}

export default Title