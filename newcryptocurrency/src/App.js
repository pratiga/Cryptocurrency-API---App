import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Exchanges,News, Cryptocurrencies, CryptoDetails,Homepage } from './components';
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <Sidebar>
   <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/exchange" element={<Exchanges/>}/>
       <Route path="/news" element={<News/>}/> 
      <Route path="/cryptocurrency" element={<Cryptocurrencies/>}/>
      <Route path="/cryptodetails" element={<CryptoDetails/>}/>

   </Routes>
   </Sidebar>
   
  )
}

export default App















// import React from "react";
// import { Routes, Route, Link } from 'react-router-dom';
// import {Layout, Typography, Space} from 'antd'
// import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News,Homepage } from './components';
// //import FetchNews from "./components/FetchNews";
// import Sidebar from './components/Sidebar'

// const App = () => {

//   return (
   
//        <div className="app">
//        <div className="navbar">
//          <Navbar />
//        </div>
//        <div className="main">
//        <Layout>
//          <div className="routes">
//          <Sidebar>
//          <Routes>
      
//          <Route path="/" element={<Homepage />} /> 
//          <Route path="/exchanges" element={<Exchanges />}>Exchange </Route>
//          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
//          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
//          <Route path="/news" element={<News /> } />
    
//            {/* <Routes exact path="/">
//              <Homepage />
//            </Routes> */}
//            {/* <Routes exact path="/exchanges">
//              <Exchanges />
//            </Routes>
//            <Routes exact path="/cryptocurrencies">
//              <Cryptocurrencies />
//            </Routes>
//            <Routes exact path="/crypto/:coinId">
//              <CryptoDetails />
//            </Routes>
//            <Routes exact path="/news">
//              <News />
//            </Routes> */}
      
//          </Routes>
//          </Sidebar>
//          </div>
//        </Layout>
  
//        <div className="footer">
//            <Typography.Title level={5} style={{ color:'black', textAlign: 'center'}}>
//            Cryptoverse <br />
//            All rights reserverd
//            </Typography.Title>
//            <Space>
//              <Link to="/">Home</Link>
//              {/* <Link to="/exchanges">Exchanges</Link>
//              <Link to ="/news">News</Link> */}
//            </Space>
//        </div> 
//        </div>
//      </div>
//   )
// }
//   export default App
