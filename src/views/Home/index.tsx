import React, { useState } from "react";
import { Button, DatePicker } from "antd";

interface IHomeState {
  date: String;
}

function Home() {
  const [state, setDate] = useState<IHomeState>({
    date: "",
  });

  const printDate = (): void => {
    console.log(state.date);
  };

  const updateDate = (date, dateString): void => {
    setDate({
      date: dateString,
    });
  };

  return (
    <div className="home">
      <div className="App">
        <DatePicker onChange={updateDate} />
        <Button type="primary" style={{ marginLeft: 8 }} onClick={printDate}>
          Primary Button
        </Button>
      </div>
    </div>
  );
}

export default Home;
