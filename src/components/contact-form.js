import * as React from "react"
import { Link } from "gatsby"

const ContactForm = () => {

  return (
    <div className="">
        <hr className="border-ar-orange border m-auto"></hr>
        <h2 className="font-extrabold text-ar-blue text-3xl text-center my-1">Contact Us</h2>
        <hr className="border-ar-orange border w-32 m-auto mb-4"></hr>
        <div className="font-semibold text-lg mb-4">Use the following form or call us on <Link to="tel:01619291921" className="text-ar-orange font-extrabold">0161 929 1921</Link> to make a free, no obligation enquiry</div>
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-3 text-ar-blue text-lg">

          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>

          <input type="text" name="name" placeholder="Name" required className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded"/>
          <input type="email" name="email" placeholder="Email"  required className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded"/>
          <input type="phone" name="phone" placeholder="Telephone Number" className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded"/>
          <textarea name="message" placeholder="Message" required className="bg-ar-o-grey-xhi border-ar-o-grey-hi border px-2 py-1 rounded h-32 resize-none"></textarea>

          <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"/>

          <button type="submit" className="px-3 py-1 my-3 bg-ar-orange hover:bg-ar-orange-hi text-white font-semibold w-fit m-auto rounded-xl">Send Message</button>

        </form>
        
    </div>
  )
}

export default ContactForm
