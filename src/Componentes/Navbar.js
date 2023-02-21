import React, { useState, useEffect } from 'react';
import Home from '../img/svg/home.svg';
import Search from '../img/svg/search.svg';
import Person from '../img/svg/person.svg';
function Navbar() {

    return (
        <nav className='navbar'>
            <a href='/'><img src={Home}></img></a>
            <a href='/categorias'><img src={Search}></img></a>
            <a href='/perfil'><img src={Person}></img></a>
        </nav>
)

}export default Navbar;