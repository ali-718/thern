import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../../../components/image";

const Banner = () => {
  return (
    <div className="banner-area">
      <img
        style={{ width: "100%" }}
        src={require("../../../assets/img/logo/project3.jpg")}
      />
    </div>
  );
};

export default Banner;
