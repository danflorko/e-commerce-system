import React, { Suspense } from 'react';
import { config } from "@fortawesome/fontawesome-svg-core";

import Sidebar from './components/Sidebar/sidebar';
import Providers from './provider';
import Loading from './loading';

import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

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


async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Sidebar />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout