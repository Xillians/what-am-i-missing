import React from "react";
import Header from "./_components/header/header";
import { Providers } from "./providers";
import './theme.scss';

export const metadata = {
  title: 'Magic gap analyzer',
  description: 'Analyze the gap between your collection your new deck',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Xillians" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Providers>
          <Header />
        </Providers>
        {children}
      </body>
    </html>
  )
}
