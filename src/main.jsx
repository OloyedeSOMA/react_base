import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import {AuthProvider} from './Components/Context/AuthContext.jsx'
import App from './App.jsx'
import MultiStepForm from './Components/MultiStepForm/MultiStepForm.jsx'
import SuccessPage from './Components/Pages/SuccessPage.jsx'
import Login from './Components/Pages/Login.jsx'
import PrivateRoute from './Components/Pages/PrivateRoute.jsx'
import Dashboard from './Components/Pages/Dashboard.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/Form',
    element:<MultiStepForm />
  },
  {
    path:'/Success',
    element:<SuccessPage/>
  },
  {
    path:'/Login',
    element:<Login />
  },
  {
    path:'/Dashboard',
    element:(
      <PrivateRoute >
        <Dashboard />
      </PrivateRoute>
    ),
  },
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
