import styled from "styled-components";
import { background, border, layout, position, space, color } from "styled-system";
import {BoxProps} from "./types";

const Box = styled.div<BoxProps>`
  ${color}
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Box;