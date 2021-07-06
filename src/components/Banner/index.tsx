import React from 'react'
import { Carousel } from 'antd'

import style from './index.module.less'
import '@/assets/css/antd.hack.less'

const Banner = () => {
  return (
    <Carousel arrows={true} className={style.banner}>
      <img
        className={style.bannerImg}
        src="https://nt2api.superbed.cn/static/images/2021/07/05/60e2ae285132923bf8c3bc3f.jpg"
      />
    </Carousel>
  )
}

export default Banner
