// /**@jsx jsx */
// import React from 'react'
// import { Themed, jsx, Flex, Grid } from 'theme-ui'
// import { PageProps, graphql } from 'gatsby';
// import { SanityImageProps } from './drink';

// export interface SlugProps {
//     current: string,
// }

// export interface DrinkProps {
//   id: string;
//   category?: {
//       id: string,
//       name: string,
//   };
//   image: SanityImageProps,
//   price: number;
//   name: string;
//   slug: SlugProps
// }

// interface CategoryPageProps extends PageProps {
//   data: {
//     allSanityDrink: {
//       edges: Array<{node: DrinkProps}>;
//     };
//     sanityCategory: {
//         id: string,
//         name: string,
//         slug: SlugProps
//     };
//   };
// }



// export const query = graphql`
//   query SanityCategoryQuery($id: String!) {
//     sanityCategory(id: { eq: $id }) {
//       id
//       name
//       slug {
//         current
//       }
//     }
//     allSanityDrink(filter: { category: { id: { eq: $id } } }) {
//       edges {
//         node {
//           id
//           category {
//             name
//             id
//           }
//           slug {
//               current
//           }
//           image {
//             asset {
//               gatsbyImageData(
//                 layout: CONSTRAINED
//                 placeholder: BLURRED
//                 fit: CLIP
//               )
//             }
//           }
//           price
//           name
//         }
//       }
//     }
//   }
// `;


// const Category = (props: CategoryPageProps) => {

//     const { allSanityDrink, sanityCategory } = props.data
//     console.log(allSanityDrink)
//     return (
//       <React.Fragment>
//         <Flex as="header" sx={{ justifyContent: 'center' }} >
//           <Themed.h2>{sanityCategory.name}</Themed.h2>
//         </Flex>
//         <Grid columns={[1, 2, 3]}>
//         {allSanityDrink.edges.map((drink) => (
//             <Themed.p key={drink.node.id} >{drink.node.name}</Themed.p>
//         ))}
//         </Grid>
//       </React.Fragment>
//     );
// }

// export default Category


import React from 'react'

const Category = () => {return <p>hi</p>}

export default Category