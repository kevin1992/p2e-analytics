import styled from "styled-components";
import {buttonStyle, ButtonStyleProps} from "styled-system";
import {ThemeType} from "../../styles/theme";

interface ButtonProps {
  active?: boolean;
  block?: boolean;
  variant: keyof ThemeType['buttons'];
}

const Button = styled.button<Omit<ButtonStyleProps<ThemeType>, "variant"> & ButtonProps>`
  border: none;
  cursor: pointer;
  ${buttonStyle};
  padding: ${({theme}) => theme.space.sm} ${({theme}) => theme.space.lg};
  background-color: ${({theme, active, variant}) => active ? theme.buttons[variant].activeBgColor : theme.buttons[variant].bgColor};
  width: ${({block}) => block ? '100%' : 'auto'};
`;

export default Button;
