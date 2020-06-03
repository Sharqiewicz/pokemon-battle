import React, { FunctionComponent } from 'react';
import Loading from './components/loading/Loading'
import api from './components/api/api-pokemon'




type PokeProps = {}

type PokeState = {
  pokemon: Pokemon
}

type Pokemon = {
  name: string
}


class App extends React.Component <PokeProps, PokeState>  {
  constructor(props: any){
      super(props);
      this.state = {
        pokemon: {name: 'loading'}
      }
      this.getPokemon = this.getPokemon.bind(this);

  }

  getPokemon = async (name: string) =>{
    const pokemon: Pokemon = await api.get('pikachu');
    this.setState( {
      pokemon: pokemon
    }
  , () => {  console.log(this.state.pokemon) })
    return pokemon;
  }

  componentDidMount(){
    this.getPokemon('pikachu');
  }
  render(){
    return (
      <div className="App">
        <h2>pokemon battle</h2>
        <h2>{this.state.pokemon ? this.state.pokemon.name: 'noah'}</h2>
      </div>
    );
  }
}

export default App;
