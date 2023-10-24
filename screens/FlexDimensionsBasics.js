// import React from "react";
// import { View } from "react-native";

// const FlexDimensionsBasics = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1, backgroundColor: "powderblue" }} />
//       <View style={{ flex: 2, backgroundColor: "skyblue" }} />
//       <View style={{ flex: 3, backgroundColor: "steelblue" }} />
//     </View>
//   );
// };

// export default FlexDimensionsBasics;

import React from "react";
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const FlexDimensionsBasics = () => {
  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} bg= "$blue300"/>
      <Box flex={2} bg= "$blue400"/>
      <Box flex={3} bg= "$blue500"/>
    </GluestackUIProvider>
  );
};

export default FlexDimensionsBasics;