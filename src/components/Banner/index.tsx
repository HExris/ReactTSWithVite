import React from 'react'
import { Carousel } from 'antd'

import style from './index.module.less'
import '@/assets/antd.hack.less'

const Banner = () => {
  return (
    <Carousel arrows={true}>
      <div>
        <h3 className={style.contentStyle}>1</h3>
      </div>
      <div>
        <h3 className={style.contentStyle}>2</h3>
      </div>
    </Carousel>
  )
}

export default Banner
