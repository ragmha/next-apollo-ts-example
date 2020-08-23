import { FC } from 'react'
import { useCreatePost } from '@services'

export const Submit: FC = () => {
  const { loading, createPost } = useCreatePost()
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const title = formData.get('title') as string
    const url = formData.get('url') as string
    form.reset()

    createPost({
      variables: { title, url },
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit</h1>
      <input placeholder="title" name="title" type="text" required />
      <input placeholder="url" name="url" type="url" required />
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  )
}

export default Submit
