import React from 'react'
import Masterlayout from './Components/masterlayout/masterlayout'
import Navbar from './Components/navbar/navbar'
import Portfolio from './Components/portfolio/portfolio'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'

import Contact from './Components/contact/contact'
import About from './Components/About/about'
import Home from './Components/Home/home';



export default function App() {
  let router = createBrowserRouter([
    {path:"",element:<Masterlayout />,children:[
      {index:true,element:<Home />},
      {path:"about",element:<About/>},
      {path:"Contact",element:<Contact />},
      {path:"navbar",element:<Navbar />},
      {path:"portfolio",element:<Portfolio/>}
    ]}
  ])
  


  return <RouterProvider router={router}></RouterProvider>
}


