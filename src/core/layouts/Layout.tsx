import Head from "next/head"
import React, {FC} from "react"
import {BlitzLayout} from "@blitzjs/next"

const Layout: BlitzLayout<{title?: string; children?: React.ReactNode}> = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title || "blitz-new-issue-v2.0.0-beta.27"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

export default Layout
