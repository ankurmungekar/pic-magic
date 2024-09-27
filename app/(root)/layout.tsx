import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">
          <UserButton />
          {children}</div>
      </div>
    </main>
  )
}

export default Layout