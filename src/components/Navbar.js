import React from 'react';

function NavBar(){
    // Podemos poner codigo JS aca
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Indice</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Miembros />
            </ul>
            </div>
        </div>
        </nav>
    );
}

function Miembros (){
    const lista = [
        {nombre: "Miembro 1"},
        {nombre: "Miembro 2"},
        {nombre: "Miembro 3"},
    ]
    return(
        lista.map((miembro) => <Miembro nombre={miembro.nombre} />)
    )
}

function Miembro (props){
    const {nombre} = props;
    return(
        <a className="nav-link" href="#">{nombre}</a>
    );
}

export default NavBar;