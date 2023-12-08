import { PostType } from "../../../../contexts/UserContext";
import { formatText, formateDateDistanceToNow } from "../../../../utils/formatter";
import { PostCardContainer } from "./styles";

type PostCardProps = {
  post: PostType
}

export function PostCard({ post }: PostCardProps) {
  const { number, title, body, createdAt } = post
  return (
    <PostCardContainer to={`/posts/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{formateDateDistanceToNow(new Date(createdAt))}</span>
      </header>
      <main>
        <p>{formatText(body, 80)}</p>
      </main>
    </PostCardContainer>
  )
}
