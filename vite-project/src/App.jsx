import { useState } from 'react'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*Tailwind CSS*/}
      <h2 className='text-3xl underline text-red-500'>Hello World</h2>
      <br></br>
      {/*Button using MUI library*/}
      <Button variant="text">Hello World</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="outlined">Hello World</Button>

      <br></br>
      <br></br>

      <Button variant="contained" onClick={() => setCount((count) => count + 1)}>Count is {count}</Button>
    </div>  
    
  )
}

export default App
