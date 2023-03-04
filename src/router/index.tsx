
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import App from '@/App'
import Home from '@/views/Home'
import About from '@/views/About'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
            <Route path="/" element={<Navigate to={'/home'}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
