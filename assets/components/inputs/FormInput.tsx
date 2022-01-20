import React from 'react';
import {View, Text, TextInput,Dimensions} from 'react-native';
import Colors from '../../constants/colors';

const FormInput = ({
  labelText = '',
  placeholderText = '',
  onChangeText = null,
  value = null,
  ...more
}) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View >
      <Text>{labelText}</Text>
      <TextInput
        style={{
          padding: 15,
          alignContent:'center',
          backgroundColor:Colors.white+20,
          borderColor: Colors.black + '60',
          borderWidth: 1,
          width: screenWidth-20,
          borderRadius: 5,
          marginTop: 10,
        }}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        value={value}
        {...more}
      />
    </View>
  );
};

export default FormInput;