import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './component/App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Main from './component/Main.jsx'
import Menu from './component/Menu.jsx'
import Contact from './component/Contact.jsx'
import Error from './component/Error.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <Navigate to='menu' />},
    {path: 'main', element: <Main />},
    {path: 'menu', element: <Menu />},
    {path: 'contact', element: <Contact />},
    {path: '*', element: <Error />},
  ]}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
