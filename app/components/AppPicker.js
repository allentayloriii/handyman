import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Button, FlatList, Modal, Pressable, StyleSheet, View } from 'react-native';
import colors from '../utils/color';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

const { light, medium } = colors;

const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.container}>
          {icon &&
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={medium}
            />
          }
          { selectedItem? 
            <AppText style={styles.text}>{selectedItem.label}</AppText> : 
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          }
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={medium}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='close' onPress={() => setModalVisible(false)}/>
          <FlatList 
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => 
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            }
          />
        </Screen>
      </Modal>
    </>
  )
}

export default AppPicker

const styles = StyleSheet.create({
  container: {
    backgroundColor: light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },  
  icon: {
    marginRight: 10
  },
  placeholder: {
    color: medium,
    flex: 1
  },
  text: {
    flex: 1
  }
})