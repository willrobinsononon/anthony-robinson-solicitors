import * as React from "react"
import ContactForm from "./contact-form"
import Testimonials from "./testimonials"

const Sidebar = ({testimonials}) => {

  return (
    <div className="flex flex-col gap-20">
        <ContactForm/>
        {testimonials &&
          <Testimonials/>
        }
    </div>
  )
}

export default Sidebar