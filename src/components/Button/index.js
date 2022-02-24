import { Link } from "gatsby"
import styled, { css } from "styled-components"

import { COLOR, getColorByProps } from "@config/style"

const ButtonStyle = css`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 23px;
  padding-right: 23px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  box-sizing: border-box;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  min-width: 48px;
  font-weight: 700;
  background-color: transparent;
  min-width: 160px;
  min-height: 60px;
  border: 2px solid ${COLOR.black};
  border-image: initial;
  text-transform: initial;
  transition: all 0.2s ease-in-out 0s;
  color: ${COLOR.black};
  &:before {
    content: "";
    display: block;
    background: ${props => getColorByProps(props)};
    position: absolute;
    width: 100%;
    height: 60px;
    z-index: -1;
    top: 10px;
    right: -10px;
    transition: all 0.2s ease-in-out 0s;
  }
  &:hover {
    border: 2px solid ${props => getColorByProps(props)};
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 56px;
      top: 0px;
      right: 0px;
      z-index: -1;
      background: ${props => getColorByProps(props)};
      transition: all 0.2s ease-in-out 0s;
    }
  }
`

export const ButtonLink = styled(Link)`
  ${ButtonStyle}
`

export const Button = styled.button`
  ${ButtonStyle}
`

export default Button
