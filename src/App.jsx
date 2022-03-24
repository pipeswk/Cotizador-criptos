import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import imagenCriptos from './img/imagen-criptos.png'
import Formulario from './Components/Formulario'
import Resultado from './Components/Resultado'

const Contenedor = styled.div `
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img `
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1 `
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: #FFF;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 250px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }

`

function App() {

  const [monedas, setMonedas] = useState({});
  const { moneda, cripto } = monedas;
  const [resultado, setResultado] = useState({});
  const [mostrar, setMostrar] = useState(false);
  

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        setResultado(resultado.DISPLAY[cripto][moneda]);
      }
      cotizarCripto();
    }
  }, [monedas])

  useEffect(() => {
    if(Object.keys(resultado).length > 0) {
      setMostrar(true);
    }
  }, [resultado])
  
  

  return (
    <Contenedor>
      <Imagen
        src={imagenCriptos}
        alt='Imagen criptomonedas'
      />
      <div>
        <Heading>Cotiza Criptomonedas En Tiempo Real | Jupi.</Heading>
        <Formulario
          setMonedas={setMonedas}
          setMostrar={setMostrar}
          setResultado={setResultado}
        />
        {mostrar && (
          <Resultado
            resultado={resultado}
            cripto={cripto}
          />
        )}
      </div>
    </Contenedor>   
  )
}

export default App
