import { FC } from 'react'
import { useAllPosts } from '@services'
import { Section, ErrorMessage } from '@components'
import { PostUpvoter } from '@containers'

import { StyledListUnordered, StyledButton } from './PostList.styles'

export const PostList: FC = () => {
  const {
    loading,
    error,
    loadingMorePosts,
    allPosts,
    areMorePosts,
  } = useAllPosts()

  if (loading && !loadingMorePosts) {
    return <div>Loading...</div>
  }

  if (error) {
    return <ErrorMessage message="Error loading posts" />
  }

  return (
    <Section>
      <StyledListUnordered>
        {allPosts?.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}</span>
              <a href={post.url}>{post.title}</a>
              <PostUpvoter id={post.id} votes={post.votes} />
            </div>
          </li>
        ))}
      </StyledListUnordered>
      {areMorePosts && (
        <StyledButton>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </StyledButton>
      )}
    </Section>
  )
}

export default PostList
