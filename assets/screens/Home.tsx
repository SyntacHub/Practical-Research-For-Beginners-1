import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, FlatList, Box, ScrollView, Row, Column } from "native-base";
import * as Haptics from "expo-haptics";
import HomeCard from "../components/cards/HomeCard";
import researchTopics from "../data/LessonsData";
interface Props {
	route: any;
	navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
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
					py={3}
					justifyContent="center"
					borderRadius={10}
					my={2}
					bgColor={"light.100"}
				>
					<Column
						justifyContent={"space-between"}
						alignItems={"center"}
						space={4}
					>
						<Row justifyContent={"center"} alignItems={"center"}>
							<Box>
								<Text
									fontFamily={"SFProDisplay-Bold"}
									fontSize={20}
									color={"gray.900"}
								>
									{item.title}
								</Text>
								<Text
									fontFamily={"SFProDisplay-Medium"}
									color={"gray.500"}
									fontSize={13}
									mr={2}
								>
									{item.courseDesc}
								</Text>
							</Box>
						</Row>
					</Column>
				</Box>
			</TouchableOpacity>
		);
	};

	return (
		<Box safeArea bgColor="light.50">
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<Box width={"90%"} mx={"auto"}>
					<Box>
						<Box
							style={{
								flexDirection: "row-reverse",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Feather
								name="settings"
								size={25}
								onPress={() => navigation.navigate("About")}
							/>
						</Box>

						<Box flexDirection={"column"} my={3}>
							<Text
								fontFamily={"SFProDisplay-Bold"}
								color={"gray.500"}
								fontSize={20}
							>
								Hello Student!!
							</Text>
							<Text
								fontFamily={"SFProDisplay-Bold"}
								color={"black"}
								fontSize={35}
							>
								Lesson Dashboard
							</Text>
						</Box>
						<Box>
							{/* Content */}

							<HomeCard />
							<Box>
								{/* <ResearchAssistantCard />
								<LabtoolsCard /> */}
							</Box>
							<Text
								fontFamily={"SFProDisplay-Bold"}
								fontSize={20}
								color={"gray.500"}
							>
								All Research 1 Lessons
							</Text>

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
