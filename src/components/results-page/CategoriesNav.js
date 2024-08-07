import React from "react";
import { useGetAllCategoriesQuery } from "../../reduxQuery/APIs/categoryApi";

const CategoriesNav = ({ modifyCat, cattext }) => {
  const { data: categories } = useGetAllCategoriesQuery();
  function hundleChangeCategory(e) {
    if (e.target.value === "all") {
      modifyCat("");
      console.log("all");
    } else {
      modifyCat(`&category=${e.target.value}`);
    }
  }
  return (
    <div
      class="category-overflow gap-2 mt-2 d-flex"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <div>
        <input
          defaultChecked={!cattext}
          value={"all"}
          onClick={(e) => hundleChangeCategory(e)}
          name="category-radio"
          type="radio"
          class="btn-check"
          id={`btnradio`}
          autocomplete="off"
        ></input>
        <label
          style={{ textWrap: "nowrap" }}
          class=" py-1 px-4 btn btn-outline-success"
          htmlFor={`btnradio`}
        >
          All
        </label>
      </div>
      {categories?.data?.map((item, index) => {
        if (cattext === item._id) {
          return (
            <div key={index}>
              <input
                defaultChecked
                value={item._id}
                onChange={hundleChangeCategory}
                name="category-radio"
                type="radio"
                class="btn-check"
                id={`btnradio${index}`}
                autocomplete="off"
              ></input>
              <label
                style={{ textWrap: "nowrap" }}
                class="py-1 px-4 btn btn-outline-success"
                htmlFor={`btnradio${index}`}
              >
                {item.name}
              </label>
            </div>
          );
        }
        return (
          <div key={index}>
            <input
              value={item._id}
              onChange={hundleChangeCategory}
              name="category-radio"
              type="radio"
              class="btn-check"
              id={`btnradio${index}`}
              autocomplete="off"
            ></input>
            <label
              style={{ textWrap: "nowrap" }}
              class="py-1 px-4 btn btn-outline-success"
              htmlFor={`btnradio${index}`}
            >
              {item.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesNav;
