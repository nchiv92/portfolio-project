import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./data.scss";
import { fetchData } from "../../store/reducers/FootballDataReducer";
import { RootState } from "../../store";
import { FootballData } from "../../utils/types";

const Data = (props: any) => {
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch();
  const data: FootballData = useSelector((state: RootState) => {
    return state.footballData.data;
  });
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [data]);

  return (
    <div className="DataContainer">
      {fetching ? "Loading" : "coming soon..."}
    </div>
  );
};

export default Data;
