import React from 'react'
import { Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutLined, MoneyCollectOutlined, BulbOutLIned, FundOutlined,} from '@ant-design/icons'
import icon from './images/cryptocurrency.jpg';
const Navbar = () => {
  return (
    <div className='nav-container'>
    <div className='logo-container'>
    <Avatar src={icon} size="large" />
    <Typography.Title level={2} className="logo">
        <Link to="/">Cryptoverse</Link>
    </Typography.Title>
    </div>
    </div>
  )
}

export default Navbar