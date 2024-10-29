import * as React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {StaticImage} from "gatsby-plugin-image"
import InnerPage from "../../components/inner-page"
import InnerPageSection from "../../components/inner-page-section"

const WhoWeWorkWith = () => {

  return (
    <Layout>
        <InnerPage title="Who We Work With" sidebar={true} testimonials={true} image={
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
              </p>
            </InnerPageSection>
        </InnerPage>
    </Layout>
  )
}

export default WhoWeWorkWith

export const Head = () => <SEO />
