import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "@layouts"
import { MENU } from "@config/constant"
import Me from "@containers/Home/Me"
import { useIntersection } from "@hooks"
import { Title } from "@typography"

import "@styles/styles.scss"

const scrollToRef = (ref, margin = 0) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: ref.current.offsetTop - margin,
  })
}

const getRefConfig = (refs) => refs.reduce((refConfig, ref) => {
  if (ref.current && ref.current.id) return { ...refConfig, [ref.current.id]: ref }
  return refConfig
}, {})

const App = () => {
  const [section, setSection] = useState(MENU.ME)
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)

  const refArray = [firstRef, secondRef, thirdRef]
  const refConfig = getRefConfig(refArray)
  const [currentView] = useIntersection(refArray, {})

  const handleScroll = menu => {
    const margin = menu === MENU.ME ? 70 : 0
    const ref = refConfig[menu]
    if (ref) scrollToRef(ref, margin)
    return
  }

  const handleScrollSection = (name) => {
    setSection(name)
    handleScroll(name)
  }

  useEffect(() => {
    setSection(currentView)
  }, [currentView])

  useEffect(() => {
    const handleMenuLocation = () => {
      const hash = window.location.hash
      if (hash) {
        const name = hash.substr(1)
        setTimeout(() => {
          handleScrollSection(name)
        }, 50)
      }
    }
    handleMenuLocation()
  }, [])

  return (
    <Layout onMenuChange={handleScroll} currentSection={section}>
      <Section id={MENU.ME} ref={firstRef} first>
        <Me />
      </Section>
      <Section id={MENU.PROJECT} ref={secondRef}>
        <Title withLine>My Project</Title>
        <Container>
        </Container>
        {/* <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', justifyContent: 'center' }}>
          <Title withLine>My Project</Title>
          <div>
            <Title>Coming Soon...</Title>
          </div>
        </div> */}
      </Section>
      <Section id={MENU.WHY} ref={thirdRef}>
        <Title withLine>Why me?</Title>
      </Section>
    </Layout>
  )
}

export default App

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin-top: ${props => (props.first ? "70px" : "0px")};
`

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
