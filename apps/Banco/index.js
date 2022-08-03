import React from 'react';
import {
  Alert,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Slider} from '@react-native-community/slider';
import {Container} from '../../shared/components/Container';
import {ContentWrapper} from '../../shared/components/ContentWrapper';
import {Spacer} from '../../shared/components/Spacer';
import {Divider} from '../../shared/components/Divider';

import bancoImg from '../../assets/banco.png';

const Banco = () => {
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [sexo, setSexo] = React.useState('masculino');
  // const [limite, setLimite] = React.useState('');
  const [ehEstudante, setEhEstudante] = React.useState(false);

  const criarConta = () => {
    if (!nome) {
      Alert.alert('Erro', 'Preencha o nome');
      return;
    }

    if (!idade) {
      Alert.alert('Erro', 'Preencha a idade');
      return;
    }

    Alert.alert(
      'Conta criada com sucesso!',
      'Nome: ' +
        nome +
        '\n' +
        'Idade: ' +
        idade +
        '\n' +
        'Sexo: ' +
        sexo +
        '\n' +
        'Estudante: ' +
        (ehEstudante ? 'Sim' : 'Não'),
    );
  };

  return (
    <Container>
      <Text style={styles.title}>Banco</Text>
      <Image source={bancoImg} style={styles.bancoImg} />
      <Spacer height={33} />
      <ContentWrapper>
        <TextInput
          style={styles.input}
          placeholderTextColor={primaryColor}
          placeholder="Informe seu nome: "
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <Spacer height={15} />
        <TextInput
          style={styles.input}
          placeholder="Informe sua idade: "
          value={idade}
          placeholderTextColor={primaryColor}
          onChangeText={text => setIdade(text)}
        />
      </ContentWrapper>
      <Spacer height={44} />
      <ContentWrapper horizontal>
        <Text style={styles.text}>Informe seu sexo: </Text>
        <Picker
          style={styles.picker}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
        </Picker>
      </ContentWrapper>
      <ContentWrapper>
        <Text style={styles.text}>Limite</Text>
        {/* <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#000"
          thumbTintColor="#000"
          value={50}
          onValueChange={value => console.log(value)}
        /> */}
      </ContentWrapper>
      <ContentWrapper horizontal>
        <Text style={styles.text}>Estudante: </Text>
        <Switch
          thumbColor={primaryColor}
          trackColor={{true: primaryColor, false: '#333'}}
          value={ehEstudante}
          onValueChange={value => setEhEstudante(value)}
        />
      </ContentWrapper>
      <Spacer height={33} />
      <Divider />
      <ContentWrapper>
        <TouchableOpacity style={styles.button} onPress={criarConta}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </ContentWrapper>
      <Spacer height={33} />
    </Container>
  );
};

const primaryColor = '#ff888f';

const styles = StyleSheet.create({
  title: {
    marginTop: 22,
    fontSize: 44,
    fontWeight: 'bold',
    color: '#333',
  },
  bancoImg: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: primaryColor,
  },
  picker: {
    width: '40%',
  },
  input: {
    // height: 55,
    // flex: 2,
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: primaryColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: primaryColor,
    // borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Banco;
