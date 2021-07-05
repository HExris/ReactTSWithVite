import React from 'react'
import { Link } from 'react-router-dom'
// Style
import style from '@/assets/layout.module.less'

interface PageHeader {
  pathname: string
}

const PageHeader = (location: PageHeader) => {
  console.log(location)
  // getCurrentRoute()
  return (
    <div className={style.header}>
      <div className={style.headerInner}>
        <Link
          to={{
            pathname: '/404'
          }}
        >
          <h1>Header</h1>
        </Link>
      </div>
    </div>
  )
}

export default PageHeader
