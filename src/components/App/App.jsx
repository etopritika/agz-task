import React from "react";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { getUsers, getToken } from "../../redux/userOperations";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
    dispatch(getToken());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Layout />
    </>
  );
}

export default App;
