import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = (data) => {

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <h1>{ post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const query = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "LL")
            }
            id
            timeToRead
        }
    }
`;

export default BlogPost
