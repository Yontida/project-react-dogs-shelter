import React from "react";

function NavBar({ onChangePage }) {
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <nav className="button">
            <a className="button-1" href="/">All Dog</a>
            <a className="button-2" href="/new">Add New Dog</a>
            <a className="button-3" href="/fosters">Fosters</a>
        </nav>
    );
}

export default NavBar;