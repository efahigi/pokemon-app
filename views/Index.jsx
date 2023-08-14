import React from 'react'
import pokemon from '../models/pokemon';
function Index(props) {
    return (
        <div>
            <h1><b>See All The Pokemons!</b></h1>
          {pokemon.map((p, i) => {
            return (
              <div key={i}>
                <a href={`/pokemon/${i}`}>
                  <h2>{pokemon[i].name}</h2>
                </a>
              </div>
            );
          })}
        </div>
      );
}
export default Index;