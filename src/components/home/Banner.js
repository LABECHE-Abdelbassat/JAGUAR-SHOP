import React from "react";
import BrandItem from "./BrandItem";
import Container from "react-bootstrap/esm/Container";
import banner1 from "../../images/third_offer.jpg";
const Banner = () => {
  return (
    <div>
      <img src={banner1} alt="Banner" className="w-100 rounded-2 h-100" />
    </div>
  );
};

export default Banner;
