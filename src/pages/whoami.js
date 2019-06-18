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
    <h1>Hi! <span role="img" aria-label="hi">👋</span></h1>
    <p>
    I'm Sam.
    The title of this site is <strong>Things I don't know</strong> inspired by Richard Feynman's <strong>NOTEBOOK OF THINGS I DON'T KNOW ABOUT</strong>.
    So most things in here are just brain dumps. Things that are interesting and fun to find out.
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