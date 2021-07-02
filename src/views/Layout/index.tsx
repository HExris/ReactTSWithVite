import React from 'react'

const Layout: React.FC = (props) => {
  console.log(props)
  return <div className="layout">{props.children.map((child) => child)}</div>
}

export default Layout
