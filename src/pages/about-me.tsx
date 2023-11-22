import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Link } from "gatsby";

export default function AboutMe() {
  return (
    <Layout title="About Me">
      <article>
        <h2>Jeong ChaeKyeong</h2>
        <h4>Junior FrontEnd Engineer</h4>
        <h5>abed_nadir@naver.com</h5>
        <Link to="https://github.com/chae-chae">
          <h5>Go to Github</h5>
        </Link>
      </article>
    </Layout>
  );
}

export const Head = () => <Seo title="About Me" />;
