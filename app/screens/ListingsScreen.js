import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import AppActivityIndicator from "../components/AppActivityIndicator";
import Button from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import routes from "../nagivation/routes";
import colors from "../utils/color";

const { light } = colors;

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't Retrieve the Listings</AppText>
          <Button text="Retry" onPress={getListingsApi.request} />
        </>
      )}
      {getListingsApi.loading && (
        <AppActivityIndicator loading={getListingsApi.loading} />
      )}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`\$${item.price}`}
            imageURL={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: light,
  },
});
