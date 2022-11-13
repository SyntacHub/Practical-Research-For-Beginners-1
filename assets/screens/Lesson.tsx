import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import researchTopics from "../data/LessonsData";
import {
	Text,
	Box,
	Row,
	Column,
	ScrollView,
	Icon,
	useColorMode,
} from "native-base";
interface Props {
	route: any;
}

const Lesson: React.FC<Props> = ({ route }) => {
	const navigation = useNavigation<any>();
	const { item } = route.params;
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			safeArea
			_light={{ bg: "light.50" }}
			_dark={{ bg: "dark.50" }}
			height={"100%"}
		>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar
					barStyle={colorMode === "light" ? "dark-content" : "light-content"}
				/>
				<Box width={"90%"} mx={"auto"}>
					<Row justifyContent={"space-between"}>
						<TouchableOpacity>
						<Box
								p={2.5}
								_light={{ bg: "emerald.100" }}
								_dark={{ bg: "emerald.800" }}
								borderRadius={10}
							>
								<Icon
									as={Feather}
									name="arrow-left"
									size={6}
									_light={{ color: "emerald.900" }}
									_dark={{ color: "emerald.100" }}
									onPress={() => navigation.goBack()}
								/>
							</Box>
						</TouchableOpacity>
						<TouchableOpacity>
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
									onPress={() => navigation.goBack()}
							
								/>
							</Box>
						</TouchableOpacity>
					</Row>
					<Box my={4}>
					<Text fontFamily={"SFProDisplay-Bold"} fontSize={30}>
						{item.title}
					</Text>
					<Text fontFamily={"SFProDisplay-Bold"} fontSize={15}>
						{item.topicIndex}
					</Text>
					<Text fontFamily={"SFProDisplay-Bold"}  fontSize={20}>
						Topic Title
					</Text>
					<Text fontFamily={"SFProDisplay-Regular"}  fontSize={15}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
						libero optio deserunt, cum quae quaerat maxime rem amet quas?
						Accusantium, dolores.
					</Text>
					</Box>
					
				</Box>
			</ScrollView>
		</Box>
	);
};

export default Lesson;
