import './App.css';
import './Styles/tienda.css'
import React,{useState} from 'react'
import Funciones from './Componentes/Funciones'
import Contenido from './Componentes/Contenidio'
import Header from './Componentes/Header'

function App() {

  const [stack,setStack] = useState("")

  return (
    <main className="app-tienda">
      <Header></Header>
      <Contenido value={stack}></Contenido>
      <Funciones onClickNumber={accion => {console.log("La funcion es: ",accion)
                                          setStack(accion)}}></Funciones>
    </main>
  );
}

export default App;
