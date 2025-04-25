import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {InputMask} from 'primereact/inputmask'

export default class Busca extends Component {

    state = {
        termoDeBusca: null
    }

    onTermoAlterado = (event) => {
        this.setState({termoDeBusca: event.target.value})
    }

    aoClicarEmOk = () => {
        this.props.buscarCep(this.state.termoDeBusca);
    }

  render() {
    return (
      <div
        style={{display: 'flex', flexDirection: 'column'}}>
            <InputMask
                style={{marginBottom: '10px'}}
                maxLength={9}
                mask='99999-999'
                placeholder={this.props.dica}
                onChange={this.onTermoAlterado}
                value={this.state.termoDeBusca}/>
            <Button
            label='OK'
            onClick={this.aoClicarEmOk}
            />
      </div>
    )
  }
}

Busca.defaultProps = {
    dica: 'Digite um CEP'
}
