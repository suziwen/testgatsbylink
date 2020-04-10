import React from "react"
import { MDXProvider } from '@mdx-js/react'
import { Link } from "gatsby"

import Content from "./content.mdx"


const StyleLink = ({href, children, ...props})=>{
  const to = props.to || href
  return (
    <Link
      {...props}
      to={to}
      activeClassName="active"
    >
      {children}
    </Link>
  )
}

const components = {
  a: StyleLink
}

export default ()=> {
  return (
    <div>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
    </div>
  )
}
