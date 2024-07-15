import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import Select from "react-select";
import MultiImageInput from "react-multiple-image-input";
import SuccessMessage from "../all/SuccessMessage";
import ErrorMessage from "../all/ErrorMessage";
import AddProductHook from "../../hooks/admin/AddProductHook";

const AdminAddProduct = () => {
  const [
    isSuccess,
    isError,
    error,
    images,
    setImages,
    handleImageChange,
    handleImageDelete,
    title_input,
    description_input,
    price_after_input,
    price_input,
    quantity_input,
    optionsCategory,
    catinput,
    hundleonChangeCategory,
    animatedComponents,
    hundleonChangeSubCategories,
    subcatinput,
    optionsSubCategory,
    brandinput,
    hundleOnChangeBrand,
    optionsbrand,
    colors,
    hundleOnClickDeleteColor,
    hundleOnClickColor,
    hundleOnChangeColor,
    hundleClickAdd,
    isLoading,
    newColor,
  ] = AddProductHook();
  return (
    <div className="position-relative">
      <div style={{ direction: "rtl" }}>
        {isSuccess ? (
          <SuccessMessage message={"Product Created Successfully"} />
        ) : (
          ""
        )}
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <h2 className="color-main mb-3">Add New Product</h2>
      <Form.Group className="mb-3">
        <div className="d-flex flex-wrap">
          {images?.map((image, index) => (
            <div key={index} className="position-relative m-2">
              <label style={{ cursor: "pointer" }} htmlFor="img">
                <img
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
                  alt={`Product Img ${index + 1}`}
                  style={{
                    width: "200px",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                  }}
                />
              </label>
              <button
                type="button"
                className="btn btn-danger btn-sm position-absolute"
                style={{ top: "5px", right: "5px" }}
                onClick={() => handleImageDelete(index)}
              >
                &times;
              </button>
              <input
                id="img"
                style={{ display: "none" }}
                type="file"
                onChange={handleImageChange}
              />
            </div>
          ))}
          {images.length < 5 && (
            <label
              className="m-2 d-flex justify-content-center align-items-center"
              style={{
                width: "200px",

                aspectRatio: "3/4",

                border: "1px dashed #ccc",
                cursor: "pointer",
              }}
            >
              Add Image
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          ref={title_input}
          type="text"
          placeholder="product title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          ref={description_input}
          as="textarea"
          placeholder="product description"
          rows={3}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          ref={price_input}
          type="text"
          placeholder="product price"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          ref={price_after_input}
          type="text"
          placeholder="product sold amount (optional)"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control ref={quantity_input} type="text" placeholder="Quantity" />
      </Form.Group>
      <Select
        className="mt-3"
        closeMenuOnSelect={true}
        options={optionsCategory}
        ref={catinput}
        onChange={hundleonChangeCategory}
        placeholder="Choose Category"
      />
      <Select
        className="mt-3"
        closeMenuOnSelect={true}
        components={animatedComponents}
        isMulti
        onChange={hundleonChangeSubCategories}
        ref={subcatinput}
        placeholder="Choose subCategory"
        options={optionsSubCategory}
      />
      <Select
        className="mt-3"
        closeMenuOnSelect={true}
        ref={brandinput}
        onChange={hundleOnChangeBrand}
        placeholder="Choose brand"
        options={optionsbrand}
      />
      <div class="gap-2 mt-3 d-flex" role="group" aria-label="Basic group">
        {colors.map((item, index) => {
          if (index == colors.length - 1) {
            return (
              <label
                onClick={() => hundleOnClickDeleteColor(index)}
                class="color-item rounded-circle"
                style={{ backgroundColor: `${newColor}` }}
                for="btnradio4"
              ></label>
            );
          }
          return (
            <label
              value="click to delete"
              onClick={() => hundleOnClickDeleteColor(index)}
              class="color-item rounded-circle"
              style={{ backgroundColor: `${item}` }}
              for="btnradio4"
            ></label>
          );
        })}

        <label
          class=" color-item rounded-circle bg-white border border-gray border-3 d-flex justify-content-center"
          htmlFor="color-input"
        >
          +
        </label>
        <Form.Control
          type="color"
          onClick={hundleOnClickColor}
          onChange={hundleOnChangeColor}
          style={{ opacity: "0", width: 0, marginLeft: "-30px" }}
          id="color-input"
          title="Choose your color"
        />
      </div>
      <div className="ms-auto">
        <Button
          className="mt-3 w-100  fw-semibold"
          variant="success"
          onClick={hundleClickAdd}
        >
          ADD THE PRODUCT
          {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
      </div>
    </div>
  );
};

export default AdminAddProduct;
