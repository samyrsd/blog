import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>Hi</h1>
    <p>
      I'm Sam. A random guy on the Internet. 
      You will find most of the things here are what I don't know and what's fun. 
      Because I figured the best way the learn is to explain and the best way to have fun is to create fun stuff.
      Life's a bit boring sometimes. Fun is not optional anymore. <span role="img" aria-label="smile">&#128540;</span>
    </p>
    <p><a href="https://twitter.com/samyo_ou" target="_blank" rel="noopener noreferrer">Twitter</a></p>
    <p><a href="https://instagram.com/samyo_ou" target="_blank" rel="noopener noreferrer">Instagram</a></p>
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