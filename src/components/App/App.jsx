import React from "react";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { getUsers, getPositions } from "../../redux/userOperations";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
    dispatch(getPositions());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Layout />
    </>
  );
}

export default App;
