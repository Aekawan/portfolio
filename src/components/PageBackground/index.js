import React from "react"
import styled from "styled-components"

import Dot from "@assets/images/dot.png"
import { COLOR_COLLECTION } from "@config/style"
import Particle from "../Particles"

const RightSquare = styled.div`
  width: 870px;
  height: 1000px;
  transform: rotate(115deg);
  position: absolute;
  left: 64%;
  top: -28%;
  z-index: -3;
  pointer-events: none;
  background: url(${Dot}) ${COLOR_COLLECTION.secondary};
  border-radius: 50px;
`

const LeftSquare = styled(RightSquare)`
  width: 280px;
  height: 500px;
  position: absolute;
  transform: rotate(120deg);
  left: -70px;
  top: -38%;
`

export const PageBackGround = () => (
  <React.Fragment>
    <Particle />
    <RightSquare />
    <LeftSquare className="is-hidden-mobile" />
  </React.Fragment>
)

export default PageBackGround
