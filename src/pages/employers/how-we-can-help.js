import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"

const Employers = () => {

  return (
    <Layout>
        <InnerPage title="Employers" sidebar={true} testimonials={true} image={
          <StaticImage 
            alt="" 
            src="../../images/title2.jpg"
            className="[gridArea:1/1] z-0"
            imgClassName="brightness-50"
            layout="fullWidth"
          />}
        >
            <InnerPageSection title={false}>
              <p>

                If you are looking for an employment solicitor, we are here to help. Is your business making the most of its primary resource – its employees?

                At Anthony Robinson Solicitors we advise on critical aspects of employment law that play such an important role in the performance of an organisation.

                As an employment solicitor we can help you find ways to improve the successful running of your business, such as putting policies in place to promote productivity, effecting reorganisations to improve efficiency and using employment contracts to protect your business from competition.

                We help businesses of all shapes and sizes.  Much of our work is with companies and organisations of a medium size, employing staff numbering between 20 and 200 employees.

                However businesses with only one employee need to have a contract of employment in place and numerous issues can arise upon which a small organisation need advice from an employment solicitor.

                We also welcome instructions from larger organisations, particularly where a human resources department needs specialist employment advice to support the valuable work it undertakes.

                Our aim at all times is to assist organisations of whatever nature to navigate the treacherous waters of employment law successfully.

                For further information please do not hesitate to call us on 0161 929 1921 or contact us here for a free no-obligation chat.

                Our legal services cover the areas of Manchester, Altrincham, Stockport, Wilmslow, Knutsford, Warrington and Cheshire.


                When you think about getting advice and assistance from an employment law solicitor are you worried about what you may be getting yourself into?  At Anthony Robinson Solicitors we take pride in finding a way to meet all your employment needs whilst providing a cost-effective service.

                We are aware that most businesses are looking to find clear and helpful advice that can enable employment issues to be dealt with swiftly and with as little hassle as possible.  We are committed to working with you to identify solutions whilst minimising the risks to your organisation.  We look to provide our clients with all available options and to be imaginative in finding the best way forward.  We are approachable and friendly and seek to ensure that all of our clients feel they have found an trusted employment law solicitor they can rely on.

                As an employment law solicitor, it’s our job to assist you in making sure your business can get the most out of your employees by helping you to build an efficient and motivated workforce.  Whether this involves drafting contracts and policies, restructuring your organisation or dealing with issues such as misconduct, underperformance or sickness absence, we aim to ensure that your business can thrive without having to fear the pitfalls of employment legislation.

                Anthony Robinson was a successful partner in a city-centre firm who has now moved out of town to enable his clients to know that they are getting a first-class service whilst getting value for money.

                At Anthony Robinson Solicitors we have the experience and expertise to give you the reassurance that the employment aspects of your business are in safe hands.  We provide a dedicated personal service and take great satisfaction from building long-term relationships with our clients.

                For further information please do not hesitate to call us on 0161 929 1921 or contact us here for a free no-obligation chat.
              </p>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default Employers

export const Head = () => <SEO />
