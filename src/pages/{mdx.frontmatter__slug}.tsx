import React, { ReactNode } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

interface IGithubPostProps {
  data: Queries.PostDetailQuery;
  children: ReactNode;
}

export default function GithubPost({ data, children }: IGithubPostProps) {
  return (
    <Layout title="">
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail {
    allMdx {
      nodes {
        frontmatter {
          title
          tech_stack
          lecture
          date
          author
          slug
        }
      }
    }
  }
`;
