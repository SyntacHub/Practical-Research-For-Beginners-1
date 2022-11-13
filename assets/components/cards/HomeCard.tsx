import { useNavigation } from "@react-navigation/native";
import React from "react";
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
			bgColor={"emerald.100"}
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
						color={"emerald.900"}
						fontSize={20}
					>
						{props.title}
					</Text>

					{props.hasShortDescription && (
						<Text fontSize={20}>{props.shortDescription}</Text>
					)}

					<Box bgColor={'emerald.700'} px={3} py={2} rounded={"lg"} alignItems={"center"} width={"70%"}>
						<Text fontSize={12} fontFamily={"SFProDisplay-Bold"} color={"muted.50"}>Submit Feedback</Text>
					</Box>
				</Column>

				<Box alignItems={"flex-end"}>
					<Icon as={Feather} name="download" size={75} color="emerald.900" />
				</Box>
			</Row>
		</Box>
	);
};

export default HomeCard;
