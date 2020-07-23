import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import Banner from "../containers/service/banner";
import About from "../containers/service/about";

export default () => (
  <Layout>
    <SEO title="Services" />
    <Banner />
    <About />
  </Layout>
);
