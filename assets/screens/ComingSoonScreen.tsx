import React from "react";
import { Text,Box, useTheme } from "native-base";
interface Props{
	navigation:any
}

const ComingSoonScreen:React.FC<Props> = ({navigation}) => {  

  
  
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>COMING SOON</Text>
      <Text>The devs are currently working on this features to improve the student's experience </Text>
      <Text>Stay tuned on our social media accounts for updates</Text>
    </Box>
  );
};
export default ComingSoonScreen;
