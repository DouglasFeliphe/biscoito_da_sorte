import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

const PickerComponent = ({label, value, onValueChange, items}) => {
  const listaDeItens = items.map(item => (
    <Picker.Item key={item} label={item} value={item} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}>
        {listaDeItens}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 11,
    marginBottom: 20,
  },
});

export default PickerComponent;
