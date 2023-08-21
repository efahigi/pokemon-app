import React from 'react'

function New() {
  return (
    <div>
<form action='/pokemon' method='Post'>
Name: <input type="text" name="name"/>
<br/>
img: <input type="src" name="img" />
<br/>
Description: <input type='text' name="description"/>
<br/>
<input type="submit" name="" value="Create New Pokemon"/>
</form>
</div>
  )
}

export default New
