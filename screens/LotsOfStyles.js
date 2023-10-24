// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const LotsOfStyles = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.red}>just red</Text>
//       <Text style={styles.bigBlue}>just bigBlue</Text>
//       <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//       <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//   },
//   bigBlue: {
//     color: "blue",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   red: {
//     color: "red",
//   },
// });

// export default LotsOfStyles;

import React from "react";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const LotsOfStyles = () => {
  return (
    <GluestackUIProvider config={config}>
      <Text ml="$3" mt="$3" size="md" color="$red600">just red</Text>
      <Text ml="$3" bold size="3xl" color="$blue600">just bigBlue</Text>
      <Text ml="$3" bold size="3xl" color="$red600">bigBlue, then red</Text>
      <Text ml="$3" bold size="3xl" color="$blue600">red, then bigBlue</Text>
    </GluestackUIProvider>
  );
};

export default LotsOfStyles;