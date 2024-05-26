import React, { useRef, useState } from 'react';//import react library from react which has 2 hooks...useref and usestate
// (hook......allow to add state in FC,before hook we just add state into class components not in fc)
import "./style.css";

export const Navbar = () => {
    const searchRef = useRef();//use for reference...useref is a hook that allow we can access and manipulate elemetn directly

    const [isNavbarActive, setNavbarActive] = useState(false);//this line initlize the variable isnavbaractive
    // which has by default value false.setNavbarActive is a fun that update the value of isNavbarActive

    const searchHandler = () => {
        searchRef.current.classList.toggle("active");//toggle basically add the element and remove it if active class
        // is present it hide the elemetn and if it is not present it visible the Element.
    };

    return (
        <div id='navbar'>
            <header className="header">
                <a href="#" className="logo"></a>
                <img src="https://codingcirculate-restaurant-design.on.fleek.co/static/media/logo.bbdaaa34654aff804cc3.png" alt="Logo" />
                <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#menu">menu</a>
                    <a href="#products">products</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                    <a href="#blogs">blogs</a>
                </nav>
                <div className="icons">
                    <i className="fa-solid fa-search" onClick={searchHandler}></i>
                    <i className="fa-solid fa-cart-shopping" id="new"></i>
                    <i className="fas fa-bars" id="menu-btn" ></i>
                </div>
                <div className="search-form" ref={searchRef}>
                    <input type="search" placeholder="search here..." id="search-box" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </div>
            </header>
        </div>
    );
}

export default Navbar;