import React from 'react';

function NavBar(){
    // Podemos poner codigo JS aca
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Indice</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Miembro 1</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Miembro 2</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Miembro 3</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;