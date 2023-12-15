import React from "react";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { getUsers, getPositions, getToken } from "../../redux/userOperations";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUsers());
      await dispatch(getPositions());
      await dispatch(getToken());
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Layout />
    </>
  );
}

export default App;
