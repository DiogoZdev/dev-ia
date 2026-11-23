import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'

const AlphabetPage = lazy(() => import('@/pages/AlphabetPage'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="alphabet" element={<AlphabetPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
