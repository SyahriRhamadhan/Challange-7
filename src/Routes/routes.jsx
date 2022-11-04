import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Home, Searchcar } from '../Page'

const Routepage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Searchcar' element={<Searchcar />}></Route >
            </Routes>
        </BrowserRouter>
    )
}
export default Routepage
