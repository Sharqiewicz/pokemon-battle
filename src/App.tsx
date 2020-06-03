import React, { useState, useEffect } from 'react';
import Loading from './components/loading/Loading'
import api from './components/api/api-pokemon'
import Pokemon from './components/interfaces/PokemonInterface'


type AppProps = {

}

type PokeProps = {
  pokemon: Pokemon | boolean
}

type PokeState = {
  pokemon: Pokemon | boolean;
}

type AppState = {
  pokemon: Pokemon | boolean
}


function PokemonDashboard ({pokemon}: PokeProps)  {

  console.log(pokemon);

  let currentPokemon: Pokemon | boolean; let setCurrentPokemon: Function;
   [currentPokemon, setCurrentPokemon] = useState(pokemon);

  useEffect(() => { setCurrentPokemon(pokemon) }, [pokemon]);

    // PROBLEM WITH INSTANCE OF
    if( pokemon ){
      // @ts-ignore
      const abilities = pokemon.abilities.map( ability => <h3>{ability.ability.name}</h3>)

      return (
      <>
        <h2>pokemon battle</h2>
        <h2>{
          // @ts-ignore
          pokemon.name}</h2>
        <h3>Abilities</h3>
        {abilities}
      </>
      )
    }
    else{
      return <Loading/>
    }
}


class App extends React.Component<AppProps, AppState>{

    constructor(props: any){
      super(props);
      this.state = {
        pokemon: false,
      }

      this.getPokemon = this.getPokemon.bind(this);
    }

    getPokemon = async (name: string) =>{
      const pokemon: Pokemon = await api.get('pikachu');
      this.setState( state =>  {
        return { pokemon }
      })
    }

    componentDidMount(){
      this.getPokemon('pikachu');
    }

    render(){
      console.log(this.state)
      return (
        <div className="App">
          <PokemonDashboard pokemon={this.state.pokemon}/>
        </div>
      );
    }
}

export default App;
