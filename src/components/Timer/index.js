import { useEffect, useState } from "react";
import { getTimeBreakUp } from "./helpers";

const Timer = ({ duration, onExpire }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    if (time <= 1000) {
      clearTimeout(timer);
      onExpire && onExpire();
    }

    return () => clearTimeout(timer);
  }, [time, onExpire]);

  const { days, hours, minutes, seconds } = getTimeBreakUp(time);

  return (
    <div>
      {days} : {hours} : {minutes} : {seconds}
    </div>
  );
};

export default Timer;
