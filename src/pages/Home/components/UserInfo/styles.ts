import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`

export const UserProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
  }
`

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const UserDetails = styled.div`
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;

    h1 {
      color: ${({theme}) => theme['base-title']};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;

      color: ${({theme}) => theme.blue};
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;

      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${({theme}) => theme.blue};
      }
    }
  }

  p {
    color: ${({theme}) => theme['base-text']};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`

export const UserProfileInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
`

export const UserProfileInfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color:${({theme}) => theme['base-subtitle']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`
