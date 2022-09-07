import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useEffect, useState } from "react";


function PokemonPage() {
const [pokemon,setPokemon]=useState([])
const[search,setSearch]=useState("")

function addPokemon(neww){
  setPokemon([...pokemon,neww]);
}


useEffect(()=>{
  fetch("http://localhost:3001/pokemon")
  .then(res=>res.json())
  .then(setPokemon)
},[])

const uska = pokemon.filter((poke) =>
    poke.name.includes(search))
  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search onChangeSki={setSearch} search={search} />
      <br />
      <PokemonCollection pokemon={uska}/>
    </Container>
  );
}

export default PokemonPage;
