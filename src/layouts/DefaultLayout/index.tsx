import { Outlet } from 'react-router-dom'
import { LayoutContainer, MainContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </LayoutContainer>
  )
}
