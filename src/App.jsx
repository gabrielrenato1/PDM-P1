import { Component } from "react"
import Busca from "./components/Busca"

class App extends Component {

  render(){
    return (
      <div>
          <div>
            <Busca dica='Digite um CEP'/>
          </div>
      </div>
      
    )
  }
  
}

export default App
