import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

const githubUsername = import.meta.env.VITE_GITHUB_USERNAME

type UserInfoType = {
  name: string
  followers: number
  username: string
  company: string
  url: string
  avatarUrl: string
  bio: string
}


type UserContextType = {
  user: UserInfoType,
  isLoadingUserInfo: boolean
}

type UserProviderProps = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserInfoType>({} as UserInfoType)
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(false)

  const fetchUser = useCallback(async () => {
    setIsLoadingUserInfo(true)
    const { data } = await api.get(`/users/${githubUsername}`)

    const { login: username, name, followers, company, html_url: url, avatar_url: avatarUrl, bio } = data
    const useInfo: UserInfoType = {
      username,
      name,
      followers,
      company,
      url,
      avatarUrl,
      bio
    }

    setUser(useInfo)
    setIsLoadingUserInfo(false)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider
      value={{ user, isLoadingUserInfo }}
    >
      {children}
    </UserContext.Provider>
  )
}
