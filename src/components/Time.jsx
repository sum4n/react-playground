import { useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  setTime(new Date());

  return <h1>{time.toLocaleTimeString()}</h1>;
}

export default Time;
