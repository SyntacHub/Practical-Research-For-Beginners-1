import React from "react";
import { Box, Text, Row, Icon, Pressable, Column } from "native-base";
import { TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "react-native-feather";
interface Props {
  item: any;
}

const ItemMenu: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.push("Lesson", {
          item: item,
        });
      }}
    >
      <Box
        paddingX={3}
        paddingY={3}
        justifyContent={"center"}
        _light={{ backgroundColor: "gray.200" }}
        _dark={{ backgroundColor: "gray.800" }}
        marginY={2}
        borderRadius={"2xl"}
      >
        <Row alignItems={"center"}>
          <Box
            _dark={{ backgroundColor: "emerald.600" }}
            _light={{ backgroundColor: "emerald.300" }}
            borderRadius={"xl"}
            padding={3}
            justifyContent={"center"}
          >
            <Icon
              as={Feather}
              name={"book-open"}
              size="6"
              _dark={{ color: "emerald.300" }}
              _light={{ color: "emerald.800" }}
            />
          </Box>

          <Column style={{ flexDirection: "column", marginLeft: 15 }}>
            <Text
              fontFamily={"SFProDisplay-Bold"}
              _dark={{ color: "gray.50" }}
              _light={{ color: "gray.700" }}
              fontSize={"xl"}
            >
              {item.title}
            </Text>
            <Text
              fontFamily={"SFProDisplay-Medium"}
              fontSize={"sm"}
              _dark={{ color: "gray.50" }}
              _light={{ color: "gray.700" }}
            >
              {item.courseDesc}
            </Text>
          </Column>
        </Row>
      </Box>
    </TouchableOpacity>
  );
};
export default ItemMenu;
