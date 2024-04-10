import { useFormikContext } from "formik";
import ErrorMessage from "./forms/ErrorMessage";
import ImageInputList from "./ImageInputList";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageURIs = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageURIs, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageURIs.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
