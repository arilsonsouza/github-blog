import { useContextSelector } from "use-context-selector"
import { PostListContainer, PostsContainer, SearchFormContainer } from "./styles"
import { UserContext } from "../../../../contexts/UserContext"
import { Loading } from "../../../../components/Loading"
import { PostCard } from "../PostCard"

export function PostList() {
  const {
    isLoadingPosts,
    posts,
    postsCounter,
    fetchPosts,
    searchQuery,
    handleSearchQueryChange
  } = useContextSelector(UserContext, (context) => {
    return {
      isLoadingPosts: context.isLoadingPosts,
      posts: context.posts,
      fetchPosts: context.fetchPosts,
      postsCounter: context.postsCounter,
      searchQuery: context.searchQuery,
      handleSearchQueryChange: context.handleSearchQueryChange,
    }
  })
  return (
    <PostsContainer>
      <SearchFormContainer>
        <header>
          <span>Publicações</span>
          <small>{postsCounter} publicaç{`${postsCounter > 1 ? 'ões' : 'ão'}`}</small>
        </header>
        <input
          type="text"
          onKeyDown={(e) =>
            e.key === 'Enter' && fetchPosts(searchQuery)
          }
          onChange={(e) => handleSearchQueryChange(e.currentTarget.value)}
          value={searchQuery}
          placeholder="Buscar conteúdo"
        />
      </SearchFormContainer>

      {isLoadingPosts ? (
        <Loading />
      ) : (
        <PostListContainer>
          {posts.map((post) => <PostCard key={post.number} post={post} />)}
        </PostListContainer>)}
    </PostsContainer>
  )
}
