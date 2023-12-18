import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
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
      <Main />
    </>
  );
}

export default App;
