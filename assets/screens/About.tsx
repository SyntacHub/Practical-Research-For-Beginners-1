import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
import * as React from "react";
import {

	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import Acknowledgements from "../data/AcknowledgementsData";
import { Text, Box, ScrollView, FlatList, Column, Icon, Row } from "native-base";

interface Props {}

const About: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
	const renderItem = ({ item }: { item: any }) => {
		return (
			<Row ml={5} mt={5} style={{ flexDirection: "row", marginLeft: 5, marginTop: 15 }}>
				<Box bgColor={"emerald.50"} borderRadius={15} p={3}>
					<Icon as={Feather} name="user" size={6} color={"emerald.700"} />
				</Box>

				<Column mx={3}>
					<Text
					fontFamily={"SFProDisplay-Bold"}
					fontSize={20}
					color={"gray.900"}
				
					>
						{item.person}
					</Text>
					<Text
						style={{
							fontFamily: "SFProDisplay-Medium",
							marginTop: 5,
							color: "black",
						}}
						numberOfLines={2}
						ellipsizeMode="tail"
					>
						{item.contrib}
					</Text>
				</Column>
			</Row>
		);
	};
	const renderOthersItem = ({ item }: { item: any }) => {
		return (
			<TouchableOpacity>
				<Box
					style={{
						flexDirection: "row",
						overflow: "hidden",
					}}
				>
					<Box style={{ flexDirection: "column", marginTop: 5 }}>
						<Box style={{ flexDirection: "row", marginLeft: 5, marginTop: 15 }}>
							<Box
								style={{
									backgroundColor: "green",
									borderRadius: 10,
									justifyContent: "center",
									alignItems: "center",
									padding: 15,
								}}
							>
								<Feather
									name="book"
									size={24}
									style={{
										color:  "white",
										alignItems: "center",
									}}
								/>
							</Box>

							<Box style={{ flexDirection: "column", marginLeft: 15 }}>
								<Text
									style={{
										fontFamily: "SFProDisplay-Bold",
										fontSize: 18,
									}}
								>
									{item.title}
								</Text>
								<Text
									style={{
										fontFamily: "SFProDisplay-Medium",
										marginTop: 5,
										color: Colors.textLighterGray,
									}}
									numberOfLines={2}
									ellipsizeMode="tail"
								>
									{item.desc}
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</TouchableOpacity>
		);
	};

	return (

			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<Box
					width={"90%"}
					mx={"auto"}
				>
					<Box>
						<Feather
							name="arrow-left"
							size={30}
							onPress={() => navigation.goBack()}
						/>
						<Box my={3}>
							<Text
							fontFamily={"SFProDisplay-Bold"}
							fontSize={35}
							color={"gray.900"}
							>
								About
							</Text>
						</Box>
						<Box>
							
							<Box
								style={{
									paddingVertical: 5,
									justifyContent: "center",
									paddingHorizontal: 10,
									borderRadius: 15,
									marginTop: 5,
								}}
							>
								<Text
									style={{
										paddingHorizontal: 10,

										fontFamily: "SFProDisplay-Bold",
										fontSize: 14,
										marginTop: 15,
									}}
								>
									Acknowledgements
								</Text>
								<FlatList
									data={Acknowledgements}
									renderItem={renderItem}
									keyExtractor={(item) => item.id}
								/>
							</Box>

						
							<Box style={{ alignItems: "center", paddingVertical: 30 }}>
								<Text
									style={{
									
										fontFamily: "SFProDisplay-Bold",
										opacity: 0.5,
									}}
								>
									Iligan City National High School
								</Text>
								<Text
									style={{
							
										fontFamily: "SFProDisplay-Bold",
										opacity: 0.3,
									}}
								>
									Copyright 2022
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</ScrollView>
	);
};

export default About;

