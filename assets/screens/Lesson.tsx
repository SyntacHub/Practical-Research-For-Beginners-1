import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import researchTopics from "../data/LessonsData";
import { Text, Box, Row, Column, ScrollView, Icon } from "native-base";
interface Props {
	route: any;
}

const Lesson: React.FC<Props> = ({ route }) => {
	const navigation = useNavigation<any>();
	const { item } = route.params;

	return (
		<Box safeArea bgColor={"muted.50"}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<Box width={"90%"} mx={"auto"}>
					<Row justifyContent={"space-between"}>
						<TouchableOpacity>
							<Icon name="arrow-left" size={24} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon as={Feather} name="book" color={"black"}/>
						</TouchableOpacity>
					</Row>

					<Box>
						<Text
							style={{
								fontFamily: "SFProDisplay-Bold",
		
								fontSize: 30,
							}}
						>
							{item.title}
						</Text>
						<Text>{item.topicIndex}</Text>
					</Box>
				</Box>

				<Text
					style={{
						marginTop: 15,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Bold",
					}}
				>
					Sample Text
				</Text>
				<Text
					style={{
						marginTop: 10,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Regular",
						fontSize: 15,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>
			</ScrollView>
		</Box>
	);
};

export default Lesson;
