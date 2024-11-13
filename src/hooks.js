import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);
  const flip = () => {
    setIsFlipped((isUp) => !isUp);
  };
  return [isFlipped, flip];
}

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async () => {
    const response = await axios.get(`${baseUrl}`);
    setData((prevData) => [...prevData, { ...response.data, id: uuid() }]);
  };

  return [data, addData];
}

export { useFlip, useAxios };
