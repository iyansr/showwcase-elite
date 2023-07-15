import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Box from '@showwcase/components/basic/Box';
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
      <body className={inter.className} style={{ background: '#0a0a0a', color: '#fafafa' }}>
        <StyledComponentsRegistry>
          <RQProvider>
            <ThemeProvider>
              <Box px={4} mx="auto" maxWidth={1024}>
                {children}
              </Box>
              <div id="modal-portal" />
            </ThemeProvider>
          </RQProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
