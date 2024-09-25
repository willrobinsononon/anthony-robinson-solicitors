import * as React from "react"

const Testimonials = () => {

    const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0)
    const [animateClass, setAnimateClass] = React.useState("opacity-100")

    const quotes = [
        {
            name: "Nick Langley",
            title: "Managing Director, Advance Recruitment",
            quote: "I have had the need to use Anthony’s services in recent times. I have to say that I have been really impressed not just with the legal advice given but also with Anthony’s approach to the situation. He showed empathy and broke the issues down into understandable segments – he didn’t at any time try to blind me with science. Logic and common sense were high on his agenda. A pleasure to deal with Anthony in what was a difficult time for my company."
        },
        {
            name: "Nicola Ford",
            title: "Partner, Cooper Ford Solicitors",
            quote: "Anthony provided excellent client care and support throughout our matter. He was personable and brought the matter to conclusion swiftly and with the least fuss possible. We would recommend Anthony for all employment law issues."
        },
        {
            name: "Rob Jones",
            title: "Finance Director",
            quote: "I would have no hesitation in recommending Anthony Robinson Solicitors. From the first moment I made contact I was given honest advice and support in what was a very difficult time. Everything was explained in great detail and queries were always answered very quickly. I would recommend the service to anyone requiring legal advice on any employment matter."
        },
        {
            name: "Neil Mullen",
            title: false,
            quote: "Having lost my employment I was advised to contact Anthony Robinson Solicitors. I made one simple phone call and within the hour Mr Robinson called me back. After a thorough consultation Mr Robinson agreed to take on my case. With daily updates via email and phone calls I was never left wondering as to what was happening using words I could understand – no jargon. His advice and guidance was outstanding and unbeatable. The case only lasted 4-5 weeks from start to finish resulting in me winning. I found Anthony to be a very very professional friendly gentleman. Should I ever need a solicitor Anthony is definitely on speed dial"
        },
        {
            name: "John Ryan",
            title: "Project Manager",
            quote: "I was recommended to Anthony by a friend. I found Anthony to be very personable and he explained matters in a relaxed, simple straightforward way. Importantly I felt that Anthony had the subject matter knowledge and I had every confidence in the advice being given by him. All round Anthony provided me with a great service. I have since recommended Anthony to one of my ex work colleagues and I would not hesitate to use his services or recommend him further in the future."
        },
    ]

    function showQuote() {
        setAnimateClass("opacity-100")
    }

    function transitionHandler() {
        if (animateClass === "opacity-0") {
            setCurrentQuoteIndex((currentQuoteIndex + 1) % 4)
            showQuote()
        }
    }

    React.useEffect(() => {

        function updateQuote() {
            hideQuote()
        }
    
        function hideQuote() {
            setAnimateClass("opacity-0")
        }

        const interval = setInterval(updateQuote, 10000)
 
        return () => clearInterval(interval);
    }, [currentQuoteIndex]);

  return (
    <div className="text-ar-blue">
        <h2 className="font-semibold text-3xl text-center">Testimonials</h2>
        <div onTransitionEnd = {transitionHandler} className={`text-ar-blue transition-all duration-500 ${animateClass}`}>
            <div>
                <div className="font-serif text-6xl h-8">“</div>
                <div className="px-3 text-ar-o-grey">{quotes[currentQuoteIndex].quote}</div>
                <div className="font-serif text-6xl text-right h-8">”</div>
            </div>
            <div className="text-lg font-semibold text-center">
                {quotes[currentQuoteIndex].name}
            </div>
            {quotes[
                currentQuoteIndex].title && 
                <div className="font-semibold text-center">
                    {quotes[currentQuoteIndex].title}
                </div>
            }
        </div>
        
    </div>
  )
}

export default Testimonials
