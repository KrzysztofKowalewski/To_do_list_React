import React, { Component } from 'react'

class Wpis extends Component{

    state = {
        wpisy: [
            {id: '1', czyzrobione: true, tytul : 'Nauczyć się reacta'},
            {id: '2', czyzrobione: false, tytul : 'Zaliczyć praktyki'}
        ],
        wartoscinputa: ''
        
    }


    skonczzadanie(id){
        const index = this.state.wpisy.findIndex(x => x.id == id)
        const pomocnicza = this.state.wpisy
        pomocnicza[index].czyzrobione = true

        this.setState({wpisy: pomocnicza})
    }
    
    dodajzadanie(){
        const zadanko = {
            id: Math.random(),
            tytul: this.state.wartoscinputa
        }
        const nowyelement = [zadanko, ...this.state.wpisy]
        this.setState({wpisy: nowyelement})
    }

    refresh(event){
        const nowawartosc = event.target.value
        this.setState({wartoscinputa: nowawartosc})
    }

    usun(id){
        console.log(id)
        const index = this.state.wpisy.findIndex(x => x.id == id)
        var array = [...this.state.wpisy];
        array.splice(index, 1);
        this.setState({wpisy: array})
    }
    
    render(){
        const elementy = this.state.wpisy.map(e => {
            return (
            <div className={`wpis ${e.czyzrobione ? 'zrobione' : ''}`} key = {e.id}>
                <h2>{e.tytul}</h2>
                <button onClick={() => this.skonczzadanie(e.id)}>Zrobione</button>
                <button onClick={() => this.usun(e.id)}>Usuń wpis</button>
            </div>
            )
        })
        
        return(
            <div>
                <div id='add_tasks'>
                    <p>Wpisz nazwę zadania</p>
                    <input type = "text" value={this.state.wartoscinputa} onChange={this.refresh.bind(this)}></input>
                    <button onClick={this.dodajzadanie.bind(this)}>Dodaj zadanie</button>
                </div>
                {elementy}
            </div>
        )
    }
}

export default Wpis