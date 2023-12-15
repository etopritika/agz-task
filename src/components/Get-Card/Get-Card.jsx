import FakeImg from "../../images/photo-cover.svg";
import styles from "./Get-Card.module.scss"

function GetCard({
  photo = FakeImg,
  name = "",
  position = "",
  email = "",
  phone = "",
}) {
  return (
    <>
      <img src={photo} width={70} height={70} alt="Employee" />
      <h3 className={styles.name}>{name}</h3>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
}

export default GetCard;
