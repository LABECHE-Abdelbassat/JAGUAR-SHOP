import React from 'react'
import { Form } from 'react-bootstrap'

const Filter = () => {
  return (
    <div>
        <div className='my-2 align-items-center'>
        <div className='text-main m-0 py-2 fs-5'>FILTER</div>
        <div className='flex-fill line'></div>
      </div>
      <div class="gap-2 mt-3" role="group" aria-label="Basic checkbox toggle button group">
      <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox`}
            label={`default checkbox`}
            
          />
          <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox1`}
            label={`default checkbox`}
            
          />
    </div>
      <div class="gap-2 mt-2" role="group" aria-label="Basic checkbox toggle button group">
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