import { useEffect, useState } from "react";
import stateData from "../data/stateCity.json";

const useCityList = (stateName) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
    async function fetchCities() {
      const json = stateData[stateName];
      setCities(json);
    }
  }, [stateName]);
  return cities;
};

export default useCityList;
