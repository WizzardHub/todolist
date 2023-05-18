import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useState} from "react";

import CButton from "./components/CButton";
import CContainer from "./components/CContainer";
import CTitle from "./components/CTitle";
import CInput from "./components/CInput";
import CFlatList from "./components/CFlatList";
import CListItem from "./components/CListItem";
import {CButtonType} from "./enums/CButtonType";

const GOALS = [
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

export default function App() {

  const [_input, setInputValue] = useState('');
  const [_goals, setGoals] = useState(GOALS);

  const onPressAdd = () => {
    if (_input.length >= 5) {
      setGoals([..._goals, _input]) // Adding the value of the input to the array
      setInputValue('') // Resetting the input value
    }
  }

  const onPressRemove = (index) => {
    setGoals(
      _goals.filter((todo, i) => i !== index))
  }

  return (
    <CContainer>
      <CTitle value="#TODO" />
      <View style={[styles.row]}>
        <CInput value={_input} placeholder="What shall i add today ?" onChangeText={text => setInputValue(text)} />
        <CButton type={CButtonType.Default} style={styles.button} onPress={onPressAdd} value='Add' />
      </View>
      <CFlatList data={_goals} // The value of the useState
        renderItem={({item, index}) => <CListItem onPress={() => onPressRemove(index)} item={item} />}
      />
      <StatusBar style="auto" />
    </CContainer>
    );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
});