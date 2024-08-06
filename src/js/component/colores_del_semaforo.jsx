import React, { useState } from "react";


// const losColores = ["red", "yellow", "green"] como se haría con un array? no se si quiero saberlo


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
    // la constante agregarMorado hace que setPurple cambie de su estado FALSE (en la constante que hemos hecho para el morado) a TRUE con !(cambia el estado a lo contrario)
    const agregarMorado = () => {
        setPurple(!purple);
    }


    return (
        <div>
            <div className="fondo container-fluid">

                <div className="palo-semaforo"></div>

                <div className="semaforo container">

                    <button onClick={() => setColores("red")} className={`red ${colores === "red" ? "iluminar" : " "}`}>
                    </button>

                    <button onClick={() => setColores("yellow")} className={`yellow ${colores === "yellow" ? "iluminar" : " "}`}>
                    </button>

                    <button onClick={() => setColores("green")} className={`green ${colores === "green" ? "iluminar" : " "}`}>
                    </button>

                    {/* preguntar por el renderizado condicional, esto es que si purple es verdadero y boton tambien, si funciona? tenía entendido
                    que && es que deben ser las dos opciones verdaderas para que todo se convierta en verdadero, eso quiere decir el renderizado condicional??? */}

                    {purple && (
                        <button onClick={() => setColores("purple")} className={`purple ${colores === "purple" ? "iluminar" : ""}`}>
                        </button>
                    )}

                </div>
                <div className="botones pt-5">
                    <button onClick={cambiarColores} className="boton-cambio">
                        Click para cambio!
                    </button>

                    <button onClick={agregarMorado} className="boton-morado">
                        Click para morado!
                    </button>
                </div>
            </div>

        </div>
    )
}
export default ColoresDelSemaforo;