exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/about-us/employment-solicitors`,
      toPath: `/about-us`,
    })

    createRedirect({
        fromPath: `/blog/recipes/mouthwatering-lasagna`,
        toPath: `/recipes/mouthwatering-lasagna`,
      })

    createRedirect({
    fromPath: `/blog/recipes/mouthwatering-lasagna`,
    toPath: `/recipes/mouthwatering-lasagna`,
    })
  }