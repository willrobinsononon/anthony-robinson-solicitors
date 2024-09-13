import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IndexPage = () => {

  return (
    <>
      <Layout>
        <div className="flex hero bg-slate-800">
          <StaticImage 
                    alt="person writing" 
                    src="../images/work-scott-graham-crop.jpg"
                    className="absolute left-0 top-0 min-w-full h-lvh overflow-hidden z-0"
                    imgClassName="blur-sm brightness-50"
                    imgStyle={{
                      margin:"-4px",
                      width:"105%",
                      height:"105%"
                    }}
                    layout="fullWidth"
          />
          <div className="hero-text-wrapper relative z-20 text-white font-sans font-bold w-full">
            <div className="pt-3 pb-5 sm:py-5 lg:pt-10 lg:pb-7 backdrop-blur-lg px-8 sm:px-16 lg:px-24" style={{
              maskImage:"linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%)"}}>
              <div className="max-w-5xl m-auto">
                <h2 className="text-md sm:text-2xl lg:text-3xl">
                  <span className="font-extrabold">Anthony Robinson Solicitors</span> are experts in all matters related to Employment Law. Our reputation is built on our compassionate, detail-oriented service, and strong track record in getting the best outcomes for our clients.
                </h2>
              </div>
            </div>

            <div className="px-8 sm:px-16 lg:px-24">
              <div className="max-w-5xl m-auto flex flex-col sm:flex-row">
                <div className="flex-1 p-1 sm:p-2 lg:p-4">
                  <Link to="/employers">
                    <div className="h-full border-2 rounded-xl border-white backdrop-blur-lg hover:backdrop-grayscale hover:backdrop-brightness-125 p-3 cursor-pointer">
                      <h2 className="font-extrabold text-md sm:text-lg lg:text-xl">Employer Seeking Assistance?</h2><hr className="sm:my-2 border-slate-200"></hr>
                      <span className="text-xs sm:text-md lg:text-lg">Find out more about how we assist employers in all matters relating to employment law</span>
                    </div>
                  </Link>
                </div>
                <div className="flex-1 p-1 sm:p-2 lg:p-4">
                  <Link to="/employees">
                    <div className="h-full border-2 rounded-xl border-white backdrop-blur-lg hover:backdrop-grayscale hover:backdrop-brightness-125 p-3 cursor-pointer">
                      <h2 className="font-extrabold text-md sm:text-lg lg:text-xl mb-1">Employee Seeking Assistance?</h2><hr className="sm:my-2 border-slate-200"></hr>
                      <span className="text-xs sm:text-md lg:text-lg">Find out more about how we assist workers, job applicants and employees in all workplace matters</span>
                    </div>
                  </Link>
                </div>
                <div className="flex-1 p-1 sm:p-2 lg:p-4">
                  <Link to="/medical">
                    <div className="h-full border-2 rounded-xl border-white backdrop-blur-lg hover:backdrop-grayscale hover:backdrop-brightness-125 p-3 cursor-pointer">
                      <h2 className="font-extrabold text-md sm:text-lg lg:text-xl mb-1">Medical Professional Seeking Assistance?</h2><hr className="sm:my-2 border-slate-200"></hr>
                      <span className="text-xs sm:text-md lg:text-lg">Find out more about how we use our experience and expertise to assist with employment issues in the medical profession</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="max-w-5xl m-auto p-1 sm:p-2 lg:p-4">
                <div className="w-3/4 sm:w-1/2 m-auto">
                  <Link  to="/contact">
                      <div className="bg-ar-orange bg-opacity-50 border-2 rounded-xl border-white  backdrop-blur-lg backdrop-brightness-150 hover:backdrop-grayscale hover:backdrop-brightness-200 p-3 cursor-pointer">
                        <h2 className="text-center text-black font-extrabold text-md sm:text-lg lg:text-xl mb-1">Contact us today to talk through your options</h2>
                      </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-12 max-w-7xl m-auto flex relative z-20">
        </div>
      </Layout>
      
    </>
      
  )
}

export default IndexPage

export const Head = () => <SEO />
