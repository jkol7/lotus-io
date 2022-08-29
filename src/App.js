import React from 'react'
import './styles.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './pages/Home'
import PoseDetail from './pages/PoseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (

        <Box width='400px' sx={{ width: {xl: '1488px' }}} m='auto'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pose/:id' element={<PoseDetail />} />
            </Routes>
            <Footer/>
        </Box>
    )
}


export default App