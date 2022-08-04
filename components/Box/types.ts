import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ColorProps,
  GridProps as _GridProps,
} from "styled-system";
import {ThemeType} from "../../styles/theme";

export interface BoxProps
  extends BackgroundProps<ThemeType>,
    BorderProps<ThemeType>,
    LayoutProps<ThemeType>,
    ColorProps<ThemeType>,
    PositionProps<ThemeType>,
    SpaceProps<ThemeType>{
}

export interface FlexProps extends BoxProps, FlexboxProps<ThemeType> {
}

export interface GridProps extends FlexProps, _GridProps<ThemeType> {
}