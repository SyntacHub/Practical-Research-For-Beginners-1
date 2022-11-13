import { useNavigation } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { Text, Box, Icon, Row, Code, Column } from "native-base";
import { Feather } from "@expo/vector-icons";

interface Props {
	title: string;
	hasbutton?: boolean;
	hasShortDescription?: boolean;
	shortDescription?: string;
}

const HomeCard = (props: Props) => {
	return (
		<Box
			justifyContent={"center"}
			px={2}
			py={6}
			borderRadius={15}
			_light={{ bg: "emerald.100" }} _dark={{ bg: "emerald.800" }}
		>
			<Row
				overflow={"hidden"}
				alignItems={"center"}
				justifyContent={"space-between"}
				mx={2}
				space={2}
			>
				<Column space={2} width={"70%"}>
					<Text
						fontFamily={"SFProDisplay-Bold"}
						_light={{ color: "emerald.900" }} _dark={{ color: "emerald.100" }}
						fontSize={20}
					>
						{props.title}
					</Text>

					{props.hasShortDescription && (
						<Text fontSize={20}>{props.shortDescription}</Text>
					)}

					<Box _light={{ bg: "emerald.200" }} _dark={{ bg: "emerald.700" }} px={3} py={2} rounded={"lg"} alignItems={"center"} width={"70%"}>
						<Text fontSize={12} fontFamily={"SFProDisplay-Bold"} _light={{ color: "emerald.900" }} _dark={{ color: "emerald.100" }}>Submit Feedback</Text>
					</Box>
				</Column>

				<Box alignItems={"flex-end"}>
					<Icon as={Feather} name="download" size={75} _light={{ color: "emerald.900" }} _dark={{ color: "emerald.100" }} />
				</Box>
			</Row>
		</Box>
	);
};

export default HomeCard;
