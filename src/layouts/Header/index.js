import React, { memo, useState, useEffect } from "react"
import styled, { css } from "styled-components"
import classNames from "classnames"
import { Link } from "gatsby"

import { COLOR } from "@config/style"
import planet from "@assets/images/planet.svg"
import { useScrollEvent } from "@hooks"

const NavBar = styled.nav`
  transform: translate3d(0px, 0px, 0px);
  border: 0;
  transition: all 0.2s ease-in-out 0s;
  background: ${props => (props.top === 1 ? "transparent" : COLOR.white)};
  box-shadow: ${props =>
    props.top === 1 ? "" : "rgba(43, 83, 135, 0.08) 0px 3px 8px 0px"};
  padding-top: ${props => (props.top === 1 ? "20px" : "15px")};
  padding-bottom: ${props => (props.top === 1 ? "30px" : "15px")};
`

const Menu = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
`

const MenuItem = styled.li`
  display: inline-block;
  padding-left: 13px;
  padding-right: 20px;
  list-style-type: none;
`
const SectionLink = styled.a`
  color: ${COLOR.black};
  font-size: 18px;
  font-weight: 700;
  position: relative;
  padding: 5px;
  transition: all 0.15s ease-in-out 0s;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: calc(100% - 8px);
    height: 11px;
    bottom: 6px;
    left: 0px;
    z-index: -1;
    box-sizing: inherit;
    background: ${props => (props.top === 1 ? COLOR.pink : "#9be3de")};
    transform: ${props => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: ${props =>
    props.active ? "left center 0px" : "right center 0px"};
    transition: ${props =>
    props.active
      ? "transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68) 0s"
      : "transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s"};
  }
  &:hover {
    color: ${COLOR.black};
  }
`

const PageLink = styled(Link)`
  color: ${COLOR.black};
  font-size: 18px;
  font-weight: 700;
  position: relative;
  padding: 5px;
  transition: all 0.15s ease-in-out 0s;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: calc(100% - 8px);
    height: 11px;
    bottom: 6px;
    left: 0px;
    z-index: -1;
    box-sizing: inherit;
    background: ${COLOR.pink};
    transform: ${props => (props.active ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: ${props =>
    props.active ? "left center 0px" : "right center 0px"};
    transition: ${props =>
    props.active
      ? "transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68) 0s"
      : "transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s"};
  }
  &:hover {
    color: ${COLOR.black};
  }
`

const LogoStyle = css`
  position: absolute;
  width: ${props => (props.top === 1 ? "70px" : "50px")};
  height: ${props => (props.top === 1 ? "70px" : "50px")};
  margin-top: ${props => (props.top === 1 ? "60px" : "")};
  margin-left: ${props => (props.top === 1 ? "110px" : "")};
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.15s ease-in-out 0s;
  ${props => (props.first ? LogoStyle : "")}
`

const isCurrentActive = (currentMenu = 'me', id) => {
  if (currentMenu === id) return true
  return 0
}

const Header = ({ menuList = [], onClickMenu, currentMenu, isSecondPage }) => {
  const [scrollIsTop, setScrollIsTop] = useState(1)
  const [isHamburgerActive, setHamburgerActive] = useState(false)

  useEffect(() => {
    if (isSecondPage) {
      console.log("isSecondPage", isSecondPage)
      setScrollIsTop(1)
    }
  }, [isSecondPage])

  useScrollEvent(
    ({ currPos }) => {
      if (Math.abs(currPos.y) < 10) {
        setScrollIsTop(1)
      } else {
        setScrollIsTop(0)
      }
    },
    [scrollIsTop]
  )

  const handleClickMenu = isActive => () => {
    setScrollIsTop(isActive ? 1 : 0)
    setHamburgerActive(!isActive)
  }

  const MenuItemList = menuList.map(({ id = "", label = "" }) => (
    <MenuItem key={id} className="navbar-item">
      {id === "blog" ? (
        <PageLink to="/blog" active={isCurrentActive(currentMenu, id)}>
          {label}
        </PageLink>
      ) : (
          <SectionLink
            top={scrollIsTop}
            onClick={onClickMenu(id)}
            active={isCurrentActive(currentMenu, id)}
          >
            {label}
          </SectionLink>
        )}
    </MenuItem>
  ))

  return (
    <NavBar
      className="navbar is-fixed-top header"
      top={scrollIsTop}
      role="navigation"
      aria-label="main navigation"
      style={{ width: "100%" }}
    >
      <div className="container">
        <div className="navbar-brand">
          <Logo
            id="brand"
            src={planet}
            alt="logo"
            height="100"
            onClick={onClickMenu("me")}
            top={scrollIsTop}
            first
          />
        </div>
        <div className="navbar-start">
          <a id="logo" href="#me" className="force-center">
            <Logo
              src={planet}
              alt="logo"
              height="100"
              onClick={onClickMenu("me")}
            />
          </a>
          <a
            role="button"
            href="#burger"
            className={classNames("navbar-burger", "left-burger", {
              "is-active": isHamburgerActive,
            })}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleClickMenu(isHamburgerActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          className={classNames("navbar-menu", {
            "is-active": isHamburgerActive,
          })}
        >
          <div className="navbar-end">
            <Menu className="menu">{MenuItemList}</Menu>
          </div>
        </div>
      </div>
    </NavBar>
  )
}

export default memo(Header)
