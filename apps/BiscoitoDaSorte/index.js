import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';

import biscoitoImg from '../../assets/biscoito.jpg';
import biscoitoQuebradoImg from '../../assets/biscoito-quebrado.jpg';

const frases = [
  'A vida e uma caixa preta nunca saberemos o seu real significado',
  'Faça a pessoa que você gosta se sentir especial ao invés de só mais uma.',
  'não deveríamos temer a morte, mais sim a vida.',
  'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde..',
  'A vida é um caos aleatório,ordenada pelo tempo.',
];

const BiscoitoDaSorte = () => {
  const [numeroAleatorio, setNumeroAleatorio] = React.useState(null);

  const gerarNumeroAleatorioEQuebrarBiscoito = () =>
    setNumeroAleatorio(Math.floor(Math.random() * frases.length));

  return (
    <View style={styles.container}>
      <Image
        source={numeroAleatorio !== null ? biscoitoQuebradoImg : biscoitoImg}
        width={200}
        height={200}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={gerarNumeroAleatorioEQuebrarBiscoito}>
        <Text style={styles.button_text}>Quebrar biscoito</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.phrase}>{frases[numeroAleatorio]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 22,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'orange',
    marginLeft: 44,
    marginRight: 44,
  },
  button_text: {
    color: 'orange',
    fontSize: 33,
  },
  phrase: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 22,
    margin: 11,
  },
});

export default BiscoitoDaSorte;
