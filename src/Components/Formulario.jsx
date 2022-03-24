import styled from "@emotion/styled"
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas } from '../Data/Monedas.js'
import { useEffect, useState } from 'react'
import Error from "./Error"

const InputSubmit = styled.input `
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = ( { setMonedas, setMostrar, setResultado } ) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
    const [ cripto, SelectCripto ] = useSelectMonedas('Elige tu Cripto', criptos);

    useEffect(() => {
      const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        const arrayCriptos = resultado.Data.map( cripto => {

            const objeto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
            return objeto;
        } )
        setCriptos(arrayCriptos)
      }
      consultarAPI();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([ moneda, cripto ].includes('')) {
            setError(true);
            setMostrar(false);
            setResultado({});
            setTimeout(() => {
                setError(false);
            }, 3000);
        }

        setMonedas( {
            moneda,
            cripto
        } )

    }
    

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form
            onSubmit={handleSubmit}
        >
            <SelectMonedas/>
            <SelectCripto/>
            <InputSubmit type="submit" value='Cotizar' />
        </form>
    </>
  )
}

export default Formulario