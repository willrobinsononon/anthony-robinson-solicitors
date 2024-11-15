import * as React from "react"
import { Link } from "gatsby"

const ContactForm = () => {

  async function submitForm(formData) {
    try {
      const response = await fetch('/',
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          method: 'POST',
          body: new URLSearchParams(
            {
            ...formData, 
            "form-name": "contact"
            }).toString()
        });
      if (response.ok) {
        formSuccess("Form submitted!")
        setFormData(
          {
            name: "",
            email: "",
            phone: "",
            message: "",
          }
        )
      }
      else {
        formFailure("Server error, please reload page and try again")
      }
    }
    catch(e) {
      console.log(e)
      return false
    }
  }

  const [formData, setFormData] = React.useState(
    {
        name: "",
        email: "",
        phone: "",
        message: "",
    }
  )

  const [message, setMessage] = React.useState(
    {
      display: false,
      text: "",
      colorClass: ""
    }
  )

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function formFailure(message) {
    setMessage({
      display: true,
      text: message,
      colorClass: "bg-red-100 border-red-300"
    })
  }

  function formSuccess(message) {
    setMessage({
      display: true,
      text: message,
      colorClass: "bg-green-100 border-green-300"
    })
  }

  function formSubmitted() {
    setMessage({})
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name === "") {
      formFailure("Name field cannot be empty")
      return
    }

    if (formData.email === "") {
      formFailure("Email field cannot be empty")
      return
    }
  
    
    if (formData.message === "") {
      formFailure("Message field cannot be empty")
      return
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(formData.email)) {
      formFailure("Please provide a valid email address")
      return
    }

    submitForm(formData)
  }

  return (
    <div className="">
        <hr className="border-ar-orange border m-auto"></hr>
        <h2 className="font-extrabold text-ar-blue text-3xl text-center my-1">Contact Us</h2>
        <hr className="border-ar-orange border w-32 m-auto mb-4"></hr>
        <div className="font-semibold text-lg mb-4">Use the following form or call us on <Link to="tel:01619291921" className="text-ar-orange font-extrabold">0161 929 1921</Link> to make a free, no obligation enquiry</div>
        {
          message.display &&
          <div className={`${message.colorClass} border-2 px-2 py-1 rounded-lg text-center text-xl font-bold text-black mb-5`}>
            {message.text}
          </div>
        }
        <form name="contact" onSubmit={handleSubmit} className="flex flex-col gap-3 text-ar-blue text-lg" data-netlify="true">

          <input type="text" name="name" placeholder="Name" value={formData.name} required onChange={handleChange} className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded"/>
          <input type="email" name="email" placeholder="Email" value={formData.email} required onChange={handleChange} className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded"/>
          <input type="phone" name="phone" placeholder="Telephone Number" value={formData.phone} onChange={handleChange} className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded"/>
          <textarea name="message" placeholder="Message" value={formData.message} required onChange={handleChange} className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded h-32 resize-none"></textarea>

          <button type="submit" className="px-3 py-1 my-3 bg-ar-orange hover:bg-ar-orange-hi text-black font-semibold w-fit m-auto rounded-xl">Send Message</button>

        </form>
        
    </div>
  )
}

export default ContactForm
