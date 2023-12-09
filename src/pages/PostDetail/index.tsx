import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PostDetailContainer, PostDetailContent, PostInfoContainer, PostInfoItem } from './styles'
import { UserContext } from '../../contexts/UserContext'
import { useContextSelector } from 'use-context-selector'
import { Loading } from '../../components/Loading'
import { PageInfo } from '../../components/PageInfo'

export function PostDetail() {
  const { id } = useParams()
  const { post, fetchPost, isLoadingPost } = useContextSelector(UserContext, (context) => {
    return {
      post: context.post,
      fetchPost: context.fetchPost,
      isLoadingPost: context.isLoadingPost
    }
  })

  useEffect(() => {
    fetchPost(id)
  }, [fetchPost, id])

  return (
    <PostDetailContainer>
      {isLoadingPost ? (
        <Loading />
      ) : (
        <>
          <PageInfo>
            <PostInfoContainer>
              <header>
                <NavLink to="/">
                  <i className="fa-solid fa-chevron-left"></i> Voltar
                </NavLink>
                <a href={post.url} target="_blank" rel="noreferrer">
                  VER NO GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </header>
              <div>
                <h1>{post.title}</h1>
              </div>
              <footer>
                <PostInfoItem>
                  <i className="fa-brands fa-github"></i> {post.username}
                </PostInfoItem>
                <PostInfoItem>
                  <i className="fa-solid fa-calendar"></i> {post.createdAt}
                </PostInfoItem>
                <PostInfoItem>
                  <i className="fa-solid fa-comment"></i>
                  {post.comments} Comentários
                </PostInfoItem>
              </footer>
            </PostInfoContainer>
          </PageInfo>
          <PostDetailContent>
            <div>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
            </div>
          </PostDetailContent>
        </>
      )}
    </PostDetailContainer>
  )
}
