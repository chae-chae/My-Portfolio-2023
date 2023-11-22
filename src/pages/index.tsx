import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="HOME">
      <h1>Hello! This is Jeong ChaeKyeong's Portfolio Site.</h1>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
