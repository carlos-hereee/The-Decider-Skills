import React from "react";
import { FlatList, Text, View } from "react-native";
import lifeSkills from "../utlis/data.json";

//   <NavigationContainer>

//   <Stack.Navigator>
//     <Stack.Screen name={"Home"} component={Homepage} />
//     <Stack.Screen name="Handbook" component={Handbook} />
//   </Stack.Navigator>
// </NavigationContainer>
const Handbook = () => {
  return (
    <View style={{ width: 300 }}>
      <FlatList
        data={lifeSkills}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
export default Handbook;

// {lifeSkills.map((item) => (
//   <Text key={item.key}>{item.title}</Text>
// ))}
