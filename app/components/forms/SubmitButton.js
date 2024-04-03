import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ text }) => {
  const formikContext = useFormikContext();

  console.dir(formikContext);

  return <AppButton text={text} onPress={formikContext.handleSubmit} />;
};

export default SubmitButton;
