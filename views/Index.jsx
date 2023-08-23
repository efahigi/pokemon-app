import React from 'react'

function Index(props) {
  const pokemon = props.pokemon;
    const myStyle = {
        color: 'black',
        backgroundColor: 'lightblue',
        display: 'flex',
        border: 'solid lightgray',
        // alignItems:"center"
        };
        const d = {
          border: 'solid lightgray',
          fontSize: "20px",
          backgroundColor: 'lightblue',
          textAlign:"center"
          };
        const a = {
          marginLeft: "30%",
          fontSize: '10px',
          backgroundColor: 'lightblue',
          width:"13%",
          textAlign:"center"
          };
         
          const b = {
            marginTop: "10px",
            fontSize: '15px',
            backgroundColor: 'lightblue',
            width:"13%",
            textAlign:"center"
            };
            const c = {
              marginTop: "10px",
              fontSize: '15px',
              backgroundColor: 'lightblue',
              width:"13%",
              textAlign:"center"
              };
    return (
        <div style={d} >
            <h3 ><b>See All The Pokemons!</b></h3>
            <a href="/pokemon/New">Create New Pokemon</a>
          {pokemon.map((pokemon,i) => {
            return (
             
              <div key={i} style={myStyle}>
                <div style={a}>
                <a href={`/pokemon/${pokemon._id}`}>
                  <h2>{pokemon.name}</h2>
                  {/*  pokemon.name.toUpperCase().split(' ').join('_'); */}
                 
                </a>
                </div>
                <div style={b}>
                <a href={`/pokemon/${pokemon._id}/edit`}>Edit </a>
               </div>
               <div style={c}>
                  <form action={`/pokemon/${pokemon._id}?_method=delete`} method="POST"  >
                  <input type="submit" value="Delete"/>
                  </form>
                </div>
              
              </div>
            );
          })}
        </div>
      );
}
export default Index;