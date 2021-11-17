import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
interface Props {
	route: any;
}

const IntroModal: React.FC<Props> = ( route:any ) => {
	const navigation = useNavigation<any>();
  const { item } = route.params;
	
	return (
		<View>
			<Text>Sources used in</Text>
			<Text></Text>
		</View>
	);
};
export default IntroModal;
