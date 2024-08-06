import React, { useState } from "react";


// const losColores = ["red", "yellow", "green"]

const ColoresDelSemaforo = () => {
    const [colores, setColores] = useState("red")
    const [purple, setPurple] = useState(false)


    const cambiarColores = () => {
        if (purple) {

            if (colores === "red") {
                setColores("yellow")
            }
            if (colores === "yellow") {
                setColores("green")
            }
            if (colores === "green") {
                setColores("purple")
            }
            if (colores === "purple") {
                setColores("red")
            }

        } else {
            if (colores === "red") {
                setColores("yellow")
            }
            if (colores === "yellow") {
                setColores("green")
            }
            if (colores === "green") {
                setColores("red")

            }
        }
    }

        const agregarMorado = () => {
            setPurple(!purple);
        }
    

    return (
        <div>
            <div className="fondo">

                <div className="palo-semaforo"></div>

                <div className="semaforo container">

                    <button onClick={() => setColores("red")} className={`red ${colores === "red" ? "iluminar" : " "}`}>
                    </button>

                    <button onClick={() => setColores("yellow")} className={`yellow ${colores === "yellow" ? "iluminar" : " "}`}>
                    </button>

                    <button onClick={() => setColores("green")} className={`green ${colores === "green" ? "iluminar" : " "}`}>
                    </button>

                    {/* preguntar por el renderizado condicional, esto es que si purple es verdadero y boton tambien, si funciona?  */}

                    {purple && (
                        <button onClick={() => setColores("purple")} className={`purple ${colores === "purple" ? "iluminar" : ""}`}>
                        </button>
                    )}

                </div>

                <button onClick={cambiarColores} className="boton-cambio">
                    Click!
                </button>

                <button onClick={agregarMorado} className="boton-morado">
                    Click para morado!
                </button>

            </div>

        </div>
    )
}
export default ColoresDelSemaforo;