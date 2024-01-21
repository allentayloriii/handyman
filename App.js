import "react-native-gesture-handler";
import { Button, Text, Platform } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/nagivation/AuthNavigator";
import navigationTheme from "./app/nagivation/navigationTheme";
import AppNavigator from "./app/nagivation/AppNavigator";
import RegisterScreen from "./app/screens/RegisterScreen";
import AccountScreen from "./app/screens/AccountScreen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => {
        navigation.navigate("TweetDetails", { id: 1 });
      }}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
