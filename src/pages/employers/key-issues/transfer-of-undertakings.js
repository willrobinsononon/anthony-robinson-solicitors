import * as React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Title from "../../../components/title"
import Sidebar from "../../../components/sidebar"
import {StaticImage} from "gatsby-plugin-image"

const TransferOfUndertakings = () => {

  return (
    <>
      <Layout>
        <Title title="Title" image={
          <StaticImage 
            alt="" 
            src="../../images/title1.jpg"
            className="min-w-full [gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />} 
        />
        <div className="my-5 lg:my-16 px-5 sm:px-12 max-w-7xl m-auto flex">
            <div className="font-sans mx-5 sm:mx-12">
                <div className="flex gap-5">
                    <div className="basis-2/3">
                        <div>
                            <div className="py-5 lg:py-10 px-5">
                                <h2 className="font-extrabold text-xl lg:text-3xl text-ar-blue">Title</h2>
                            </div>
                            <div className="p-5 text-ar-blue">
                                <p className="mb-2 text-md">
                                  If you decide to take over another business or changing a contractor providing services you need to be aware of Transfer of Undertakings legislation.

                                  Employers have to tread extremely carefully when dealing with the Transfer of Undertakings (Protection of Employment) Regulations 2006 (“TUPE”) which apply in such circumstances. Getting it wrong can be very expensive.

                                  For example if there is a failure to carry out the duty to inform and consult with the affected employees then the businesses can be liable to pay compensation of up to 13 week’s uncapped pay!

                                  Then there is a high degree of protection for transferring employees, meaning that dismissal for a reason connected with the transfer will be automatically unfair unless it is for an economic, technological or organisational reason entailing changes in the workforce (an “ETO reason”), with limitations upon when this reason will apply.

                                  Businesses often face issues as to the terms and conditions of the transferring employees and may wish to consider altering these to align them with the workforce already in place, for example if the rates of pay of the incoming staff are higher. However such changes will be unlawful unless they are unconnected to the transfer or for an ETO reason, so again employers must beware taking such action and should never do so without taking legal advice.

                                  If you need expert advice and assistance with TUPE issues please contact Anthony Robinson or call 0161 929 1921 for a free, no obligation initial conversation.

                                  Our legal services cover the areas of Manchester, Altrincham, Warrington, Stockport, Wilmslow, Knutsford and Cheshire.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
      </Layout>
      
    </>
      
  )
}

export default TransferOfUndertakings

export const Head = () => <SEO />
