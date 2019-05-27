import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ExternalLink = (props) => (
  <a href={props.to} target="_blank" rel="noopener noreferrer" style={{ marginRight: 20 }}>
    {props.children}
  </a>
)

export default ({ data }) => (
  <Layout>
    <h1>Hi! 👋</h1>
    <p>
      I'm Sam.
      You will find most of the things here are what I'm learning.
    </p>
    <p style={{ marginTop: 50, fontSize: 30 }}>
      <ExternalLink to={"https://twitter.com/samyo_ou"}>
        <FontAwesomeIcon icon={faTwitter} />
      </ExternalLink>
      <ExternalLink to={"https://instagram.com/samyo_ou"}>
        <FontAwesomeIcon icon={faInstagram} />
      </ExternalLink>
      <ExternalLink to={"https://github.com/samyrsd"}>
        <FontAwesomeIcon icon={faGithub} />
      </ExternalLink>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`