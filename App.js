import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import ListItems from './components/ListItems';
import Form from './components/Form';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Купить картошку', key: '2'},
    {text: 'Купить машину', key: '3'},
    {text: 'Купить подарок', key: '4'},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <ListItems el = {item} deleteHandler={deleteHandler}/>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
