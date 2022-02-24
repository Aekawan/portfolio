import styled, { css } from "styled-components"

import { COLOR } from "@config/style"

const withLineStyle = css`
  &:after {
    content: "";
    position: absolute;
    width: calc(100% - 16px);
    height: 16px;
    bottom: 16px;
    left: 0px;
    z-index: -1;
    box-sizing: inherit;
    background: ${COLOR.pink};
    transform: scaleX(1);
    transform-origin: left center 0px;
    transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68) 0s;
  }
`

const withBlink = css`
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

export const H1 = styled.h1`
  position: relative;
  padding: 5px;
  transition: all 0.15s ease-in-out 0s;
  color: ${COLOR.black};
  ${props => props.withLine ? withLineStyle : ''}
`

export const Title = styled(H1)`
  font-size: 50px;
  font-weight: 700;
  ${props => props.blink ? withBlink : ''}
`
