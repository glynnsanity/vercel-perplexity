import { ReactNode } from "react";
import React from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App Router</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
