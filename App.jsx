
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import Home from './components/Home/Home'

function App() {
 

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
