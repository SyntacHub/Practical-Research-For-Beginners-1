import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const IntroModal = () => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'column',marginTop:30}}>
            <Text style={{fontFamily:"SFProDisplay-Bold",fontSize:20}}>
                Practical Research 
            </Text>
            <Text>
                For Beginners
            </Text>

            </View>
            
        </View>
    )
}

export default IntroModal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

})