import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <img src={ logoImg } alt='Gitub Blog'/>
    </HeaderContainer>
  )
}
