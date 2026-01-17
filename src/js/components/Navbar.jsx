import React from "react";

function Navbar() {
    return (
        <div className="container-fluid justify-content-center" style={{ width: "90%" }}>

            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body text-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Boostrap</a>
                    <div className="navbar-links">
                        <a className="navbar-brand" href="#">Home</a>
                        <a className="navbar-brand" href="#">About</a>
                        <a className="navbar-brand" href="#">Services</a>
                        <a className="navbar-brand" href="#">Contact</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar; 