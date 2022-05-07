import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Copyright } from 'phosphor-react-native';

import sucessImg from '../../assets/success.png';

import { styles } from './styles';

export function Sucess() {
  return (
    <View style={styles.container}>
      <Image 
        source={sucessImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />

    </View>
  );
}