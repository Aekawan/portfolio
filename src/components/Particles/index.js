import React from "react"
import Particles from "react-particles-js"
import styled from "styled-components"

import particle1 from "@assets/images/particle1.jpg"
import particle2 from "@assets/images/particle2.jpg"
import particle3 from "@assets/images/particle3.jpg"
import particle4 from "@assets/images/particle4.jpg"
import particle5 from "@assets/images/particle5.jpg"
import particle6 from "@assets/images/particle6.jpg"

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  z-index: -2;
`

const Particle = () => (
  <Container>
    <Particles
      params={{
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: ["images"],
            images: [
              {
                src: particle1,
                width: 25,
                height: 25,
              },
              {
                src: particle2,
                width: 18,
                height: 18,
              },
              {
                src: particle3,
                width: 32,
                height: 32,
              },
              {
                src: particle4,
                width: 41,
                height: 41,
              },
              {
                src: particle5,
                width: 22,
                height: 22,
              },
              {
                src: particle6,
                width: 22,
                height: 22,
              },
            ],
          },
          opacity: {
            value: 0.17626369048095938,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: false,
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            bounce: true,
            attract: {
              enable: true,
              rotateX: 100,
              rotateY: 400,
            },
          },
          retina_detect: true,
        },
      }}
    />
  </Container>
)

export default Particle
