import {Box, BoxProps} from "../Box";
import styled from "styled-components";
import {ThemeType} from "../../styles/theme";

interface CardProps extends Omit<BoxProps, "background" | "border"> {
  background?: keyof ThemeType['cards']['backgrounds'];
  border?: keyof ThemeType['cards']['borders'];
}

const Card = styled(Box)<CardProps>`
  padding: ${({theme}) => theme.space.lg} ${({theme}) => theme.space.xxl};
  ${({ theme }) => {
    return `
      @media (max-width: ${theme.breakpoints[0]}) {
        padding: 0;
      }
    `;
  }}
  background: ${({theme, background}) => theme.cards.backgrounds[background as number || 0]};
  border: ${({theme, border}) => theme.cards.borders[border as number || 0]};
  width: 100%;
`;

export default Card;