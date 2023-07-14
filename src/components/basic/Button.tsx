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

const Button = styled.button.withConfig({
  shouldForwardProp: (props) => !['type'].includes(props),
})<PropsWithChildren<Props>>(
  {
    all: 'unset',
    cursor: 'pointer',
  },
  compose(color, layout, flexbox, grid, border, position, space),
);

export default Button;
