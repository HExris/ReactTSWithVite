import React from 'react'

// 用于包裹Route传递Router参数
const RouteWrapper = ({ Comp, location }: any) => {
  return <Comp location={location} />
}

export default RouteWrapper
