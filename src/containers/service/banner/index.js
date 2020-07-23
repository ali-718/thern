import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../../../components/image";

const Banner = () => {
  return (
    <div className="banner-area">
      <img
        src={
          "https://cdn.pixabay.com/photo/2020/05/14/19/49/cornwall-5171138_960_720.jpg"
        }
        alt="Company Banner"
      />
    </div>
  );
};

export default Banner;
