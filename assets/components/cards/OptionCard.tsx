import React from "react";
import { Text, Box, Column, Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

interface Props {
  title: string;

}

const OptionCard = (props:Props) => {
	return (
		<Box _light={{ bg: "teal.100" }} rounded={"lg"} _dark={{ bg: "teal.800" }} px={3} py={4} width={"47%"}>
			<Icon
				as={Feather}
				name="book"
				size={8}
        
				_light={{ color: "teal.900" }}
				_dark={{ color: "teal.100" }}
			/>
			<Text  mt={2} fontFamily={"SFProDisplay-Bold"} _light={{ color: "teal.900" }}
				_dark={{ color: "teal.100" }} fontSize={16}>{props.title}</Text>

      
		</Box>
	);
};

export default OptionCard;
