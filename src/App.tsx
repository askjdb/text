// import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import {Routes} from '@/router/route'

function App() {
  const outlet=useRoutes(Routes)
  return (
    <div>
      {/*子组件放在这里 */}
      {outlet}
    </div>
  )
}

export default App
