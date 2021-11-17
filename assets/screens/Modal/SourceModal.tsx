import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomSheet,{ BottomSheetScrollView } from '@gorhom/bottom-sheet';
import lessonSources from "../../data/LessonsSources";
interface Props {
	route: any;
}

const IntroModal: React.FC<Props> = ( route:any ) => {
	const navigation = useNavigation<any>();
  
	 // ref
	 const bottomSheetRef = useRef<BottomSheet>(null);
	 const insets = useSafeAreaInsets();


	
	return (
		<View style={styles.container}>
		<BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={["40%", "60%", "90%"]}
        backgroundComponent={({ style }) => (
          <View style={[styles.customModal, style]} />
        )}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Sources Used in</Text>
					<Text>Topic Title Here</Text>
          <View style={{ marginVertical: 4 }} />
          <FlatList
            data={lessonSources}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 6 }} />
            )}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity >
                  
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            nestedScrollEnabled
          />
        </BottomSheetScrollView>
      </BottomSheet>
	</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
	title: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: 26,
    marginBottom: 16,
  },
	customModal: {
    backgroundColor: "white",
    borderRadius: 25,
  },
});
export default IntroModal;
