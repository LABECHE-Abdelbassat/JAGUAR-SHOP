import React, { useEffect, useRef, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { useGetAllBrandsQuery } from "../../reduxQuery/APIs/brandApi";

const Filter = ({ modifyFilter }) => {
  const [brand, setbrand] = useState(localStorage.getItem("brand"));

  const [brandsIds, setbrandsIds] = useState([]);
  useEffect(() => {
    if (brand?.length > 0) {
      let brandsidtable = brandsIds;

      brandsidtable.push(brand);
      setbrandsIds(brandsidtable);
      hundleClickApplyFilter();
    }
  }, [brand]);
  const max_input = useRef();
  const min_input = useRef();
  const reset_input = useRef();
  // const {data:subCategories}=useGetAllSubCategoriesOnCategoryQuery(categoryId);
  const { data: brands } = useGetAllBrandsQuery();

  async function hundleClickApplyFilter() {
    let params = ``;
    brandsIds.forEach((item) => {
      params = params + `&brand=${item}`;
    });
    if (min_input.current.value.length > 0) {
      params = params + `&price[gte]=${min_input.current.value}`;
    }
    if (max_input.current.value.length > 0) {
      params = params + `&price[lte]=${max_input.current.value}`;
    }
    modifyFilter(params);
  }
  async function hundleClickClearFilter(e) {
    localStorage.removeItem("brand");
    setbrand("");
    modifyFilter("");
    min_input.current.value = "";
    max_input.current.value = "";
    setbrandsIds([]);
    reset_input.current.click();
  }
  async function hundleChangeBrands(e) {
    let brandsidtable = brandsIds;
    if (e.target.checked) {
      brandsidtable.push(e.target.value);
    } else {
      brandsidtable = brandsidtable.filter((item) => item !== e.target.value);
      if (e.target.value === brand) {
        localStorage.removeItem("brand");
        setbrand("");
      }
    }
    setbrandsIds(brandsidtable);
  }

  return (
    <div>
      <Accordion className="accor" defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="my-2 align-items-center">
              <h5 className="text-main m-0 head-filter">FILTER</h5>
            </div>
          </Accordion.Header>
          <div className="flex-fill line"></div>

          <Accordion.Body>
            <div
              class="gap-2 mt-3"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <form>
                {brands?.data?.map((item, index) => {
                  return (
                    <Form.Check
                      type={"radio"}
                      defaultChecked={item._id === brand}
                      value={`${item?._id}`}
                      name="brand"
                      onChange={hundleChangeBrands}
                      id={`brand-radio-${index}`}
                      label={`${item.name}`}
                    />
                  );
                })}
                <input
                  type="reset"
                  ref={reset_input}
                  style={{ display: "none" }}
                  value={"reset"}
                />
              </form>
            </div>
            {/* <div class="gap-2 mt-2" role="group" aria-label="Basic checkbox toggle button group">
      <div className='flex-fill line'></div>
      <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox`}
            label={`default checkbox`}
            className='mt-2'
          />
          <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox`}
            label={`default checkbox`}
            
          />
    </div> */}
            <div
              class="gap-2 mt-2"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <div className="flex-fill line"></div>
              <Form.Control
                type="number"
                placeholder="min price"
                className="price-input mt-3"
                aria-label="Search"
                ref={min_input}
              />
              <Form.Control
                type="number"
                placeholder="max price"
                className="price-input mt-2"
                aria-label="Search"
                ref={max_input}
              />
            </div>
            <div className="flex-fill line mt-3"></div>

            <Button
              onClick={hundleClickApplyFilter}
              variant="outline-success"
              className="w-100 mt-3"
            >
              Apply Filter
            </Button>
            <Button
              onClick={hundleClickClearFilter}
              variant="outline-danger"
              className="w-100 mt-2"
            >
              Clear Filter
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Filter;
