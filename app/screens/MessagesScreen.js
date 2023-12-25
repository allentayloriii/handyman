import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from '../components/lists/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'
import { useState } from 'react'

const initialMessages = [
  {
    id: 1,
    title: 'Bushido Black',
    description: 'Hey! Is this item still available?',
    image: require('../assets/avatar.png')
  },
  {
    id: 2,
    title: 'Soundtrack Samurai',
    description: "I'm interest in this item. When will you be able to post it?",
    image: require('../assets/avatar.png')
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  
  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => { console.log('Message selected', item) }}
            renderRightActions={() => 
              <ListItemDeleteAction 
                onPress={() => handleDelete(item)}
              />
            }  
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages([initialMessages[1]])}
      >
        <Text>MessagesScreen</Text>
      </FlatList>
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
})