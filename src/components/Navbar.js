import React from 'react';

function NavBar(){
    // Podemos poner codigo JS aca
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Indice</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Miembro 1</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Miembro 2</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Miembro 3</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;