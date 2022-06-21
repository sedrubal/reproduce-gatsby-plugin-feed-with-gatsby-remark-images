import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {

  const { posts } = data.blog;

  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>Welcome to <b>Gatsby!</b></h1>
        {posts.map((post) => (
          <Link key={post.id} to={post.fields.slug}>
            <h2>
              { post.frontmatter.title }
            </h2>
            <p>
              { post.excerpt }
            </p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
    query blogPosts {
        blog: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            posts: nodes {
                fields {
                    slug
                }
                frontmatter {
                    date(fromNow: true)
                    title
                }
                excerpt
                id
            }
        }
    }
`;

export default IndexPage
