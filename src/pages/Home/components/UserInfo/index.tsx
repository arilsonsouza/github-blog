import { useContextSelector } from 'use-context-selector';
import { UserDetails, UserProfileContainer, UserInfoContainer, UserProfile, UserProfileInfo, UserProfileInfoItem } from './styles';
import { UserContext } from '../../../../contexts/UserContext';
import { Loading } from '../../../../components/Loading';

export function UserInfo() {
  const { user, isLoading } = useContextSelector(UserContext, (context) => {
    return {
      user: context.user,
      isLoading: context.isLoadingUserInfo
    }
  })

  return (
    <UserInfoContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <UserProfileContainer>
          <img src={user.avatarUrl} alt={user.name} />
          <UserProfile>
            <UserDetails>
              <header>
                <h1>{user.name}</h1>
                <a href={user?.url} target="_blank" rel="noreferrer">
                  GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </header>
              <p>{user.bio}</p>
            </UserDetails>
            <UserProfileInfo>
              <UserProfileInfoItem>
                <i className="fa-brands fa-github"></i> {user.username}
              </UserProfileInfoItem>
              <UserProfileInfoItem>
                <i className="fa-solid fa-building"></i> {user.company}
              </UserProfileInfoItem>
              <UserProfileInfoItem>
                <i className="fa-solid fa-user-group"></i> {user.followers} Followers
              </UserProfileInfoItem>
            </UserProfileInfo>
          </UserProfile>
        </UserProfileContainer>
      )}
    </UserInfoContainer>
  )
}
