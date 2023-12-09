import { PageInfo } from '../../components/PageInfo'
import { PostList } from './components/PostList'
import { UserInfo } from './components/UserInfo'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <PageInfo>
        <UserInfo />
      </PageInfo>
      <PostList />
    </HomeContainer>
  )
}
