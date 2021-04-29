import { getSortedPostsData } from '../../lib/posts'
import Layout from '../../components/Layout'
import PostContainer from '../../components/PostContainer'

export default function Posts ({ allPostsData }) {
  return (
    <Layout>
      {allPostsData.map((post) => {
        return (
          <PostContainer title={post.title} description={post.description} id={post.id} date={post.date} key={post.id} />
        )
      })}
    </Layout>
  )
}

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
