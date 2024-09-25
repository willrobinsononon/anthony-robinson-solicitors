import * as React from "react"

const InnerPageSection = ({title, children}) => {

  return (
    <div className="text-ar-blue mb-10 lg:mb-16">
        {title &&
          <h2 className="font-extrabold text-2xl lg:text-3xl mb-6 lg:mb-10">{title}</h2>
        }
        {children}
    </div>
  )
}

export default InnerPageSection