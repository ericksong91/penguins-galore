import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="Navbar">
            <h3>Navigation</h3>
            <nav className="Links">
                <Link to="/" style={{ padding: 5 }}>
                    Home
                </Link>
                <Link to="/penguins" style={{ padding: 5 }}>
                    Penguins
                </Link>
                <Link to="/about" style={{ padding: 5 }}>
                    About
                </Link>
            </nav>

        </div>
    );
}

export default Navbar;