import React, { useEffect } from 'react';
import { returnData } from '../../store/modules/searchCep/action';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './style';

function Results() {

  const dispatch = useDispatch(); 

  const { cep, response } = useSelector(state => state.ceps);

  useEffect(() => {
    if(cep) {
      dispatch(returnData());
    }
  }, [cep, dispatch])
  
  return (
    <Container>
      <div className='results'>
        <label htmlFor="">Logradouro:</label>
        <input 
          type="text" 
          disabled
          value={response.logradouro}
        />
        <label htmlFor="">Complemento:</label>
        <input 
          type="text" 
          disabled
          value={response.complemento}
        />
        <label htmlFor="">Bairro:</label>
        <input 
          type="text"
          disabled
          value={response.bairro} 
        />
        <label htmlFor="">Localidade:</label>
        <input 
          type="text" 
          disabled
          value={response.localidade}  
        />
        <label htmlFor="">UF:</label>
        <input 
          type="text" 
          disabled
          value={response.uf}
        />
      </div>
    </Container>
  );
}

export default Results;