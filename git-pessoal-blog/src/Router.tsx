import { Route, Routes } from 'react-router-dom'
import { DefaltLayout } from './layouts/DefaultLayout'
import { Issues } from './pages/Issues'
import { IssueDetail } from './pages/Issue_Detail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaltLayout />}>
        <Route path="/" element={<Issues />} />
        <Route path="/detail" element={<IssueDetail />} />
      </Route>
    </Routes>
  )
}
