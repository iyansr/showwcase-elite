'use client';

import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import {
  border,
  type BorderProps,
  color,
  type ColorProps,
  compose,
  flexbox,
  type FlexboxProps,
  grid,
  type GridProps,
  layout,
  type LayoutProps,
  position,
  space,
  type SpaceProps,
} from 'styled-system';

type Props = ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BorderProps &
  PositionOptions &
  SpaceProps;

const Box = styled.div.withConfig({
  shouldForwardProp: () => true,
})<PropsWithChildren<Props>>(compose(color, layout, flexbox, grid, border, position, space));

export default Box;
