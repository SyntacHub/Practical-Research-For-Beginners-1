import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useTheme } from "../theme/ThemeProvider";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch } from "../components/buttons/ThemeSwitch";

function CustomDrawer(props:any) {
  const { colors, isDark } = useTheme();
  return (
    <View style={{ flex: 1,backgroundColor:colors.elevated}}>
      <DrawerContentScrollView
        {...props}
       >
        <ImageBackground
          source={require('../images/labtools/cupandsaucer.jpg')}
          style={{ padding: 20 }}>
          <Image
            source={require('../images/ic_school.png')}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'SFProDisplay-Medium',
              marginBottom: 5,
            }}>
            John Doe
          </Text>
          
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} inactiveBackgroundColor='transparent'   />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => { } } style={{ paddingVertical: 15 }}>
        <Switch />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'SFProDisplay-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { } } style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'SFProDisplay-Regular',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer;