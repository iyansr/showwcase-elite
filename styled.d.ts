import type { theme } from '@showwcase/lib/styled-components/themeProvider';

import 'styled-components';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
