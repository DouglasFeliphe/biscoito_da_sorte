import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CronometroImg from '../../assets/cronometro.png';

const Cronometro = () => {
  const [time, setTime] = useState(0);
  const [timeStoped, setTimeStoped] = useState(0);
  const [buttonText, setButtonText] = useState('Iniciar');
  const [timerInterval, setTimerInterval] = useState(null);

  // increment time by 0.1 seconds every second
  const startTimer = () => {
    const interval = setInterval(() => {
      setTime(_time => _time + 0.1);
    }, 100);
    setTimerInterval(interval);
    setButtonText('Pausar');
  };

  // stop timer
  const stopTimer = () => {
    clearInterval(timerInterval);
    setTime(time);
    setButtonText('Continuar');
  };

  function limpar() {
    clearInterval(timerInterval);
    setTimeStoped(time);
    setTime(0);
  }

  return (
    <View style={styles.container}>
      <Image source={CronometroImg} width={200} height={200} />
      <Text style={styles.time}>{time.toFixed(1)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={
            buttonText === 'Continuar' || buttonText === 'Iniciar'
              ? startTimer
              : buttonText === 'Pausar' && stopTimer
          }>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={limpar}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lastTimeContainer}>
        <Text style={styles.lastTime}>
          Ultimo tempo: {timeStoped.toFixed(1)}s
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //create a button container
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '40%',
  },
  //create a button text style  and add it to the button style
  buttonText: {
    color: 'dodgerblue',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  time: {
    fontSize: 50,
    color: 'white',
    marginTop: -150,
  },
  lastTimeContainer: {
    margin: 44,
  },
  lastTime: {
    fontSize: 25,
    color: 'white',
  },
});

export default Cronometro;
