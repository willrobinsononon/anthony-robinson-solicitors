import * as React from "react"

const InnerPageSection = ({className, title, children}) => {

  return (
    <div className={`text-ar-blue text-lg ${className}`}>
        {title &&
          <h2 className="font-extrabold text-2xl lg:text-3xl mb-6 lg:mb-10">{title}</h2>
        }
        {children}
    </div>
  )
}

export default InnerPageSection