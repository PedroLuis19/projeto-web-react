import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'


import Login from './components/Login.jsx'
import TrainingOrganization from './components/TrainingOrganization.jsx'
import Evolution from './components/Evolution.jsx'
import History from './components/History.jsx'


const router = createBrowserRouter([
  {
    path:'/', //aqui é a página base, por isso apenas o "/"
    element: <App/>,
    children:[{
    path:'/', //aqui é a página base, por isso apenas o "/"
    element: <Login/>
  },
  {
    path: 'evolution',
    element: <Evolution/>
  },
  {
    path: 'history',
    element: <History/>
  },
  {
    path: 'training',
    element: <TrainingOrganization/>
  }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
