// import * as React from "react";
// import Navigation from "../components/Navigation";
// import "../styles/gallary.css";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// import styled from "styled-components";

// const query = graphql`
//   {
//     allFile(filter: { extension: { ne: "svg" } }) {
//       totalCount
//       nodes {
//         name
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, width: 200)
//         }
//       }
//     }
//   }
// `;

// const Wrapper = styled.section``;

// export default function Images() {
//   const data = useStaticQuery(query);
//   const nodes = data.allFile.nodes;

//   return (
//     <>
//       <Navigation></Navigation>
//       <Wrapper>
//         {nodes.map((image, index) => {
//           return (
//             <GatsbyImage
//               key={index}
//               image={image.childImageSharp.gatsbyImageData}
//             />
//           );
//         })}
//       </Wrapper>
//     </>
//   );
// }
