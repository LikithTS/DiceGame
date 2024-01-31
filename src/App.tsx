/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProp = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>;

const Dice = ({imageUrl}:DiceProp) : React.JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style = {styles.diceImage}/>
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  function rollDice() {
    const randomNumber = Math.floor(Math.random()* 6) +1
    switch(randomNumber) {
      case 1: setDiceImage(DiceOne);
              break;
      case 2: setDiceImage(DiceTwo);
              break;
      case 3: setDiceImage(DiceThree);
              break;
      case 4: setDiceImage(DiceFour);
              break;
      case 5: setDiceImage(DiceFive);
              break;
      case 6: setDiceImage(DiceSix);
              break; 
      default :setDiceImage(DiceOne);
              break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDice}>
        <Text>Click to roll dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#FFF2F2'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  diceImage: {
    width : 100,
    height : 100
  }
});

export default App;
