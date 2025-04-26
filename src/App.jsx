import { useState } from 'react'
import HomePage from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RandomFood from './pages/RandomFood'
import CompleteLists from './pages/CompleteLists'
import DefaultLayout from './layouts/DefaultLayout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/random' element={<RandomFood />} />
            <Route path='/complete' element={<CompleteLists />} />
          </Route>
          <Route path='*' element={<div>Page not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
