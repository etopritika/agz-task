import React, { useState } from "react";
import InputField from "./components/InputField";
import RadioButtons from "./components/RadioButtons";
import FileUpload from "./components/FileUpload";
import Button from "../Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../redux/userOperations";
import { selectPositions, selectIsLoading } from "../../redux/selectors";
import styles from "./Make-Post.module.scss";

function MakePost() {
  const dispatch = useDispatch();
  const positions = useSelector(selectPositions);
  const isLoading = useSelector(selectIsLoading);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    position_id: null,
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(postUser(formData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "position") {
      const [position_id, position] = value.split(",");
      setFormData((prevData) => ({
        ...prevData,
        position: position,
        position_id: parseInt(position_id),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFile = (file = {}) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: file[0],
    }));
  }
  
  const isButtonDisabled =
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.position ||
    !formData.photo ||
    isLoading;

  return (
    <section className={`container ${styles.wrapper}`}>
      <h2 className={styles.title}>Working with POST request</h2>
      <form
        className={styles.form_wrapper}
        onSubmit={handleSubmit}
        action="/submit"
        method="post"
        encType="multipart/form-data"
        id="signup"
      >
        <InputField
          placeholder="Your name"
          id="name"
          type="text"
          name="name"
          autocomplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          minLength={2}
          maxLength={60}
        />
        <InputField
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          autocomplete="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          placeholder="Phone"
          id="phone"
          type="tel"
          name="phone"
          autocomplete="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          pattern="^\+380[0-9]{9}$"
        />
        <RadioButtons
          label="Select your position"
          name="position"
          options={positions}
          value={formData.position}
          onChange={handleChange}
        />
        <FileUpload
          onChange={handleFile}
        />
        <Button text={"Sign up"} type={"submit"} disabled={isButtonDisabled}/>
      </form>
    </section>
  );
}

export default MakePost;
