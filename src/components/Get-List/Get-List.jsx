import React from "react";
import { useSelector } from "react-redux";
import GetCard from "../Get-Card/Get-Card";
import Button from "../Buttons/Button";
import { selectUsers, selectPage, selectTotalPages } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { paginatePage } from "../../redux/userSlice";
import { getUsers } from "../../redux/userOperations";
import styles from "./Get-List.module.scss"

function GetList() {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const loadMore = () => {
    dispatch(paginatePage(page + 1));
    dispatch(getUsers(page + 1));
  };

  return (
    <section className={`container ${styles.wrapper}`}>
      <h2 className={styles.title}>Working with GET request</h2>
      <ul className={styles.user_list}>
        {allUsers.map((user) => (
          <li key={user.id} className={styles.card}>
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
      {page !== totalPages && (
        <Button text={"Show more"} type={"button"} onClick={loadMore} />
      )}
    </section>
  );
}

export default GetList;
