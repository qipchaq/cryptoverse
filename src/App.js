import { Layout, Space, Typography } from 'antd'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import { Navbar, Homepage, Cryptocurrencies, Exchanges, Cryptodetails, News } from './components'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path='/' element={<Homepage />} />
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route exact path='/exchanges' element={<Exchanges />} />
                            <Route exact path='/crypto/:coinId' element={<Cryptodetails />} />
                            <Route exact path='/news' element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All right reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App