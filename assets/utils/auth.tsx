import auth from "@react-native-firebase/auth";
import { Alert, ToastAndroid } from "react-native";
import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
import * as Haptics from "expo-haptics";
export const signIn = (email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show("Logged in", ToastAndroid.SHORT);
    })
    .catch((err) => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert(
        "Authentication Problem",
        "Student Not Found in the Database. Please contact the Admin to resolve this issue. ",
        [
          {
            text: "OK, I Understand",
            onPress: () => console.log("Cancel Pressed"),
          },
        ]
      );
    });
};

export const signUp = (email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show("Signed up", ToastAndroid.SHORT);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      ToastAndroid.show("Signed Out", ToastAndroid.SHORT);
    });
};
