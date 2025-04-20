import { Component } from "react"
import Busca from "./components/Busca"
import LocalidadeLista from "./components/LocalidadeLista"

class App extends Component {
  localidades = [
    {
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "unidade": "",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "estado": "São Paulo",
        "regiao": "Sudeste",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
      },
      {
        "cep": "01444-003",
        "logradouro": "Praça do Sol",
        "complemento": "lado ímpar",
        "unidade": "",
        "bairro": "Sol",
        "localidade": "Rio de Janeiro",
        "uf": "RJ",
        "estado": "Rio de Janeiro",
        "regiao": "Sudeste",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
      },
      {
        "cep": "03414-023",
        "logradouro": "Lago das Flores",
        "complemento": "lado ímpar",
        "unidade": "",
        "bairro": "Santiago",
        "localidade": "Minas Gerais",
        "uf": "MG",
        "estado": "Minas Gerais",
        "regiao": "Sudeste",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
      }
  ];

  render(){
    return (
      <div>
          <div>
            <Busca dica='Digite um CEP'/>
          </div>
          <div>
            <LocalidadeLista localidades={this.localidades}/>
          </div>
      </div>  
    )
  }
}

export default App
