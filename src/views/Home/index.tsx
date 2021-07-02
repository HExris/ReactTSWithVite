import React, { useState } from 'react'
import { Button, DatePicker, Carousel } from 'antd'
import * as moment from 'moment'

// Components
import Banner from '@/components/Banner'

interface IHomeState {
  date: string
}

type moment = moment.Moment

const Home: React.FC = () => {
  const [state, setDate] = useState<IHomeState>({
    date: ''
  })

  const printDate = (): void => {
    console.log(state.date)
  }

  const updateDate = (date: moment | null, dateString: string): void => {
    setDate({
      date: dateString
    })
  }

  return (
    <div className="home">
      <Banner />
    </div>
  )
}

export default Home
