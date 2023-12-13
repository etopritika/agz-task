import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GetCard from "../Get-Card/Get-Card";
import Button from "../Buttons/Button";
import { selectUsers, selectPage } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { paginatePage } from "../../redux/userSlice";
import { getUsers } from "../../redux/userOperations";

function GetList() {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(allUsers);
  }, [allUsers]);

  const loadMore = () => {
    dispatch(paginatePage(page + 1))
    dispatch(getUsers(page + 1));
  };

  return (
    <section>
      <h2>Working with GET request</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <GetCard
              name={user.name}
              position={user.position}
              email={user.email}
              phone={user.phone}
              photo={user.photo}
            />
          </li>
        ))}
      </ul>
      <Button text={"Show more"} type={"button"} onClick={loadMore}/>
    </section>
  );
}

export default GetList;
