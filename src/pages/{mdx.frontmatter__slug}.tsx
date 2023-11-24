import React, { ReactNode } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IGithubPostProps {
  data: Queries.PostDetailQuery;
  children: ReactNode;
}

export default function GithubPost({ data, children }: IGithubPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  console.log(image);
  return (
    <Layout title="">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        tech_stack
        lecture
        date
        author
        slug
        headerImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IGithubPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
