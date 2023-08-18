import React from 'react'

import pokemon from '../models/pokemon'

function Show(props) {
    const myStyle = {
        color: 'black',
        backgroundColor: 'lightblue',
        };
  return (
    <div style={myStyle}>
        <h1>Show The Pokemon</h1>
        <h2 style={myStyle}>
            {pokemon[props.index].name}
        </h2>
        <img src={pokemon[props.index].img +".jpg"} alt="" />
    </div>
  )
}
export default Show
