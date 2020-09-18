import React from 'react'
import { graphql, Link } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { format } from 'date-fns'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Blog</h1>
        {postNodes &&
          postNodes.length > 0 &&
          postNodes.map(post => {
            const dateSegment = format(post.publishedAt, 'YYYY/MM')
            return (
              <li>
                <Link to={`/nieuws/${dateSegment}/${post.slug.current}`}>{post.title}</Link>
              </li>
            )
          })}
      </Container>
    </Layout>
  )
}

export default BlogPage
