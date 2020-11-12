import { useState, useEffect } from "react";
import fetchGifs from "../helpers/FetchGifs";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchGifs(category).then((images) =>
      setState({
        data: images,
        loading: false,
      })
    );
  }, [category]);

  return state;
};

export default useFetchGifs;
