import React from 'react';
import { Card } from 'primereact/card';

const LocalidadeLista = ({localidades}) => {
  return (
    <div style={{ width: '50%', marginTop: '20px' }}>
      {localidades.map((localidade, index) => (
        <Card key={index} 
        title={localidade.cep} 
        subTitle={`${localidade.logradouro}`}
        style={{ marginBottom: '10px',}}>
          <p>{`${localidade.bairro}`}</p>
          <p>{`${localidade.localidade}/${localidade.uf}`}</p>
        </Card>
      ))}
    </div>
  );
};

export default LocalidadeLista;