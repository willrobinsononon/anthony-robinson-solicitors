import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = () => {
    return (
        <div className="grid hero min-h-vh-nav sm:h-vh-nav-sm">
          <StaticImage 
                    alt="" 
                    src="../images/blur.png"
                    className="min-w-full [gridArea:1/1]"
                    imgClassName="brightness-50"
                    layout="fullWidth"
          />
          <div className="hero-text-wrapper z-20 [gridArea:1/1] w-full flex flex-col gap-6 text-white font-sans">
          
            <div className="basis-2/6 flex items-center pt-4 px-4 bg-gradient-to-b from-ar-blue to-transparent">
              <div className="max-w-5xl m-auto">
                <h2 className="text-md sm:text-2xl lg:text-3xl font-bold">
                  <span className="font-extrabold">Anthony Robinson Solicitors</span> are experts in all matters related to Employment Law. Our reputation is built on our compassionate, detail-oriented service, and strong track record in getting the best outcomes for our clients.
                </h2>
              </div>
            </div>

            <div className="basis-2/6 px-4 flex items-center">
              <div className="max-w-5xl m-auto flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Link to="/employers">
                    <div className="h-full border-2 rounded-xl border-white bg-ar-blue bg-opacity-20 hover:bg-white hover:bg-opacity-20 p-3 cursor-pointer">
                      <h2 className="font-extrabold text-ar-orange text-lg sm:text-xl lg:text-2xl">Employer Seeking Assistance?</h2><hr className="my-1 sm:my-2 border-slate-200"></hr>
                      <span className="text-md sm:text-lg lg:text-xl">Find out more about how we assist employers in all matters relating to employment law</span>
                    </div>
                  </Link>
                </div>
                <div className="flex-1">
                  <Link to="/employees">
                    <div className="h-full border-2 rounded-xl border-white bg-ar-blue bg-opacity-20 hover:bg-white hover:bg-opacity-20 p-3 cursor-pointer">
                      <h2 className="font-extrabold text-ar-orange text-lg sm:text-xl lg:text-2xl">Employee Seeking Assistance?</h2><hr className="my-1 sm:my-2 border-slate-200"></hr>
                      <span className="text-md sm:text-lg lg:text-xl">Find out more about how we assist workers, job applicants and employees in all workplace matters</span>
                    </div>
                  </Link>
                </div>
                <div className="flex-1">
                  <Link to="/medical">
                    <div className="h-full border-2 rounded-xl border-white bg-ar-blue bg-opacity-20 hover:bg-white hover:bg-opacity-20 p-3 cursor-pointer">
                      <h2 className="font-extrabold text-ar-orange text-lg sm:text-xl lg:text-2xl">Medical Professional Seeking Assistance?</h2><hr className="my-1 sm:my-2 border-slate-200"></hr>
                      <span className="text-md sm:text-lg lg:text-xl">Find out more about how we use our experience and expertise to assist with employment issues in the medical profession</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="basis-2/6 px-4 pb-4 flex items-center">
              <div className="w-3/4 sm:w-1/2 m-auto">
                <Link  to="/contact">
                    <div className="bg-ar-orange border-2 rounded-xl border-white hover:bg-ar-orange-hi p-3 cursor-pointer">
                      <h2 className="text-center text-black font-extrabold text-lg sm:text-xl lg:text-2xl mb-1">Contact us to talk through your options</h2>
                    </div>
                  </Link>
              </div>
            </div>

          </div>

        </div>
    )
}

export default Hero