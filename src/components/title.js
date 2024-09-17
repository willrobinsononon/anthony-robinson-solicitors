import * as React from "react"

const Title = ({title, image}) => {

  return (
    <div className="grid h-40 sm:h-64">
        {image}
        <div className="hero-text-wrapper z-20 [gridArea:1/1] text-white font-sans">
        <div className="max-w-6xl m-auto">
            <div className="pt-10 sm:pt-20 mx-5 sm:mx-12 pb-2 sm:pb-5">
            <div className="mb-5">
                    <h2 className="font-extrabold text-2xl sm:text-4xl text-white">{title}</h2>
            </div>
            </div>
        </div>  
        </div>
    </div>
  )
}

export default Title