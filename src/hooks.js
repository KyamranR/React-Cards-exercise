import { useState } from "react";

function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);
  const flip = () => {
    setIsFlipped((isUp) => !isUp);
  };
  return [isFlipped, flip];
}

export default useFlip;
