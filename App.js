import { useState } from 'react';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

const categories = [
  { label: "Funiture", value: "1"},
  { label: "Clothing", value: "2"},
  { label: "Cameras", value: "3"},
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <LoginScreen />
  );
}