import React from 'react'
import CategoriesNav from '../components/results-page/CategoriesNav'
import { Container } from 'react-bootstrap'
import Filter from '../components/results-page/Filter'
import ProductResultLine from '../components/results-page/ProductResultLine'

const ResultsPage = () => {
    let datatwo = [1,1,1,1,1,1,1,1]

  return (
    <Container>
        <CategoriesNav/>
        <div className='row mt-2'>
            <div className='col-0 col-md-3 col-lg-2'><Filter/></div>
            <div className='col-12 col-md-9 col-lg-10'><ProductResultLine data={datatwo}/></div>
        </div>
    </Container>
  )
}

export default ResultsPage