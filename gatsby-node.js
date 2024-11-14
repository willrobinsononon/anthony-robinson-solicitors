exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
        fromPath: `/about-us/employment-solicitors`,
        toPath: `/about-us`,
        })

    createRedirect({
        fromPath: `/about-us/anthony-robinson`,
        toPath: `/about-us`,
    })

    createRedirect({
        fromPath: `/about-us/testimonials`,
        toPath: `/about-us`,
    })

    createRedirect({
        fromPath: `/about-us/complaints-procedure`,
        toPath: `/complaints`,
    })

    createRedirect({
        fromPath: `/employment-law-solicitor`,
        toPath: `/employers/how-we-can-help`,
    })

    createRedirect({
        fromPath: `/employment-law-solicitor/employment-solicitor`,
        toPath: `/employers/how-we-can-help`,
    })

    createRedirect({
        fromPath: `/employment-law-solicitor/employment-legal-services`,
        toPath: `/employers/how-we-can-help`,
    })

    createRedirect({
        fromPath: `/employment-law-solicitor/employment-contracts`,
        toPath: `/employers/key-issues/employment-contracts`,
    })

    createRedirect({
        fromPath: `/employment-law-solicitor/employment-legal-services/sickness-absence`,
        toPath: `/employers/key-issues/sickness-absence`,
    })

    createRedirect({
        fromPath: `/employment-lawyer/redundancy`,
        toPath: `/key-issues/redundancy`,
    })

    createRedirect({
        fromPath: `/employment-law-solicitor/transfer-of-undertakings-tupe`,
        toPath: `/employers/key-issues/transfer-of-undertakings`,
    })

    createRedirect({
        fromPath: `/managing-a-disciplinary-procedure`,
        toPath: `/employers/key-issues/disciplinary-procedures`,
    })

    createRedirect({
        fromPath: `/discrimination-in-the-workplace`,
        toPath: `/employees/discrimination-in-the-workplace`,
    })

    createRedirect({
        fromPath: `/employment-law-solicitor/employment-law-advisors`,
        toPath: `/employers/services`,
    })

    createRedirect({
        fromPath: `/employers-costs-defending-dismissal-claim`,
        toPath: `/employers/defense-costs`,
    })

    createRedirect({
        fromPath: `/employment-lawyer`,
        toPath: `/employees/how-we-can-help`,
    })

    createRedirect({
        fromPath: `/employment-lawyer/employment_law_advice`,
        toPath: `/employees/services`,
    })

    createRedirect({
        fromPath: `/employment-lawyer/key-issues`,
        toPath: `/employees/key-issues`,
    })

    createRedirect({
        fromPath: `/employees-costs-bringing-wrongful-dismissal-claim`,
        toPath: `/employees/dismissal-costs`,
    })

    createRedirect({
        fromPath: `/services`,
        toPath: `/medical/how-we-can-help`,
    })

    createRedirect({
        fromPath: `/services/services`,
        toPath: `/medical/services`,
    })

    createRedirect({
        fromPath: `/services/key-issues`,
        toPath: `/medical/key-issues`,
    })

    createRedirect({
        fromPath: `/contact-us`,
        toPath: `/contact`,
    })
  }