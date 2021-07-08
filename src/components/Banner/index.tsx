import React, {
  Ref,
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
  Component,
  ReactPropTypes
} from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
// Style
import style from './index.module.less'
import '@/assets/css/antd.hack.less'

// Components
import { CarouselRef } from 'antd/lib/carousel'
import { Link } from 'react-router-dom'
import { type } from 'os'

const Banner = () => {
  const SliderInstance = useRef<CarouselRef>(null)
  interface BannerItem {
    id: number
    name: string
    img: string
    jumpUrl?: string
  }

  const [banners, setBanners] = useState<BannerItem[]>([])
  useEffect(() => {
    setBanners([
      {
        id: 1,
        name: 'title',
        img: 'https://nt2api.superbed.cn/static/images/2021/07/05/60e2ae285132923bf8c3bc3f.jpg',
        jumpUrl: '/order'
      },
      {
        id: 2,
        name: 'title',
        img: 'https://nt2api.superbed.cn/static/images/2021/07/05/60e2ae285132923bf8c3bc3f.jpg',
        jumpUrl: 'http://baidu.com'
      }
    ])
  }, [])

  type BannerProps = {
    banner: BannerItem
  }

  const BannerItems: React.FC<BannerProps> = ({ banner }) => {
    return (
      <a href={banner.jumpUrl || '/'} key={banner.id}>
        <img className={style.bannerImg} src={banner.img} />
      </a>
    )
  }
  /**
   * @description Banner Slide
   * @param { Boolean } direction
   */
  let handledBannerClick = (direction: boolean) => {
    if (direction) {
      SliderInstance.current && SliderInstance.current.prev()
    } else {
      SliderInstance.current && SliderInstance.current.next()
    }
  }
  return (
    <div className={style.banner}>
      <Carousel className={style.banner} ref={SliderInstance} autoplay>
        {banners.map((banner) => (
          <BannerItems key={banner.id} banner={banner} />
        ))}
      </Carousel>
      <div className={style.prev} onClick={() => handledBannerClick(true)}>
        <LeftOutlined style={{ fontSize: '10px', color: '#fff' }} />
      </div>
      <div className={style.next} onClick={() => handledBannerClick(false)}>
        <RightOutlined style={{ fontSize: '10px', color: '#fff' }} />
      </div>
    </div>
  )
}

export default Banner
