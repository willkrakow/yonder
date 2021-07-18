const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    await createArtPages(graphql, createPage)
    await createEventPages(graphql, createPage)
}

async function createEventPages(graphql, createPage){
    const eventTemplate = path.resolve(`src/templates/event.tsx`)
    const result = await graphql(`
    query {
        allSanityEvent {
            edges {
                node {
                    slug {
                        current
                    }
                    _key
                    _type
                    id
                    name
                }
            }
        }
    }
    `)
    result.data.allSanityEvent.edges.forEach(edge => {
        createPage({
            path: `/events/${edge.node.slug.current}`,
            component: eventTemplate,
            context: {
                title: edge.node.name,
                id: edge.node.id,
            }
        })
    })
}

async function createArtPages(graphql, createPage) {
    const artTemplate = path.resolve(`src/templates/art.tsx`)
    const result = await graphql(`
    query {
        allSanityArt {
            edges {
                node {
                    slug {
                        current
                    }
                    _key
                    name
                    id
                }
            }
        }
    }
  `)
    result.data.allSanityArt.edges.forEach(edge => {
        createPage({
            path: `/art/${edge.node.slug.current}`,
            component: artTemplate,
            context: {
                title: edge.node.name,
                id: edge.node.id
            },
        })
    })
}
