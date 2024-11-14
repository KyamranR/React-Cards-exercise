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

  const addData = async (endpoint = "") => {
    try {
      const response = await axios.get(`${baseUrl}${endpoint}`);
      setData((prevData) => [...prevData, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearData = () => {
    setData([]);
  };

  return [data, addData, clearData];
}

export { useFlip, useAxios };
