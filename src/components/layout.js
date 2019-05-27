import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Header = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: ${rhythm(1)};
  padding-top: ${rhythm(1.5)};
`

const Nav = styled.div({
  paddingBottom: rhythm(1.5),
})

const SiteTitle = ({ data }) => (
  <div>
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(1.5)};
          display: inline-block;
          font-style: normal;
        `}
      >
        {data.site.siteMetadata.title}
      </h3>
    </Link>
  </div>
)

const NavLink = (props) => (
  <Link 
    to={props.to}
    css={css`
      margin-right: ${rhythm(1)};
    `}
  >
    {props.children}
  </Link>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Header>
      <SiteTitle data={data}/>
      <Nav>
        <NavLink to={`/`}>blog</NavLink>
        <NavLink to={`/whoami/`}>whoami</NavLink>
      </Nav>
      {children}
    </Header>
  )
}