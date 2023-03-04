import { lazy, Suspense } from 'react'
import Home from '@/views/Home'
// import About from '../views/About'
const About = lazy(() => import('@/views/About'))
import { Navigate } from 'react-router-dom'


const withLoadingComponent=(elem:JSX.Element)=>(
    <Suspense fallback={<div>Loading...</div>}>
        {elem}
    </Suspense>
)

export const Routes = [
    {
        path: '/',
        element: <Navigate to={'/home'}></Navigate>
    },
    {
        path: '/about',
        element:withLoadingComponent(<About/>)
    },
    {
        path: '/home',
        element: <Home />
    }
]
