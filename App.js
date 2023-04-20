import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>#TODO</Text>
      <View style={[styles.row, styles.marginTop]}>
        <TextInput placeholder="What shall i add today ?" style={styles.input} />
        <Button title="Add" color='#9bebc3' textColor='#1cb066' />
      </View>
      <FlatList
        style={styles.list}
        data={sampleGoals}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
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

  marginTop: {
    marginTop: 16
  },

  input: {
    height: 40,
    width: 200,
    padding: 10,
    borderWidth: 3,
    borderRadius: 5,
    marginRight: 10,
    borderColor: '#aefcd5',
  },

  list: {
    backgroundColor: '#70dba5',
    maxHeight: 150,
    marginTop: 20,
    borderRadius: 5,
    paddingHorizontal: 5
  },

  item: {
    padding: 5,
    color: '#c8f7df',
    fontWeight: '500',
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