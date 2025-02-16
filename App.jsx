import { useEffect, useState } from "react";
import "./App.css";

function App(){
  const [posicion, setPosicion] = useState ({x: 0, y:0});
  useEffect(() => {
    const manejarPosicion = (evento) => {
      setPosicion({x: evento.clientX, y: evento.clientY});
    }
    window.addEventListener("mousemove", manejarPosicion);

    return () => {
      window.removeEventListener("mousemove", manejarPosicion);
    };
  }, []);
  return (
    <div className="cuadroRaton" style={{
      left: `${posicion.x}px`,
      top: `${posicion.y}px`,
    }}
    >
      <h1>La posicion del raton es:</h1>
      <h2>x: {posicion.x} y: {posicion.y}</h2>
    </div>
  )
}

export default App;