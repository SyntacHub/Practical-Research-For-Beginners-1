import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<DrawerStackParamList>;
  Home: undefined;
  Login: undefined;
  ListMenu: undefined;
  SignUp: undefined;
  Lesson: undefined;
  Quiz: undefined;
  PlayQuiz: undefined;
  Labtools: undefined;
  LabtoolsDetail: undefined;
  Assistant: undefined;
  Modal: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type DrawerStackParamList = {
  Home: undefined;
  Tips: undefined;
  Statistics: undefined;
  About: undefined;
};

export type DrawerStackScreenProps<Screen extends keyof DrawerStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<DrawerStackParamList, Screen>,
  NativeStackScreenProps<BottomTabParamList>
>;

export type BottomTabParamList = {
  Home: undefined;
};

export type RootTabScreenProps<Screen extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
