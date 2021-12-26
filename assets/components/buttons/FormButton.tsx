
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const FormButton = ({
  labelText = '',
  handleOnPress = null,
  style,
  isPrimary = true,
  ...more
}) => (
    <TouchableOpacity
        style={{
            paddingVertical: 10,
            backgroundColor: isPrimary ? Colors.primary : Colors.white,
            borderWidth: 1,
            borderColor: Colors.primary,
            borderRadius: 5,
            ...style,
        }}
        activeOpacity={0.9}
        onPress={handleOnPress}
        {...more}>
        <Text
            style={{
                textAlign: 'center',
                fontSize: 18,
                color: isPrimary ? Colors.white : Colors.primary,
            }}>
            {labelText}
        </Text>
    </TouchableOpacity>
);

export default FormButton;