import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Blogs from './Components/Blogs/Blogs'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import Notfound from './Components/Notfound/Notfound'
import './App.css'

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Blogs", element: <Blogs /> },
      { path: "Blogs/:id", element: <BlogDetails /> },
      { path: "*", element: <Notfound /> },
    ],
    
  },
 
],{
  basename: "/lens2-react/",
})

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App