import {Box, BoxProps} from "../Box";
import styled from "styled-components";

const Sidebar = styled(Box)<BoxProps>`
  background: ${({theme}) => theme.colors.black};
 `;

export default Sidebar;