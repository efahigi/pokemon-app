import React from 'react'

function Edit(props) {
    const pokemon = props.pokemon
  return (
    <div>
      <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
        Name:{" "}
        <input type="text" name="name" defaultValue={pokemon.name} />
        <br />
      Image URL:{" "}
        <input type="src" name="img" defaultValue={ pokemon.img} />
        <br />
  
        Description: {" "}
        <input type='text' name="description" defaultValue={ pokemon.description} />
        <br/>
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  )
}
export default Edit
