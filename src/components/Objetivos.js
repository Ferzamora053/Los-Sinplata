import React from 'react';

function Objetivos () {
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-sm">
                <Objetivo titulo={1} descripcion={"Como equipo, nuestro deseo unificado es adentrarnos en el vasto mundo del desarrollo web y conquistar el dominio de las estructuras fundamentales de HTML."} imagen={"https://programacion.net/files/article/20161223111243_html5.jpg"}/>
            </div>
            <div className="col-sm">
                <Objetivo titulo={2} descripcion={"Como equipo, queremos adquirir un profundo conocimiento de los elementos esenciales de CSS, ya que nos permite dotar de estilo y elegancia a nuestras creaciones en línea."} imagen={"https://wwwhatsnew.com/wp-content/uploads/2021/01/aprender-css.jpg"}/>
            </div>
            <div className="col-sm">
                <Objetivo titulo={3} descripcion={"Frontend es el rostro de cualquier experiencia digital, y es nuestra puerta de entrada para cautivar y llamar a los usuarios con interfaces intuitivas que son visualmente atractivas para muchos."} imagen={"https://img.freepik.com/vector-premium/vector-ocupacion-desarrollador-desarrollo-front-end-hombre-joven-que-trabaja-computadora-negocio-profesional-desarrollo-front-end-personaje-nino-trabajador-desarrollando-ilustracion-dibujos-animados-plana_87720-5394.jpg?w=2000"}/>
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



