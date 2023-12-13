import React from "react";
import InputField from "./components/InputField";
import RadioButtons from "./components/RadioButtons";
import FileUpload from "./components/FileUpload";
import Button from "../Buttons/Button";
// import { selectToken } from "../../redux/selectors";
// import { useDispatch, useSelector } from "react-redux";

function MakePost() {
  return (
    <section>
      <h2>Working with POST request</h2>
      <form action="/submit" method="post" encType="multipart/form-data">
        <InputField
          placeholder="Your name"
          id="name"
          type="text"
          name="name"
          autocomplete="name"
          required
        />
        <InputField
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          autocomplete="email"
          required
        />
        <InputField
          placeholder="Phone"
          id="phone"
          type="tel"
          name="phone"
          autocomplete="phone"
          required
        />
        <RadioButtons
          label="Select your position"
          name="position"
          options={[
            { value: "Frontend developer", label: "Frontend developer" },
            { value: "Backend developer", label: "Backend developer" },
            { value: "Designer", label: "Designer" },
            { value: "QA", label: "QA" },
          ]}
        />
        <FileUpload
          label="Додати фото:"
          id="photo"
          name="photo"
          accept="image/*"
          required
        />
        <Button text={"Sign up"} type={"submit"} />
      </form>
    </section>
  );
}

export default MakePost;
