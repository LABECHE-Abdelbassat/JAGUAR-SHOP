import React from 'react'
import { Form } from 'react-bootstrap'

const Filter = () => {
  return (
    <div>
        <div className='my-2 align-items-center'>
        <div className='text-main m-0 p-2 fs-5'>FILTER</div>
        <div className='flex-fill line'></div>
      </div>
      <div class="gap-2 mt-3" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" name="btncheckbox3" id="btncheckbox1" autocomplete="off" ></input>
    <label class=" d-flex align-items-center gap-2 fs-5 fw-meduim mt-1 fliter-check" htmlFor="btncheckbox1">
        <div className='check-shape'></div>
        first cat</label>
    </div>
      <div class="gap-2 mt-2" role="group" aria-label="Basic checkbox toggle button group">
      <div className='flex-fill line'></div>
    <input type="checkbox" className="btn-check" name="btncheckbox3" id="btncheckbox1" autocomplete="off" ></input>
    <label class=" d-flex align-items-center gap-2 fs-5 fw-meduim mt-1 fliter-check" htmlFor="btncheckbox1">
        <div className='check-shape'></div>
        first cat</label>
    </div>
      <div class="gap-2 mt-2" role="group" aria-label="Basic checkbox toggle button group">
      <div className='flex-fill line'></div>
      <Form.Control
      type='number'
              placeholder="Search"
              className="price-input mt-3"
              aria-label="Search"
            />
      <Form.Control
      type='number'
              placeholder="Search"
              className="price-input mt-2"
              aria-label="Search"
            />

    </div>
    
    </div>
  )
}

export default Filter