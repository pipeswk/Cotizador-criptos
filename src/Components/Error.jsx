import styled from "@emotion/styled"

const Texto = styled.div `
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    text-transform: uppercase;
    border-radius: 1px;
    text-align: center;
    font-family: 'lato', sans-serif;
    font-weight: 700;   
`

const Error = ( { children } ) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error