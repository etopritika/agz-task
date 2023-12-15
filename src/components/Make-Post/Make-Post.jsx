import React, { useState } from "react";
import InputField from "./components/InputField";
import RadioButtons from "./components/RadioButtons";
import FileUpload from "./components/FileUpload";
import Button from "../Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { postUser, getToken } from "../../redux/userOperations";
import { selectPositions } from "../../redux/selectors";


function MakePost() {
  const dispatch = useDispatch();
  const positions = useSelector(selectPositions)

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
    await dispatch(getToken())
    await dispatch(postUser(formData));
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
  
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
        [name]: name === "photo" ? files[0] : value,
      }));
    }
  };

  return (
    <section>
      <h2>Working with POST request</h2>
      <form
        onSubmit={handleSubmit}
        action="/submit"
        method="post"
        encType="multipart/form-data"
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
          label="Додати фото:"
          id="photo"
          name="photo"
          accept=".jpg,.jpeg"
          required
          onChange={handleChange}
        />
        <Button text={"Sign up"} type={"submit"} />
      </form>
    </section>
  );
}

export default MakePost;
