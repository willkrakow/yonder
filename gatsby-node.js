const path = require('path')
const crypto = require("crypto");
const puppeteer = require('puppeteer');


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

exports.onCreateNode = ({ node, actions }) => {
    parseEventDates(actions, node);
}
function parseEventDates(actions, node) {
    const { createNode } = actions;

    if (node.internal.type === "SanityEvent") {
        const date = new Date(node.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const year_month = `${year}-${month}`;
        const day = date.getDate();
        const id = crypto.randomBytes(16).toString("hex");

        const fieldData = {
            year: year,
            month: month,
            year_month: year_month,
            day: day,
            id: id,
            parent: node.id,
            children: [],
        };
        createNode({
            ...fieldData,
            internal: {
                type: `SanityMutatedEvent`,
                contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(fieldData))
                    .digest(`hex`),
                description: `Sanity Event with detailed date data`,
            }
        });
    }
    return
}