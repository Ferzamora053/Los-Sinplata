import React from 'react';
import arturo from '../img/arturo.jpg'
import diego from '../img/diego.jpg'
import fer from '../img/fer.jpg'

function Usuarios() {
  // Podemos poner codigo JS aca
  return (
    <div className="container mt-3">
      <div className="card mt-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="mb-0 center-text mx-auto">
              <button
                id='btnMiembros'
                className="btn btn-primary mx-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Miembros
              </button>
            </p>
          </div>
          <div className="collapse row mt-3" id="collapseExample">
            <div className="col-sm">
              <Usuario nombre={"Arturo Figueroa"} foto={arturo}/>
            </div>
            <div className="col-sm">
              <Usuario nombre={"Diego Espinoza"} foto={diego}/>
            </div>
            <div className="col-sm">
              <Usuario nombre={"Fernando Zamora"} foto={fer}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Usuario(props) {
  const {nombre, foto} = props;

  return (
      <div className='card'>
        <img id="fotoMiembro" src={foto} className="card-img-top" alt="..."></img>
        <div className="card-body center-text mx-auto">
          <h5 className="card-title">{nombre}</h5>
        </div>
      </div>
  );
}

export default Usuarios;
