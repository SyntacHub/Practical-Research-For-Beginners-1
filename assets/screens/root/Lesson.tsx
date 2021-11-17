import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import React, { useCallback, useMemo, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import lessonSources from "../../data/LessonsSources";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";

interface Props {
	route: any;
}

const Lesson: React.FC<Props> = ({ route }) => {
	const navigation = useNavigation<any>();
	const { item } = route.params;
	const bottomSheetRef = useRef<BottomSheet>(null);
	const handleClosePress = () => bottomSheetRef.current.close()
	// variables
  const snapPoints = useMemo(() => ['25%', '50%', '75%','100%'], []);
	const insets = useSafeAreaInsets();

	//render
	const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );
	// callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
	
	console.log(item);
	console.log("Lesson Initialized");
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				{/* Header */}
				<View style={styles.contentWrapper}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<TouchableOpacity>
							<Feather
								name="arrow-left"
								size={24}
								color="black"
								onPress={() => navigation.goBack()}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("SourceModal")}
						>
							<Feather name="book" size={24} color="black" onPress={handleClosePress} />
						</TouchableOpacity>
					</View>

					<View style={styles.textGreetingWrapper}>
						<Text style={styles.textTitle}>{item.title} </Text>
						<Text style={styles.textTopicIndex}>{item.topicIndex}</Text>
					</View>
				</View>

				{/*Content*/}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: Colors.lightGreen,
						marginHorizontal: 20,
						marginVertical: 20,
						borderRadius: 15,
					}}
				>
					<Image
						source={item.topicImage}
						style={{ resizeMode: "contain", width: "75%" }}
					/>
				</View>
				<TouchableOpacity>
					<View
						style={{
							backgroundColor: Colors.bluebg,
							position: "absolute",
							paddingHorizontal: 15,
							paddingVertical: 15,
							borderRadius: 15,
							marginTop: -50,
							marginLeft: 285,
						}}
					>
						<Feather name="alert-octagon" size={20} color="black" />
					</View>
				</TouchableOpacity>

				{/*Content 2*/}

				<Text style={styles.header}>Sample Text</Text>
				<Text style={styles.body}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				<Text style={styles.header}>Sample Text</Text>
				<Text style={styles.body}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				<Text style={styles.header}>Sample Text</Text>
				<Text style={styles.body}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				{/* Modal */}
				<BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={["40%", "60%", "90%"]}
				backdropComponent={renderBackdrop}
				onChange={handleSheetChanges}
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
			</ScrollView>
		</SafeAreaView>
	);
};

export default Lesson;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	contentWrapper: {
		marginTop: Platform.OS === "ios" ? 15 : 50,
		marginLeft: 25,
		marginRight: 25,
	},
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textTopicIndex: {
		fontFamily: "SFProDisplay-Medium",
		color: Colors.textLight,
		fontSize: 18,
	},
	textTitle: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.text,
		fontSize: 30,
	},
	topicImage: {
		alignSelf: "center",
	},
	header: {
		marginTop: 15,
		paddingHorizontal: 20,
		fontFamily: "SFProDisplay-Bold",
		fontSize: 20,
	},
	body: {
		marginTop: 10,
		paddingHorizontal: 20,
		fontFamily: "SFProDisplay-Regular",
		fontSize: 15,
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
	contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
