import React from "react";
import { Row } from "native-base";
import { LabtoolsImage } from "../svgs";
interface Props {}

const LabToolsCard: React.FC<Props> = () => {
  return (
    <Row
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={3}
      marginY={5}
      borderRadius={"3xl"}
      _dark={{ backgroundColor: "emerald.400" }}
      _light={{ backgroundColor: "emerald.200" }}
    >
      <LabtoolsImage width={430} height={155} preserveAspectRatio={"true"} />
    </Row>
  );
};

export default LabToolsCard;
