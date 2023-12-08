import { PageInfo } from '../../components/PageInfo'
import { UserProvider } from '../../contexts/UserContext'
import { UserInfo } from './components/UserInfo'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <UserProvider>
        <PageInfo>
          <UserInfo/>
        </PageInfo>
      </UserProvider>
    </HomeContainer>
  )
}
