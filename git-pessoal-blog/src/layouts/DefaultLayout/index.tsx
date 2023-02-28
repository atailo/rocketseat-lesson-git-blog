import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
export function DefaltLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
