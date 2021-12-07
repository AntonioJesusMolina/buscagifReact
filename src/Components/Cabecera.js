import React from "react";
import "./Cabecera.css";

const cabecera = () => {
  return (
    <div id="entrada">
      <input id="in" type="text" placeholder="Buscar" size="50" />
      <button id="boton" onclick="buscar()">
        Search
      </button>
      <button id="boton2" onclick="mostrarHistorial()">
        Historial
      </button>
      <button id="boton3" onclick="borrarHistorial()">
        Borrar historial
      </button>
      <button id="boton4" onclick="guardarDatos()">
        Guardar Datos
      </button>
    </div>
  );
};
export default cabecera;
