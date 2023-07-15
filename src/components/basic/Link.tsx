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

import NextLink from 'next/link';

type Props = ColorProps & SpaceProps & TypographyProps;

const Link = styled(NextLink).withConfig({
  shouldForwardProp: (props) => true,
})<PropsWithChildren<Props>>(compose(color, space, typography));

export default Link;
