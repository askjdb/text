import { lazy, Suspense } from 'react'
import Home from '@/views/Home'
// import About from '../views/About'
// const About = lazy(() => import('@/views/About'))
import Login from '@/views/Login'
const Page1=lazy(() =>import('@/views/Page1'))
const Page2=lazy(() =>import('@/views/Page2'))
const Page3_1=lazy(()=>import('@/views/Page3_1'))
const Page3_2=lazy(()=>import('@/views/Page3_2'))
const Page3_3=lazy(()=>import('@/views/Page3_3'))
const Page4_1=lazy(()=>import('@/views/Page4_1'))
const Page4_2=lazy(()=>import('@/views/Page4_2'))
const Page5=lazy(()=>import("@/views/Page5"))
import { Navigate } from 'react-router-dom'



const withLoadingComponent=(elem:JSX.Element)=>(
    <Suspense fallback={<div>Loading...</div>}>
        {elem}
    </Suspense>
)

export const Routes = [
    {
        path: '/',
        element: <Navigate to={'/page1'}></Navigate>,
    },
    {
        path: '/',
        element: <Home />,
        children:[
            {
                path:'/page1',
                element:withLoadingComponent(<Page1/>)
            },
            {
                path:'/page2',
                element:withLoadingComponent(<Page2/>)
            },
            {
                path:'/page3/01',
                element:withLoadingComponent(<Page3_1/>)
            },
            {
                path:'/page3/02',
                element:withLoadingComponent(<Page3_2/>)
            },
            {
                path:'/page3/03',
                element:withLoadingComponent(<Page3_3/>)
            },
            {
                path:'/page4/01',
                element:withLoadingComponent(<Page4_1/>)
            },
            {
                path:'/page4/02',
                element:withLoadingComponent(<Page4_2/>)
            },
            {
                path:'/page5',
                element:withLoadingComponent(<Page5/>)
            },
            
        ]
    },
    {
        path:"/login",
        element: <Login></Login>,
    },
    {
        path:"*",
        element: <Navigate to={'/page1'}></Navigate>,
    }
]
