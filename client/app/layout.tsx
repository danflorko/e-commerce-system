import Sidebar from './components/Sidebar/sidebar';
import { config } from "@fortawesome/fontawesome-svg-core";
import React from 'react';

import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Providers } from './provider';

config.autoAddCss = false;

export const metadata = {
  title: 'Ecommerce test UI',
  description: 'Next 13 application created by Daniil Florko personally for Intetics.',
  generator: 'Next.js',
  applicationName: 'Ecommerce test UI',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Typescript'],
  authors: [{ name: 'Daniil' }, { name: 'Florko', url: 'https://github.com/danflorko' }],
  colorScheme: 'light',
  alternates: {},
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
