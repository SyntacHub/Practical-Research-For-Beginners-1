import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import {
	Text,
	FlatList,
	Box,
	ScrollView,
	Row,
	Column,
	Switch,
	useColorMode,
	Icon,
	StatusBar,
} from "native-base";
import * as Haptics from "expo-haptics";
import HomeCard from "../components/cards/HomeCard";
import researchTopics from "../data/LessonsData";
interface Props {
	route: any;
	navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const renderItem = ({ item }: { item: any }) => {
		return (
			<TouchableOpacity
				key={item.id}
				onPress={() => {
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
					navigation.navigate("Lesson", {
						item: item,
					});
				}}
			>
				<Box
					flex={1}
					px={4}
					py={5}
					justifyContent="center"
					borderRadius={10}
					my={2}
					_light={{ bg: "light.100" }}
					_dark={{ bg: "dark.100" }}
				>
					<Box justifyContent={"space-between"} alignItems={"center"}>
						<Row justifyContent={"center"} alignItems={"center"}>
							<Box
								p={2.5}
								_light={{ bg: "emerald.100" }}
								_dark={{ bg: "emerald.800" }}
								borderRadius={10}
							>
								<Icon
									as={Feather}
									name="book"
									size={6}
									_light={{ color: "emerald.900" }}
									_dark={{ color: "emerald.100" }}
								/>
							</Box>

							<Column mx={5}>
								<Text fontFamily={"SFProDisplay-Bold"} fontSize={20}>
									{item.title}
								</Text>
								<Text fontFamily={"SFProDisplay-Medium"} fontSize={13}>
									{item.courseDesc}
								</Text>
							</Column>
						</Row>
					</Box>
				</Box>
			</TouchableOpacity>
		);
	};

	return (
		<Box safeArea _light={{ bg: "light.50" }} _dark={{ bg: "dark.50" }}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar
					barStyle={colorMode === "light" ? "dark-content" : "light-content"}
				/>
				<Box width={"90%"} mx={"auto"}>
					<Box>
						<Row flexDirection={"row-reverse"} alignItems={"center"} space={3}>
							<Icon
								as={Feather}
								name="info"
								size={25}
								onPress={() => navigation.navigate("About")}
							/>
							<Switch
								isChecked={colorMode === "light" ? false : true}
								onToggle={toggleColorMode}
								aria-label={
									colorMode === "light"
										? "switch to dark mode"
										: "switch to light mode"
								}
							/>
						</Row>

						<Box flexDirection={"column"} my={3}>
							<Text fontFamily={"SFProDisplay-Bold"} fontSize={20}>
								Welcome to the
							</Text>
							<Text fontFamily={"SFProDisplay-Bold"} fontSize={35}>
								Research eModule
							</Text>
						</Box>
						<Box>
							<HomeCard
								title={"Thank you for participating the Developer Beta Testing"}
							/>
							<Box></Box>

							<FlatList
								data={researchTopics}
								renderItem={renderItem}
								keyExtractor={(item) => item.id}
							/>
						</Box>
					</Box>
				</Box>
			</ScrollView>
		</Box>
	);
};

export default Home;
