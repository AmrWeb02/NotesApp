import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// Pages
import AllNotes from './Components/AllNotes.jsx'
import ArchivedNotes from './Components/ArchivedNotes.jsx'
import NotFound from './Components/NotFound.jsx'
// Layouts
import Layout from './Layout/Layout.jsx'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<AllNotes/>}/>
      <Route path='/ArchivedNotes' element={<ArchivedNotes/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
