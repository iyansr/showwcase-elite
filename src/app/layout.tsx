import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import RQProvider from '@showwcase/lib/react-query/provider';
import StyledComponentsRegistry from '@showwcase/lib/styled-components/registry';
import ThemeProvider from '@showwcase/lib/styled-components/themeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Showwcase Elite',
  description: 'Showwcase Elite',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: '#171717', color: '#fafafa' }}>
        <StyledComponentsRegistry>
          <RQProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </RQProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
