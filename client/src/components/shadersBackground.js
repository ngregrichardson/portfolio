import { Flex } from "@chakra-ui/core";
import { Surface } from "gl-react-dom";
import React, { useEffect, useState } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { ContrastSaturationBrightness } from "gl-react-contrast-saturation-brightness";

const shaders = Shaders.create({
  background: {
    frag: GLSL`precision highp float;
            varying vec2 uv;
            uniform vec4 colors[3];
            uniform vec2 particles[3];
            uniform float saturation;
            void main () {
              vec4 sum = vec4(0.0);
              for (int i=0; i<3; i++) {
                vec4 c = colors[i];
                vec2 p = particles[i];
                float d = c.a * smoothstep(0.6, 0.2, distance(p, uv));
                sum += d * vec4(c.a * c.rgb, c.a);
              }
              if (sum.a > 1.0) {
                sum.rgb /= sum.a;
                sum.a = 1.0;
              }
              gl_FragColor = vec4(sum.a * sum.rgb, 1.0);
            }`,
  },
});

const ShadersBackground = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((curr) => curr + 5);
    }, 5);
  }, []);

  return (
    <Flex
      position={"absolute"}
      zIndex={-1}
      left={0}
      right={0}
      top={0}
      bottom={0}
    >
      <Surface width={"100%"} height={"100%"}>
        <ContrastSaturationBrightness saturation={0} contrast={1.1} brightness={0.5}>
          <Node
            shader={shaders.background}
            uniforms={{
              colors: [
                [Math.cos(0.002 * time), Math.sin(0.002 * time), 0.2, 1],
                [Math.sin(0.002 * time), -Math.cos(0.002 * time), 0.1, 1],
                [
                  0.3,
                  Math.sin(3 + 0.002 * time),
                  Math.cos(1 + 0.003 * time),
                  1,
                ],
              ],
              particles: [
                [0.3, 0.3],
                [0.7, 0.5],
                [0.4, 0.9],
              ],
            }}
          />
        </ContrastSaturationBrightness>
      </Surface>
    </Flex>
  );
};

export default ShadersBackground;
