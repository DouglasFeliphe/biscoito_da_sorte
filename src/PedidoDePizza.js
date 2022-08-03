import React, {useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import PickerComponent from './PickerComponent';
import {KeyboardAvoidingView} from 'react-native';

const sabores = ['calabreza', 'mussarela', 'portuguesa', 'frango'];
const tamanhos = ['Pequena', 'Media', 'Grande'];
const recheios = ['queijo', 'presunto', 'azeitona', 'pimenta'];

const PedidoDePizza = () => {
  const [sabor, setSabor] = React.useState('calabreza');
  const [tamanho, setTamanho] = React.useState('Pequena');
  const [recheio, setRecheio] = React.useState('queijo');
  const [quantidade, setQuantidade] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    calcularTotal();
  }, [sabor, tamanho, recheio, quantidade]);

  // create a function to calculate the total price of the pizza based on the size and quantity of the pizza ordered and the price of the pizza itself
  const calcularTotal = () => {
    let valorSabor = 0;
    let valorTamanho = 0;
    let valorRecheio = 0;
    let valorQuantidade = 0;

    switch (sabor) {
      case 'calabreza':
        valorSabor = 10;
        break;
      case 'mussarela':
        valorSabor = 15;
        break;
      case 'portuguesa':
        valorSabor = 20;
        break;
      case 'frango':
        valorSabor = 25;
        break;
      default:
        break;
    }

    switch (tamanho) {
      case 'Pequena':
        valorTamanho = 10;
        break;
      case 'Media':
        valorTamanho = 15;
        break;
      case 'Grande':
        valorTamanho = 20;
        break;
      default:
        break;
    }

    switch (recheio) {
      case 'queijo':
        valorRecheio = 5;
        break;
      case 'presunto':
        valorRecheio = 10;
        break;
      case 'azeitona':
        valorRecheio = 15;
        break;
      case 'pimenta':
        valorRecheio = 20;
        break;
      default:
        break;
    }

    valorQuantidade = valorSabor + valorTamanho + valorRecheio;

    setTotal(valorQuantidade * quantidade);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido De Pizza</Text>
      <View style={styles.pickerContainer}>
        <PickerComponent
          label="Sabor"
          value={sabor}
          onValueChange={setSabor}
          items={sabores}
        />
        <PickerComponent
          label="Tamanho"
          value={tamanho}
          onValueChange={setTamanho}
          items={tamanhos}
        />
        <PickerComponent
          label="Recheio"
          value={recheio}
          onValueChange={setRecheio}
          items={recheios}
        />
      </View>
      <Text style={styles.selectedValuesTitle}>Voce escolheu: </Text>
      <View style={styles.selectedValuesContainer}>
        <Text>Sabor: </Text>
        <Text style={styles.textSelectedValue}>{sabor}</Text>
        <Text>Tamanho: </Text>
        <Text style={styles.textSelectedValue}>{tamanho}</Text>
        <Text>Recheio: </Text>
        <Text style={styles.textSelectedValue}>{recheio}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={qty => setQuantidade(qty)}
        />
      </View>
      <View>
        <Text style={styles.totalValueText}>
          Valor Total: R${total.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 11,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  selectedValuesTitle: {
    marginTop: 22,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedValuesContainer: {
    justifyContent: 'flex-start',
    borderWidth: 1,
  },
  textSelectedValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 20,
    marginBottom: 20,
    padding: 11,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PedidoDePizza;
