import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
import { formateDateDistanceToNow } from '../utils/formatter'

const LOCAL_STORAGE_KEY = '@github-blog:search-state-1.0.0'
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME
const githubRepo = import.meta.env.VITE_GITHUB_REPO

type UserInfoType = {
  name: string
  followers: number
  username: string
  company: string
  url: string
  avatarUrl: string
  bio: string
}
export interface PostType {
  number: number
  title: string
  body: string
  createdAt: string
}

type PostDetailType = {
  title: string
  comments: number
  createdAt: string
  username: string
  url: string
  body: string
}


type PostTypeApiResponse = {
  number: number
  title: string
  body: string
  created_at: string
}

type UserContextType = {
  user: UserInfoType,
  posts: PostType[],
  post: PostDetailType,
  searchQuery: string,
  isLoadingUserInfo: boolean,
  isLoadingPosts: boolean,
  isLoadingPost: boolean,
  postsCounter: number,
  fetchPosts: (query: string) => Promise<void>,
  fetchPost: (postId: string | undefined) => Promise<void>,
  handleSearchQueryChange: (value: string) => void
}

type SearchStateType = {
  query: string
}

type UserProviderProps = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserInfoType>({} as UserInfoType)
  const [posts, setPosts] = useState<PostType[]>([])
  const [post, setPost] = useState<PostDetailType>({} as PostDetailType)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(false)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)
  const [isLoadingPost, setIsLoadingPost] = useState(false)
  const [postsCounter, setPostsCounter] = useState(0)

  const fetchUser = useCallback(async () => {
    setIsLoadingUserInfo(true)
    const { data } = await api.get(`/users/${githubUsername}`)

    const {
      login: username,
      name,
      followers,
      company,
      html_url: url,
      avatar_url:
      avatarUrl,
      bio
    } = data

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

  const fetchPosts = useCallback(async (query: string) => {
    setIsLoadingPosts(true)
    const searchState: SearchStateType = { query }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(searchState))

    const response = await api.get(
      `/search/issues?q=${query}%20is:issue%20is:open%20repo:${githubUsername}/${githubRepo}`,
    )

    const fetchedPosts = response.data.items.map(({ number, title, body, created_at: createdAt }: PostTypeApiResponse) => {
      const post: PostType = {
        number,
        title,
        body,
        createdAt
      }
      return post
    })

    setPosts(fetchedPosts)
    setPostsCounter(response.data.total_count)
    setIsLoadingPosts(false)
  }, [])

  const fetchPost = useCallback(async (postId: string | undefined) => {
    setIsLoadingPost(true)
    const response = await api.get(
      `/repos/${githubUsername}/${githubRepo}/issues/${postId}`,
    )
    const {
      title,
      comments,
      created_at: createdAt,
      user,
      html_url: htmlUrl,
      body,
    } = response.data


    const fetchedPost: PostDetailType = {
      title,
      username: user.login,
      comments,
      createdAt: formateDateDistanceToNow(new Date(createdAt)),
      url: htmlUrl,
      body,
    }
    setPost(fetchedPost)
    setIsLoadingPost(false)
  }, [])

  useEffect(() => {
    fetchUser()

    const storedStateAsJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    let query = ''
    if (storedStateAsJSON) {
      const searchState: SearchStateType = JSON.parse(storedStateAsJSON)
      query = searchState.query || ''
    }

    setSearchQuery(query)
    fetchPosts(query)
  }, [fetchUser, fetchPosts])

  const handleSearchQueryChange = (value: string) => setSearchQuery(value)

  return (
    <UserContext.Provider
      value={{
        user,
        isLoadingUserInfo,
        posts,
        isLoadingPosts,
        postsCounter,
        fetchPosts,
        searchQuery,
        handleSearchQueryChange,
        fetchPost,
        post,
        isLoadingPost
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
