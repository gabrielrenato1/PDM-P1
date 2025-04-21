import { Component } from "react"
import Busca from "./components/Busca"
import LocalidadeLista from "./components/LocalidadeLista"
import ViaCepClient from "./utils/ViaCepClient"
import ChartCepsConsultados from "./components/ChartCepsConsultados"

class App extends Component {
  
  state = {
    chartData: {},
    localidades: []
  }

  cepsConsultados = {}

  buscarCep = (inputCep) => {

    const cep = inputCep.replace(/\D/g, '')

    if(cep.length != 0 || cep.length == 8){

      ViaCepClient.get(cep + "/json").then(result => {
        
        if(result.data.erro){
          alert("Erro ao consultar o CEP: " + inputCep)
        }else{
          
          if (this.cepsConsultados.hasOwnProperty(result.data.uf)){
            this.cepsConsultados[result.data.uf]++
          }else{
            this.cepsConsultados[result.data.uf] = 1
          }

          this.setState(prevState => ({
            chartData: {
              labels: Object.keys(this.cepsConsultados),
              datasets: [
                {
                  data: Object.values(this.cepsConsultados),
                }
            ],
            },
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
      <div style={{display: 'flex'}}>
        <div style={{width: '50%', padding: '20px'}}>
          <div>
            <Busca buscarCep={this.buscarCep} dica='Digite um CEP'/>
          </div>
          <div>
            <LocalidadeLista localidades={this.state.localidades}/>
          </div>
        </div> 
         <div style={{width: '50%', textAlign: 'center'}}>
          <ChartCepsConsultados chartData={this.state.chartData}/>
        </div>
      </div> 
    )
  }
}

export default App
