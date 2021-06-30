import React, { useState } from 'react';
import Results from '../../components/Results/index';
import { useDispatch } from 'react-redux';
import { getCep } from '../../store/modules/searchCep/action';
 
function Home() {

  const dispatch = useDispatch();
  const [cep, setCep] = useState('');

  const searchCep = () => dispatch(getCep(cep));
 
  return (
    <>
      <div className='search'>
        <h1>Seja bem-vindo(a)!</h1>
        <label htmlFor="">Digite seu CEP</label>
        <input 
          type="text" 
          name="cep"
          value={cep && cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          onClick={() => searchCep()}
        >
          Buscar CEP
        </button>
      </div>
      <div className='results-search'>
        <Results cep={cep}/>
      </div>
    </>
  );
}

export default Home;