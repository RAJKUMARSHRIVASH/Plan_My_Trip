import React from 'react'
import { Routes, Route } from "react-router-dom"
import InvalidPage from '../pages/InvalidPage'
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
import GetDataPage from '../pages/GetDataPage'


function Allroute() {
    return (
        <Routes>
            <Route path='*' element={<InvalidPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/maketrip' element={<PostPage />} />
            <Route path='/gettrip' element={<GetDataPage />} />
        </Routes>
    )
}

export default Allroute