// import { useState } from 'react'
import {Link,useRoutes} from 'react-router-dom'
import {Routes} from '@/router/route'

function App() {
  const outlet=useRoutes(Routes)
  return (
    <div>
      <Link to='/about'>去about</Link><br></br>
      <Link to='/home'>去home</Link><br></br>
      <Link to='/'>去App</Link>
      {outlet}
    </div>
  )
}

export default App
