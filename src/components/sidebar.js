import * as React from "react"
import ContactForm from "./contact-form"
import Testimonials from "./testimonials"

const Sidebar = () => {

  return (
    <div className="flex flex-col gap-20">
        <ContactForm/>
        <Testimonials/>
    </div>
  )
}

export default Sidebar