import React from 'react';
import foto1 from '../img/fo1.png'
import foto2 from '../img/fo2.jpg'
import foto3 from '../img/fo3.jpg'

function Carro() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={foto1} className="d-block w-100" alt="Descripción de la imagen" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Fernando Zamora</h5>
            <p>Los juegos son mi gran pasatiempo, Terraria es un de mis juegos favoritos.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={foto2} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Arturo Figueroa</h5>
            <p>El deporte que más me llama la atención es el volleyball.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={foto3} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Diego Espinoza</h5>
            <p>Mi pasión son los autos, desde pequeño siempre me han gustado</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carro;
