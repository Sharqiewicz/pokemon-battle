import React, { FunctionComponent } from 'react';
import Loading from './components/loading/Loading'
import api from './components/api/api-pokemon'




type PokeProps = {}

type PokeState = {
  pokemon: Pokemon
}

type Ability = {
  name: string
}

type Abilities = {
  ability: Ability
}

type Pokemon = {
  name: string,
  height: number,
  base_experience: number,
  abilities: Abilities[]
}


class App extends React.Component <PokeProps, PokeState>  {
  constructor(props: any){
      super(props);
      this.state = {
        pokemon: {name: 'loading', height: 0, base_experience: 0, abilities: [ { ability: { name: "loading" }}]}
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
    const abilities = this.state.pokemon.abilities.map( ability => <h3>{ability.ability.name}</h3>)
    return (
      <div className="App">
        <h2>pokemon battle</h2>
        <h2>{this.state.pokemon.name}</h2>
        <h3>Abilities</h3>
        {abilities}
      </div>
    );
  }
}

export default App;
