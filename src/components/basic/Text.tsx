'use client';

import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import {
  color,
  type ColorProps,
  compose,
  space,
  type SpaceProps,
  typography,
  type TypographyProps,
} from 'styled-system';

type Props = ColorProps & SpaceProps & TypographyProps;

const Text = styled.p.withConfig({
  shouldForwardProp: (props) => true,
})<PropsWithChildren<Props>>(
  {
    all: 'unset',
    cursor: 'pointer',
  },
  compose(color, space, typography),
);

export default Text;
