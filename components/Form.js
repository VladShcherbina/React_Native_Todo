import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Form({ addHandler}) {
    const [text, setValue] = useState('')

    const onChange = (text) => {
        setValue(text)
    }
  return (
    <View>
        <TextInput style ={styles.input} onChangeText={onChange} placeholder='ToDo' />
        <Button color='green' title='Добавить задачу' onPress={() => addHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginHorizontal: '20%',
    marginVertical: 30,
    width: '60%'
  }
});
