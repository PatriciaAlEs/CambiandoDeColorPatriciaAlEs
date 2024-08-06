//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import ColoresDelSemaforo from "./component/colores_del_semaforo.jsx";

// let button =  document.querySelector("button")
// button.addEventListener("click", miprimercolor)

//render your react application
const miConstante = ReactDOM.createRoot(document.querySelector('#app'))

miConstante.render(<ColoresDelSemaforo/>)
