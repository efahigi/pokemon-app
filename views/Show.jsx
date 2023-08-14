import React from 'react'
import pokemon from '../models/pokemon'
function Show(props) {
  return (
    <div>
        <h1>Show The Pokemon</h1>
        <h2>
            {pokemon[props.index].name}
        </h2>
        <img src={pokemon[props.index].img +".jpg"} alt="" />
    </div>
  )
}
export default Show
