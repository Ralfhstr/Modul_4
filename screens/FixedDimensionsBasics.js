// import React from "react";
// import { View } from "react-native";

// const FixedDimensionsBasics = () => {
//   return (
//     <View>
//       <View
//         style={{
//           width: 50,
//           height: 50,
//           backgroundColor: "powderblue",
//         }}
//       />
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "skyblue",
//         }}
//       />
//       <View
//         style={{
//           width: 150,
//           height: 150,
//           backgroundColor: "steelblue",
//         }}
//       />
//     </View>
//   );
// };

// export default FixedDimensionsBasics;

import React from "react";
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const FixedDimensionsBasics = () => {
  return (
    <GluestackUIProvider config={config}>
      <Box sx={{ h: 50, w: 50, bg: "$blue300" }}/>
      <Box sx={{ h: 100, w: 100, bg: "$blue400" }}/>
      <Box sx={{ h: 150, w: 150, bg: "$blue500" }}/>
    </GluestackUIProvider>
  );
};

export default FixedDimensionsBasics;