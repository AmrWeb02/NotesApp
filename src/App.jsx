import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// Pages
import AllNotes from './Pages/AllNotes.jsx'
import ArchivedNotes from './Pages/ArchivedNotes.jsx'
import NotFound from './Pages/NotFound.jsx'
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
