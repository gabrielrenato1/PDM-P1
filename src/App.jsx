import { Component } from "react"
import Busca from "./components/Busca"
import LocalidadeLista from "./components/LocalidadeLista"
import ViaCepClient from "./utils/ViaCepClient"

class App extends Component {
  
  state = {
    localidades: []
  }

  buscarCep = (inputCep) => {

    const cep = inputCep.replace(/\D/g, '')

    if(cep.length != 0 || cep.length == 8){

      ViaCepClient.get(cep + "/json").then(result => {
        
        if(result.data.erro){
          alert("Erro ao consultar o CEP: " + inputCep)
        }else{
          this.setState(prevState => ({
            localidades: [result.data, ...prevState.localidades]
          }));
           
        }

      }).catch(error => {
        
        alert("Erro ao consultar o CEP: " + inputCep)

      })

    }else{

      alert("CEP " + inputCep + " inválido!")

    }

  }

  render(){
    return (
      <div>
          <div>
            <Busca buscarCep={this.buscarCep} dica='Digite um CEP'/>
          </div>
          <div>
            <LocalidadeLista localidades={this.state.localidades}/>
          </div>
      </div>  
    )
  }
}

export default App
