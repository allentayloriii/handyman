import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type LocationFormProps = {
  onSubmit: (name: string) => void;
};

const LocationForm = ({ onSubmit }: LocationFormProps) => {
  const [name, setName] = React.useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name);
      setName("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationForm;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 5,
    padding: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    flex: 1,
  },
});
