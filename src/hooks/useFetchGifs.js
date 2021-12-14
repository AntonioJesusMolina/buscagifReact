import { useState, useEffect, useContext } from "react";
import { myContext } from "../components/myContext";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = () => {
  const { categories } = useContext(myContext);

  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getGifs(categories).then((imgs) => {
      setState({
        data: imgs,
      });
    });
  }, []);

  return state;
};
