import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News,Homepage } from './components';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      <Layout>
        <div className="routes">
        <Routes>
          
        <Route path="/" element={<Homepage />} /> 
        <Route path="/exchanges" element={<Exchanges />}>Exchange </Route>
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News /> } />
        
          {/* <Routes exact path="/">
            <Homepage />
          </Routes> */}
          {/* <Routes exact path="/exchanges">
            <Exchanges />
          </Routes>
          <Routes exact path="/cryptocurrencies">
            <Cryptocurrencies />
          </Routes>
          <Routes exact path="/crypto/:coinId">
            <CryptoDetails />
          </Routes>
          <Routes exact path="/news">
            <News />
          </Routes> */}
          
        </Routes>
        </div>
      </Layout>
     
      <div className="footer">
          <Typography.Title level={5} style={{ color:'black', textAlign: 'center'}}>
          Cryptoverse <br />
          All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to ="/news">News</Link>
          </Space>
      </div> 
      </div>
    </div>
  )
}

export default App


