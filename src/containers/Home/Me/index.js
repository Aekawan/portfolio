import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Typed from "typed.js"

import Button from "@components/Button"
import { COLOR } from "@config/style"
import { CONTENT } from "@config/constant"
import PageBackground from "@components/PageBackground"
import { H1, Title } from "@typography"
import iphone from "@assets/images/iphone.png"

const getAlignment = props => {
  if (props.center) return "center"
  if (props.end) return "flex-end"
  if (props.start) return "flex-start"
  return "flex-start"
}

const MeSection = () => {
  const textRef = useRef(null)
  const [isMobileVersion, setMobileVersion] = useState(0)

  useEffect(() => {
    const options = {
      strings: ["Bank", "Aekkawan", "แบงค์", "เอกวรรณ์"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 3500,
      stringsElement: null,
      loop: true,
      showCursor: false,
    }
    const typed = new Typed(textRef.current, options)
    return () => typed.destroy()
  }, [textRef])

  const handleSetMobile = () => {
    setMobileVersion(isMobile => !isMobile)
  }

  return (
    <React.Fragment>
      <PageBackground />
      <div className="columns" style={{ padding: "50px 50px" }}>
        <div className="column">
          <Content center>
            <H1 className="is-size-4" style={{ margin: 0 }} level={3}>
              {CONTENT.title}
            </H1>
            <div style={{ display: "flex" }}>
              <Title ref={textRef} style={{ margin: 0 }} withLine />
              <Title blink>_</Title>
            </div>
            <H1 className="is-size-3" style={{ margin: 0 }} level={2}>
              {CONTENT.position}
            </H1>
            <p
              style={{
                clear: "both",
                float: "right",
                marginTop: 20,
                fontWeight: 350,
                color: COLOR.black,
              }}
            >
              {CONTENT.description}
            </p>
          </Content>
        </div>
        <div className="column is-hidden-mobile">
          <Content center style={{ position: "relative" }}>
            <iframe
              title="responsive"
              className="iframe-responsive"
              src="http://localhost:8000/"
            ></iframe>
            <PopupSee open={isMobileVersion} className="iframe-responsive">
              <Button onClick={handleSetMobile}>Responsive</Button>
            </PopupSee>
            <IphoneFrame src={iphone} alt="iphone" />
          </Content>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MeSection

const Content = styled.div`
  display: flex;
  min-height: calc(90vh - 70px);
  align-items: flex-start;
  justify-content: ${props => getAlignment(props)};
  flex-direction: column;
`

const IphoneFrame = styled.img`
  width: 600px;
  z-index: 2;
`

const PopupSee = styled.div`
  display: ${props => (props.open ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: rgba(43, 83, 135, 0.08) 0px 3px 8px 0px;
  z-index: 3;
  > .button {
    font-weight: 700;
  }
`
