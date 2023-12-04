import { Image, StyleSheet, View, FlatList } from 'react-native'
import AppText from '../components/AppText'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../utils/color'
import ListItemSeparator from '../components/ListItemSeparator'
import Icon from '../components/Icon'

const { primary, secondary, light, medium, white } = colors;

const menuItems = [
  { icon: { name: 'format-list-bulleted', color: primary}, title: 'My Listings'},
  { icon: { name: 'email', color: secondary}, title: 'My Messages'}
]
const AccountScreen = () => {
  return (
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.accountHeader}>
            <Image
              style={styles.headerImage}
              source={require('../assets/avatar.png')}
            />
            <View>
              <AppText style={styles.name}>Allen Taylor</AppText>
              <AppText style={styles.username}>allen.taylor@gmail.com</AppText>
            </View>
          </View>
          <FlatList
            style={styles.listContainer}
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) =>
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon 
                    name={item.icon.name}
                    backgroundColor={item.icon.color}
                />}
              />
            }
            ItemSeparatorComponent={ListItemSeparator}
          />
          <View style={styles.logout}>
            <ListItem
              title='Logout'
              IconComponent={
                <Icon
                  name='logout'
                  backgroundColor='#ffe66d'
                />
              }
            />
          </View>
        </View>
      </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  accountHeader: {
    flexDirection: 'row',
    backgroundColor: white,
    padding: 15,
  },
  container: {
    flex: 1,
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2.0,
    marginRight: 10,
    resizeMode: 'contain'
  },
  logout: {
    position: 'relative',
    bottom: 400,
    marginTop: 20,
  },
  listContainer: {
    marginTop: 40
  },
  name: {
    fontWeight: '400'
  },
  screen: {
    backgroundColor: light
  },
  username: {
    color: medium
  }
})