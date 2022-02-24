import React from "react"
import styled from "styled-components"

import Layout from "@layouts"
import PageBackground from "@components/PageBackground"
import { ButtonLink } from "@components/Button"

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 70px);
  margin-top: ${props => (props.first ? "70px" : "-50px")};
`

const Content = styled.div`
  display: flex;
  min-height: calc(90vh - 70px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const BlogPage = () => (
  <Layout currentSection="blog" isSecondPage top>
    <Container>
      {/* <SEO title="Blog" /> */}
      <PageBackground />
      <div className="columns" style={{ padding: "50px 50px" }}>
        <div
          className="column"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Content stye={{}}>
            <div style={{ marginBottom: 50, position: "relative" }}>
              <h1 className="is-size-2">Blog is coming soon....</h1>
            </div>
            <ButtonLink to="/">Go back</ButtonLink>
          </Content>
        </div>
      </div>
    </Container>
    <Container></Container>
  </Layout>
)

export default BlogPage
