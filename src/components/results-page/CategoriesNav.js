import React from 'react'
import { Container } from 'react-bootstrap'

const CategoriesNav = () => {
  return (
    <div class="gap-2 mt-2 d-flex" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio2" id="btnradio1" autocomplete="off" ></input>
    <label class="py-1 px-4 btn btn-outline-success" for="btnradio1">first cat</label>

    <input type="radio" class="btn-check" name="btnradio2" id="btnradio2" autocomplete="off" ></input>
    <label class="py-1 px-4 btn btn-outline-success" for="btnradio2">first cat</label>

    <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off"></input>
    <label class=" py-1 px-4 btn btn-outline-success" for="btnradio3">first cat</label>
    </div>
  )
}

export default CategoriesNav