import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PageProps, graphql } from "gatsby";

export default function IndexPage({
  data,
}: PageProps<Queries.GithubPostsQuery>) {
  console.log(data);
  return (
    <Layout title="HOME">
      <h1>Hello! This is Jeong ChaeKyeong's Portfolio Site.</h1>
      <h2>My Works</h2>
      <section>
        {data.allMdx.nodes.map((post, index) => (
          <article>
            <h3>{post.frontmatter?.title}</h3>
            <span>Using {post.frontmatter?.tech_stack}</span>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;

export const query = graphql`
  query GithubPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          tech_stack
          lecture
          date
          author
        }
        excerpt
      }
    }
  }
`;
