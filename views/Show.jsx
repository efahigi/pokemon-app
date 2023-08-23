import React from 'react'

// import pokemon from '../models/pokemon'

function Show(props) {
  const pokemon = props.pokemon
    const myStyle = {
        color: 'black',
        backgroundColor: 'lightblue',
        border: 'solid black',
        };
        const d = {
          //  marginLeft: "150px",
            fontSize: "30px",
            backgroundColor: 'lightblue',
            textAlign:"center"
            };
          const a = {
            fontSize: '20px',
            backgroundColor: 'lightblue',
            textAlign:"center",
            float:"center"
            };
            const b = {
              marginLeft: "25%",
              border: "double black",
              backgroundColor: 'lightblue',
              };
              const c = {
                marginTop: "10px",
                fontSize: 'large',
                backgroundColor: 'lightblue',
                // width:"13%",
                // textAlign:"center"
                };
  return (
    <div style={myStyle}>
        <h1 style={d}>SGotta Catch 'Em All</h1>
        <h2 style={a}>
            {pokemon.name}
        </h2>
        <img style={b} src={pokemon.img +".jpg"} alt="" />
        <h3 style={c}> {pokemon.description}</h3>
    </div>
  )
}
export default Show
