import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import UserPage from '../Page/UserPage'
import RolPage from '../Page/RolPage'
import HomePage from '../Page/HomePage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='usuarios' element={<UserPage></UserPage>}></Route>
          <Route path='home' element={<HomePage></HomePage>}></Route>
          <Route path='roles' element={<RolPage></RolPage>}></Route>
        </>
      </Routes>
    </BrowserRouter>
  )
}

export default Router