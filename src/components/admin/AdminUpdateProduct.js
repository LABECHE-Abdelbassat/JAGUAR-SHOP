import React, { useState } from "react";
import { Button, Form, FormCheck, Spinner } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CirclePicker, SketchPicker } from "react-color";
import MultiImageInput from "react-multiple-image-input";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getSpecificProduct,
  updateProduct,
} from "../../redux/actions/productAction";
import { getAllCategories } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { getAllSubCategories } from "../../redux/actions/subCategoryAction";
import { useParams } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../reduxQuery/APIs/categoryApi";
import { useGetAllSubCategoriesOnCategoryQuery } from "../../reduxQuery/APIs/subCategoryApi";
import { useGetAllBrandsQuery } from "../../reduxQuery/APIs/brandApi";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../reduxQuery/APIs/productApi";
import SuccessMessage from "../all/SuccessMessage";
import ErrorMessage from "../all/ErrorMessage";
import { toast } from "react-toastify";

const AdminUpdateProduct = () => {
  const idUpdate = useParams().id;

  //variable inputs
  const [title, settitle] = useState("");

  //variable inputs===========================================================================
  const subcatinput = useRef();
  const catinput = useRef();
  const brandinput = useRef();
  const title_input = useRef();
  const description_input = useRef();
  const price_after_input = useRef();
  const price_input = useRef();
  const quantity_input = useRef();
  const [categoryId, setcategoryId] = useState("");
  const [subCategoriesId, setsubCategoriesId] = useState([]);
  const [brandId, setbrandId] = useState("");
  const [colors, setcolors] = useState([]);
  const [optionsCategory, setoptionsCategory] = useState([]);
  const [optionsSubCategory, setoptionsSubCategory] = useState([]);
  const [optionsbrand, setoptionsbrand] = useState([]);

  //for color and image and not api
  const [newColor, setnewColor] = useState("initial");
  const crop = { unit: "px", aspect: 3000 / 4000, width: "720" };
  const [images, setImages] = useState([]);
  const animatedComponents = makeAnimated();

  //api redux part
  //api redux part
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: subCategories } =
    useGetAllSubCategoriesOnCategoryQuery(categoryId);
  const { data: brands } = useGetAllBrandsQuery();
  const {
    data: specificProduct,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(idUpdate);
  const [
    updateProduct,
    {
      isSuccess: updateSuccess,
      isLoading: updateLoading,
      isError: updateIsError,
      error: updateError,
    },
  ] = useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      let tablesub = [];
      title_input.current.value = specificProduct?.data?.title || "";
      description_input.current.value =
        specificProduct?.data?.description || "";
      price_after_input.current.value = specificProduct?.data?.sold || "";
      price_input.current.value = specificProduct?.data?.price || "";
      quantity_input.current.value = specificProduct?.data?.quantity || "";
      const all_images = [];
      all_images.push(specificProduct?.data?.imageCover);
      all_images.join(specificProduct?.data?.images);
      setImages(all_images.concat(specificProduct?.data?.images) || []);
      catinput.current.setValue(
        {
          value: specificProduct?.data?.category?._id,
          label: specificProduct?.data?.category?.name,
        } || {}
      );

      specificProduct?.data?.subcategories?.map((item, index) => {
        tablesub.push({ value: item?._id, label: item?.name });
      });
      subcatinput.current.setValue(tablesub || []);
      brandinput.current.setValue(
        {
          value: specificProduct?.data?.brand?._id,
          label: specificProduct?.data?.brand?.name,
        } || []
      );
      if (specificProduct?.data?.colors?.length > 0) {
        setcolors(specificProduct?.data?.colors || []);
      }
    }
  }, [specificProduct, updateSuccess]);

  //use Effects for the select inputs==============================================================
  useEffect(() => {
    const optionss = [];
    categories?.data.forEach((category) => {
      optionss.push({ value: category._id, label: category.name });
    });
    setoptionsCategory(optionss);
  }, [categories]);

  useEffect(() => {
    const optionss = [];
    brands?.data.forEach((brand) => {
      optionss.push({ value: brand._id, label: brand.name });
    });
    setoptionsbrand(optionss);
  }, [brands]);

  useEffect(() => {
    const optionss = [];
    subCategories?.data.forEach((subcategory) => {
      optionss.push({ value: subcategory._id, label: subcategory.name });
    });
    setoptionsSubCategory(optionss);
  }, [subCategories]);

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  //hundle actions functions=======================================================================
  const handleImageChange = (e) => {
    e.preventDefault();
    setImages((prevImages) => [...prevImages, e.target.files[0]]);
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  function hundleOnClickColor(e) {
    console.log(colors);
    const colorstable = [...colors];
    colorstable[colorstable?.length - 1] = newColor;
    colorstable.push("#333");
    setcolors(colorstable);
    setnewColor("#333");
  }
  function hundleOnChangeColor(e) {
    setnewColor(e.target.value);
  }
  function hundleOnClickDeleteColor(index) {
    if (index === colors.length - 1) {
      const colorstable = colors.filter((item, i) => i != index);
      setnewColor(colorstable[colorstable.length - 1]);
      setcolors(colorstable);
    } else {
      const colorstable = colors.filter((item, i) => i != index);
      setcolors(colorstable);
    }
  }

  const hundleClickupdate = async () => {
    const formData = new FormData();
    formData.append("title", title_input.current.value);
    //Usage example:
    console.log(images);
    let imageCover;
    if (!images[0].name && images[0]?.startsWith("http")) {
      await convertURLtoFile(images[0]).then((res) => {
        imageCover = res;
      });
    } else {
      imageCover = images[0];
    }
    formData.append("imageCover", imageCover);
    console.log(images);
    for (let i = 1; i < images.length; i++) {
      const element = images[i];
      let imageConvert;
      if (!images[i].name && images[i]?.startsWith("http")) {
        await convertURLtoFile(element).then((res) => (imageConvert = res));
      } else {
        imageConvert = element;
      }
      console.log(imageConvert);
      formData.append("images", imageConvert);
    }
    formData.append("category", categoryId);
    formData.append("description", description_input.current.value);
    formData.append("quantity", quantity_input.current.value);
    formData.append("price", price_input.current.value);
    formData.append("sold", price_after_input.current.value);

    subCategoriesId.forEach((item) => {
      formData.append("subcategories", item.value);
    });
    const colorstable = [...colors];
    if (newColor !== "initial") {
      colorstable[colorstable?.length - 1] = newColor;
    }
    setcolors(colorstable);
    colorstable.forEach((item) => {
      formData.append("colors", item);
    });
    formData.append("brand", brandId);
    console.log(images);
    await updateProduct({ id: idUpdate, product: formData });
  };
  //clear the data after the success of addition
  useEffect(() => {
    if (updateSuccess) {
      title_input.current.value = "";
      description_input.current.value = "";
      price_after_input.current.value = "";
      price_input.current.value = "";
      quantity_input.current.value = "";
      setImages([]);
      subcatinput.current.clearValue();
      catinput.current.setValue([]);
      brandinput.current.setValue([]);
      setcolors([]);
    }
  }, [updateSuccess]);

  function hundleonChangeCategory(selected) {
    setcategoryId(selected.value);
    subcatinput.current.clearValue();
  }
  function hundleonChangeSubCategories(selected) {
    setsubCategoriesId(selected);
  }
  function hundleOnChangeBrand(selected) {
    setbrandId(selected.value);
  }
  return (
    <div className="position-relative">
      <div style={{ direction: "rtl" }}>
        {updateSuccess ? (
          <SuccessMessage message={"Product Updated Successfully"} />
        ) : (
          ""
        )}
        {updateIsError ? <ErrorMessage error={updateError} /> : ""}
      </div>
      <h2 className="color-main mb-3">Update Product</h2>
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          placeholder="product discount amount (optional)"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
        ref={subcatinput}
        onChange={hundleonChangeSubCategories}
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
        {colors?.map((item, index) => {
          if (index === colors.length - 1 && newColor !== "initial") {
            return (
              <label
                title="click to delete"
                onClick={() => hundleOnClickDeleteColor(index)}
                class="color-item rounded-circle"
                style={{ backgroundColor: `${newColor}` }}
                for="btnradio4"
              ></label>
            );
          }
          return (
            <label
              title="click to delete"
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
      <div className="ms-auto w-50">
        <Button
          className="mt-3 w-100  fw-semibold"
          variant="success"
          onClick={hundleClickupdate}
        >
          UPDATE THE PRODUCT
          {updateLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
      </div>
    </div>
  );
};

export default AdminUpdateProduct;
