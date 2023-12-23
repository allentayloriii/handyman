import { Platform } from "react-native";

import colors from "./color";

export default {
  text: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === 'android' ? 'Roboto': 'Avenir'
  }
}