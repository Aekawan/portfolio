import React, { useState, memo, useEffect } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import Header from "./Header"
import { MENU_LIST, MENU } from "../config/constant"

const Content = styled.div`
  background: 'transparent', overflowX: 'hidden'
`

const LayoutComponent = ({
  children,
  onMenuChange,
  currentSection,
  isSecondPage = false,
}) => {
  const [currentMenu, setCurrentMenu] = useState(MENU.ME)

  useEffect(() => {
    setCurrentMenu(currentSection)
    return () => {}
  }, [currentSection])

  const handleClickMenu = name => () => {
    if (isSecondPage) {
      navigate(`/#${name}`)
    } else {
      setCurrentMenu(name)
      onMenuChange(name)
    }
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header
        isSecondPage={isSecondPage}
        menuList={MENU_LIST}
        onClickMenu={handleClickMenu}
        currentMenu={currentMenu}
      />
      <Content className="container">{children}</Content>
    </div>
  )
}

export default memo(LayoutComponent)
