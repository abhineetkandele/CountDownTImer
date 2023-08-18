import { useState } from "react";
import Timer from "../Timer";

const RestartTimer = ({ duration, onExpire, onRestart }) => {
  const [isTimeExpired, setIsTimeExpired] = useState(false);

  const handleExpire = () => {
    setIsTimeExpired(true);
    onExpire && onExpire();
  };

  const handleRestart = () => {
    setIsTimeExpired(false);
    onRestart && onRestart();
  };

  return isTimeExpired ? (
    <button onClick={handleRestart}>Restart Timer</button>
  ) : (
    <Timer duration={duration} onExpire={handleExpire} />
  );
};

export default RestartTimer;
