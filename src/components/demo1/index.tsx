// import React from 'react'
import style from './index.module.scss'
import {Button } from 'antd'
import {LikeOutlined} from '@ant-design/icons'

export default function Demo1() {
  return (
    <div className={style.box}>
      Demo1
      <Button type="primary">Primary Button</Button>
      <LikeOutlined />
    </div>
  )
}
