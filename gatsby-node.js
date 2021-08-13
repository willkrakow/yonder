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
    const { createNode } = actions

    if (node.internal.type === "SanityEvent"){
        const date = new Date(node.date)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const year_month = `${year}-${month}`
        const day = date.getDate()
        const id = crypto.randomBytes(16).toString("hex")

        const fieldData = {
            year: year,
            month: month,
            year_month: year_month,
            day: day,
            id: id,
            parent: node.id,
            children: [],
        }
        createNode({
            ...fieldData,
            internal: {
                type: `SanityMutatedEvent`,
                contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(fieldData))
                    .digest(`hex`),
                description: `Sanity Event with detailed date data`, // optional
            }
        })
    }
}

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    getNodesByType,
}) => {

    const data = {
        posts: [
            {
                id: "1",
                title: "Hello World",
            }
        ]
    }

    const pupper = async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://instagram.com/yonderbarnc');
            await page.evaluate(() => {
                document.querySelectorAll('a div div img').forEach(el => {
                    const el_id = el.id;
                    const el_class = el.className;
                    const el_tag = el.tagName;
                    const el_text = el.textContent;
                    const el_href = el.getAttribute('href');
                    const el_src = el.getAttribute('src');
                    console.log(el_src)
                })
            })
            await browser.close();

            return "took screenshot"
        };
    
    const didwork = await pupper()
    console.log(didwork)

    // loop through data and create Gatsby nodes
    // data.posts.forEach(post =>
    //     createNode({
    //         ...post,
    //         id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
    //         parent: null,
    //         children: [],
    //         internal: {
    //             type: POST_NODE_TYPE,
    //             content: JSON.stringify(post),
    //             contentDigest: createContentDigest(post),
    //         },
    //     })
    // )
    return
}