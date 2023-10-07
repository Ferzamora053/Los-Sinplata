import React from 'react';

function Objetivos () {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm">
                    <Objetivo titulo={1} descripcion={"sdgsdgdgsgsd"} imagen={"https://picsum.photos/1500/1000"}/>
                </div>
                <div className="col-sm">
                    <Objetivo titulo={1} descripcion={"sdgsdgdgsgsd"} imagen={"https://picsum.photos/1500/1000"}/>
                </div>
                <div className="col-sm">
                    <Objetivo titulo={1} descripcion={"sdgsdgdgsgsd"} imagen={"https://picsum.photos/1500/1000"}/>
                </div>
            </div>
        </div>
    );
}

function Objetivo(props) {
    const {titulo, descripcion, imagen} = props;
    // Podemos poner codigo JS aca
    return (

    <div className="card text-bg-dark">
        <img src={imagen} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
        </div>
    </div>
    );
}

export default Objetivos;



