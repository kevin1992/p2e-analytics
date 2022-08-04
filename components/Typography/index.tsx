import styled from "styled-components";
import {typography,TypographyProps} from "styled-system";
import {ThemeType} from "../../styles/theme";
import {Box, BoxProps} from "../Box";

interface MyTypographyProps extends Omit<TypographyProps<ThemeType>, "fontFamily"> {
  fontFamily?: keyof ThemeType['fonts'];
}

const Typography = styled(Box)<MyTypographyProps & BoxProps>`
  ${typography}
`;

Typography.defaultProps = {
  fontSize: 'medium',
  fontFamily: 'filson'
};

export default Typography;