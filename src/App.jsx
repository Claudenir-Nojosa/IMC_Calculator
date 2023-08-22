import { useState } from 'react'
import TabelaIMC from './components/TabelaIMC'
import Peso from './components/Peso'
import Altura from './components/Altura'
import CalcularIMC from './components/CalcularIMC'
import ResultadoIMC from './components/ResultadoIMC'

function App() {


const [pesos,setPesos]=useState(0)
const [alturas,setAlturas]=useState(0)
const [resultados,setResultados]=useState(0)

  return (
    <>
      <Peso peso={pesos} setPeso={setPesos}/>
      <Altura altura={alturas} setAltura={setAlturas}/>
      <CalcularIMC peso={pesos} altura={alturas} setResultado={setResultados}/>
      <ResultadoIMC r={resultados}/>
      <TabelaIMC/>
    </>
  )
}

export default App
