import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import TheNav from '../../components/all/TheNav'
import TheNavAdmin from '../../components/admin/TheNavAdmin'

export const AdminPage = ({setadminsearch,adminsearch}) => {
    const [show, setshow] = useState(false)
    function modifyShow(){
        setshow((show)=>!show);
    }
  return (
    <div className='position-relative'>
        
        <div className=" d-flex">
            {show ? <div className='sidebar-cont active'>
            <SideBarAdmin/>

            </div> :<div className='sidebar-cont'>
            <SideBarAdmin/>

            </div>}
          <div style={{flexBasis:"100%"}}>
            <TheNavAdmin modifyShow={modifyShow} setadminsearch={setadminsearch} adminsearch={adminsearch}/>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}
