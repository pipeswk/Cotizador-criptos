import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label `
    color: #FFF;
    display: block;
    font-size: 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin: 15px 0;

`

const Select = styled.select `
    width: 100%;
    font-size: 18px;
    padding: 12px;
    margin: 0 0 10px 0;
    border-radius: 10px;
`

const useSelectMonedas = (label, monedas) => {

    const [state, setState] = useState('');

  const SelectMonedas = () => (
      <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={ e => setState(e.target.value) }
        >
            <option value="">--Seleccionar--</option>
            {monedas.map( (moneda) => (
                <option
                    key={moneda.id}
                    value={moneda.id}
                >
                    {moneda.nombre}
                </option>
            ) )}
        </Select>
      </>
  )
  return [ state, SelectMonedas ];
}

export default useSelectMonedas