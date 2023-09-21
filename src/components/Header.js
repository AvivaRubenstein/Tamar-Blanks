import React from 'react';
import {Link} from 'react-router-dom';
require('../Assets/styles/header.css');
// TODO: replace this file with updated CV pdf
const cv = require('../Assets/SampleCV.pdf');

export default function Header(){
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Tamar Blanks</div>
            <Link className="navLink navbar-item" to="/"> Home </Link>
            <Link className="navLink navbar-item" to='/Research'> Research </Link>
            <Link className="navLink navbar-item" to='/Teaching'> Teaching </Link>
            <Link className="navLink navbar-item" to='/Outreach'> Outreach </Link>
            {/* button for CV download */}
            <a id="cv-button" className="navbar-item" href={cv} download>CV</a>
            
        </header>
    )
}