import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import linkedinLogo from "../images/linkedin.png"

const Footer = () => {

  return (
    <footer>
      <div>
          <div>
            <div className="grid">
              <StaticImage 
                alt="" 
                src="../images/meeting-crop.jpg"
                className="min-w-full max-h-96 [gridArea:1/1] z-0"
                imgClassName="brightness-30"
                layout="fullWidth"
              />
              <div className="z-20 [gridArea:1/1] text-white font-sans px-8">
                <div className="max-w-5xl m-auto">
                  <div className="pt-10 sm:pt-20 pb-2 sm:pb-5">
                    <div className="mb-5">
                        <Link to="/contact">
                            <span className="font-extrabold text-2xl sm:text-4xl text-white hover:text-ar-orange-hi">Get in touch</span>
                        </Link>
                    </div>
                    <div className="bg-ar-o-grey bg-opacity-80 p-5 rounded-xl">
                      <div className="text-md sm:text-xl lg:text-2xl">We are always happy to discuss any aspect of employment law advice as it relates to employees or employers – so why not <Link to="/contact"><div className="bg-ar-orange hover:bg-ar-orange-hi text-black font-semibold rounded-xl px-3 inline-block">Contact Us Today</div></Link> for further information and a <span className="font-semibold">no obligation </span>chat.</div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
            </div>
        </div>
        <div className="bg-ar-blue border-t-2 border-white px-4">
            <div className="max-w-6xl m-auto">
                <div className="py-5 flex flex-col gap-3 sm:flex-row">
                    <div className="sm:basis-3/5 flex flex-col gap-3 text-white font-sans text-lg">
                        <div>
                        <p>
                            Anthony Robinson Solicitors,<br/>
                            20 Market Street,<br/>
                            Altrincham<br/>
                            Cheshire<br/>
                            WA14 1PF
                        </p>
                        </div>
                        <div>
                            <Link to="tel:01619291921">
                                0161 929 1921
                            </Link>
                        </div>
                        <div>
                          <Link to="/complaints" className="underline">
                            Complaints
                          </Link>
                        </div>
                        <div>
                            © {new Date().getFullYear()} &middot; Anthony Robinson Solicitors
                        </div>
                        <div className="font-bold">
                          Proudly serving Manchester, Altrincham, Stockport and Cheshire since 2012
                        </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:basis-2/5 flex items-center">
                        <div className="flex flex-col gap-8 bg-white rounded p-3 w-full">
                            <StaticImage 
                                alt="company logo" 
                                src="../images/logo.png"
                                className="max-w-72 m-auto"
                            />
                            <div className="flex justify-center">
                                <Link to="https://www.linkedin.com/in/anthony-robinson-22277222">
                                    <img className="max-h-8" alt="linkedin logo" src={linkedinLogo}/>
                                </Link>
                            </div>
                            <div className="text-center">
                                <div className="m-auto" style={{maxWidth:"275px",maxHeight:"163px"}}><div style={{position:"relative",paddingBottom:"59.1%",height:"auto",overflow:"hidden"}}><iframe frameBorder="0" scrolling="no" allowtransparency="true" src="https://cdn.yoshki.com/iframe/55845r.html" style={{border:"0px",margin:"0px",padding:"0px",backgroundColor:"transparent",top:"0px",left:"0px",width:"100%",height:"100%",position:"absolute"}}></iframe></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer