import React from "react";
import { useNavigate } from "react-router-dom";

const CategorieItem = ({ data }) => {
  const navigation = useNavigate();
  function hundleClickCategory() {
    localStorage.setItem("category", data._id);
    navigation("/result-page");
  }
  return (
    <div>
      <div
        style={{ cursor: "pointer" }}
        onClick={hundleClickCategory}
        className="cat-img d-flex align-items-center justify-content-center bg-primary"
      >
        <img
          src={data.image}
          style={{ aspectRatio: "4/4", objectFit: "cover" }}
          alt="img"
          className="img-fluid"
        />
      </div>
      <div
        style={{ cursor: "pointer", fontSize: "13px" }}
        onClick={hundleClickCategory}
        className="text-center text-nowrap fw-semibold mt-2"
      >
        {data.name}
      </div>
    </div>
  );
};

export default CategorieItem;
