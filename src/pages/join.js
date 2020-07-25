import React from "react";
import SEO from "../components/seo";
import Layout from "../containers/layout/layout";
import ContactFormSection from "../containers/join/contact-form";

export default () => (
  <Layout headerStyle="darkHeader">
    <SEO title="Contact Us" />
    <ContactFormSection />
  </Layout>
);
