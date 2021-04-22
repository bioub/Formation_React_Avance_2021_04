import { useState } from "react";

import Clock from "./ClockHooks";

function ClockWithControls() {
  const [delay, setDelay] = useState(1000);
  return <div>
    <input type="number" value={delay} onChange={(event) => setDelay(Number(event.target.value))} />
    <Clock delay={delay} />
  </div>
}

export default ClockWithControls;
