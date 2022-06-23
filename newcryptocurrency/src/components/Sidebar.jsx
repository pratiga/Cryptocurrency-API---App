import React,{useState} from 'react'
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaBars,
    FaRegNewspaper
}from "react-icons/fa"
import { NavLink } from 'react-router-dom'

function Sidebar({children}) {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name: "Homepage",
            icon:<FaTh/>
        },
        {
            path:"/cryptocurrency",
            name: "Cryptocurrencies",
            icon:<FaRegChartBar/>
        },
        {
            path:"/exchange",
            name: "Exchange",
            icon:<FaUserAlt/>
        },
        {
            path:"/news",
            name:"News",
            icon:<FaRegNewspaper/>
        },
       
        {
            path:"/comment",
            name: "Comment",
            icon:<FaCommentAlt/>
        },
        
    ]
  return (
    <div className='container'>
    <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar'>
    <div className='top_section'>
        <h1 style={{display: isOpen ? "block": "none"}} className='logo'> Logo </h1>
        <div style={{marginLeft: isOpen ? "50px": "0px"}}className='bars'>
        <FaBars onClick={toggle} />
        </div>
    </div>
    {
        menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className='icon'>{item.icon}</div>
                <div style={{display:isOpen ? "block": "none"}} className='link_text'> {item.name}</div>
            </NavLink>
        ))
    }
    </div>
    <main>{children}</main>
    </div>
  )
}

export default Sidebar