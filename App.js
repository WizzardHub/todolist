import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(sampleGoals);

  const onPressAdd = () => {
    if (inputValue.length >= 5) {
      setTodos([...todos, inputValue]) // Adding the value of the input to the array
      setInputValue('') // Resetting the input value
    }
  }

  const onPressRemove = (index) => {
    setTodos(
      todos.filter((todo, i) => i !== index))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>#TODO</Text>
      <View style={[styles.row, styles.marginTop]}>
        <TextInput
          style={styles.input}
          value={inputValue} // Keep track of the current value
          placeholder="What shall i add today ?"
          onChangeText={text => setInputValue(text)} // Update the value
        />

        <Button title="Add" color="#9bebc3" textColor="#1cb066" onPress={onPressAdd} />
      </View>
      <FlatList
        style={styles.list}
        data={todos} // The value of the useState
        renderItem={({item, index}) =>
          <View style={[styles.row, styles.spaceBetween]}>
            <Text style={styles.item}>{item}</Text>
            <Pressable style={styles.miniButton} onPress={() => onPressRemove(index)}>
              <Text style={styles.miniButtonText}>Retirer</Text>
            </Pressable>
          </View>
        }
      />
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  title: {
    padding: 5,
    fontSize: 24,
    borderRadius: 5,
    color: '#1cb066',
    fontWeight: 'bold',
    backgroundColor: '#9bebc3',
  },

  row: {
    flexDirection: 'row',
  },

  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  marginTop: {
    marginTop: 16
  },

  input: {
    height: 40,
    width: 290,
    padding: 10,
    borderWidth: 3,
    borderRadius: 5,
    marginRight: 10,
    borderColor: '#aefcd5',
  },

  list: {
    backgroundColor: '#70dba5',
    maxHeight: 200,
    marginTop: 20,
    borderRadius: 5,
    paddingHorizontal: 5
  },

  item: {
    padding: 5,
    color: '#c8f7df',
    fontWeight: '500',
  },

  miniButton: {
    margin: 5,
    backgroundColor: 'rgba(255, 255, 255, .5)',
    borderRadius: 5,
    paddingHorizontal: 5,
  },

  miniButtonText: {
    color: 'rgba(0, 0, 0, .4)',
    fontWeight: 'bold'
  }
});

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
]