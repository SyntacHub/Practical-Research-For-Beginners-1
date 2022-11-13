import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import Acknowledgements from "../data/AcknowledgementsData";
import {
	Text,
	Box,
	ScrollView,
	FlatList,
	Column,
	Icon,
	Row,
} from "native-base";
import ICNHS from "../components/svg/icnhs";
import SSG from "../components/svg/ssg";
import Electrobotz from "../components/svg/electrobotz";

interface Props {}

const About: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
	const renderItem = ({ item }: { item: any }) => {
		return (
			<Row mx={2} my={2} borderRadius={10}>
				<Box
					p={2.5}
					_light={{ bg: "emerald.100" }}
					_dark={{ bg: "emerald.800" }}
					borderRadius={10}
				>
					<Icon
						as={Feather}
						name="user"
						size={7}
						_light={{ color: "emerald.900" }}
						_dark={{ color: "emerald.100" }}
						onPress={() => navigation.navigate("About")}
					/>
				</Box>

				<Column mx={2}>
					<Text fontFamily={"SFProDisplay-Bold"} fontSize={20}>
						{item.person}
					</Text>
					<Text
						style={{
							fontFamily: "SFProDisplay-Medium",
						}}
					>
						{item.contrib}
					</Text>
				</Column>
			</Row>
		);
	};

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
				<Box width={"90%"} mx={"auto"}>
					<Box>
						<Row alignItems={"center"} space={3}>
							<Box
								p={2.5}
								_light={{ bg: "emerald.100" }}
								_dark={{ bg: "emerald.800" }}
								rounded={"lg"}
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
						</Row>
						<Box my={3}>
							<Text fontFamily={"SFProDisplay-Bold"} fontSize={35}>
								About
							</Text>
						</Box>
						<Box>
							<Box
								_light={{ bg: "light.100" }}
								_dark={{ bg: "dark.100" }}
								py={2}
								justifyContent={"center"}
								px={3}
								rounded={"lg"}
								mt={2}
							>
								<Row space={2} alignSelf={'center'} justifyContent={'center'}>
									{/* <SSG/> */}
									<ICNHS/>
									{/* <Electrobotz/> */}
								</Row>
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
		</Box>
	);
};

export default About;
