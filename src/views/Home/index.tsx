import React, { useState } from 'react'
import { Button, DatePicker } from 'antd'
import * as moment from 'moment'

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
      <div className="App">
        <DatePicker onChange={updateDate} />
        <Button type="primary" style={{ marginLeft: 8 }} onClick={printDate}>
          Primary Button
        </Button>
      </div>
    </div>
  )
}

export default Home
