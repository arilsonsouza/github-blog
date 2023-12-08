import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt='Gitub Blog' />
      </NavLink>
    </HeaderContainer>
  )
}
