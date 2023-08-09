import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, Box, Row, Icon } from "native-base";


interface Props {
  leadingText?: string;
  title: string;
  shortDescription?: string;
}

const TextHolder = (props: Props) => {
  return(
    <Box>
      <Row>
        <Text>{props.leadingText}</Text>
        </Row>
    </Box>
  )
}

export default TextHolder;