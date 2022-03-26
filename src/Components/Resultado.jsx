import styled from "@emotion/styled"

const Texto = styled.div `
    color: #FFF;
    font-family: 'Lato', sans-serif;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Imagen = styled.img `
    display: block;
    height: 150px;
`

const Parrafo = styled.p `
    font.size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p `
    font.size: 30px;
    span {
        font-weight: 700;
    }
`

const Resultado = ( { resultado, cripto } ) => {

    const {
        PRICE,
        HIGHDAY,
        LOWDAY,
        CHANGEPCT24HOUR,
        IMAGEURL,
        LASTUPDATE
    } = resultado;


  return (
    <Texto>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt={`Logo de ${cripto}`} />
        <div>
        <Precio>💲 El precio es de: <span>{PRICE}</span></Precio>
        <Parrafo>📈 Precio mas alto del dia: <span>{HIGHDAY}</span></Parrafo>
        <Parrafo>📉 Precio mas bajo del dia: <span>{LOWDAY}</span></Parrafo>
        <Parrafo>📊 Variacion Ultimas 24 horas: <span>{(CHANGEPCT24HOUR * 1).toFixed(2)}%</span></Parrafo>
        <Parrafo>💱 Ultima Actualización: <span>{LASTUPDATE}</span></Parrafo>
        </div>
    </Texto>
  )
}

export default Resultado