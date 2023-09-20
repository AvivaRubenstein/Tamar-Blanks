import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Tamar Blanks</div>
            <Link className="navLink" to="/"> Home </Link>
            <Link className="navLink" to='/Research'> Research </Link>
            <Link className="navLink" to='/Teaching'> Teaching </Link>
            <Link className="navLink" to='/Outreach'> Outreach </Link>
            <button>CV</button>
            {/* button for CV download here */}
        </header>
    )
}