import React, { useState, useEffect } from 'react';

function App() {
  const  [data, setData] = useState([]);
  const [linguagem, setLing] = useState('');


  //Sempre que o segundo parametro for alterado, a o primeiro é adicionado
  useEffect(() => {
      localStorage.setItem('tech', JSON.stringify(data))
  }, [data]);

  useEffect(() => {
      const storageTech = localStorage.getItem('tech');
      if(storageTech){
          setData(JSON.parse(storageTech))
      }
  }, [])

  return (
      <>
      <div>
          <h1>Linguagens</h1>
          {data.map(l => (<li key={l}>{l}</li>))}
      </div>
          <input type="text" value={linguagem} placeholder='insira a linguagem' onChange={e => setLing(e.target.value)}/>
          <button type='button' onClick={() => setData([...data, linguagem])}> Adicionar </button>
      </>
  );
}

export default App;
