import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ text }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton text={text} onPress={handleSubmit} />;
};

export default SubmitButton;
