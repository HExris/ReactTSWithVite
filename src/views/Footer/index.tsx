import React from 'react'
import './index.less'

interface Config {
  SERVICE_PHONE: string
  SERVICE_WECOM: string
  SERVICE_QRCODE: string
  [key: string]: string
}

const conf = (key: string): string | undefined => {
  const envConf: Config = {
    SERVICE_PHONE: '0755-22731222',
    SERVICE_WECOM: '小田',
    SERVICE_QRCODE: 'http://appstore-wxvendor.test-caagw.yunassess.com/img/qrcode.e4097f2b.png'
  }
  return envConf[key] || undefined
}

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <span>客服电话：{conf('SERVICE_PHONE')}</span>
      <span>企业微信：{conf('SERVICE_WECOM')}</span>
      <div className="QR-code">
        <img src={conf('SERVICE_QRCODE')} />
        <div className="code-detail">
          <img src={conf('SERVICE_QRCODE')} />
          <span>使用“企业微信”扫码添加客服</span>
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
