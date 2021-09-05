import React, { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { HandbookContext } from "../utlis/Context";
import lifeSkills from "../utlis/data.json";
import HandbookSkill from "./HandbookSkill";

const Handbook = ({ navigation }) => {
  const { makeActive, active, skills } = useContext(HandbookContext);
  const handlePress = (item) => {
    makeActive(item);
  };
  return (
    <View style={styles.handbookMenu}>
      {active ? (
        <HandbookSkill skills={skills} navigation={navigation} />
      ) : (
        <FlatList
          data={lifeSkills}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handlePress(item)}
              style={[styles.handbookSkill, { backgroundColor: item.color }]}>
              <Text style={{ fontSize: 18, fontWeight: 700 }}>
                {item.title}
              </Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  handbookMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  handbookSkill: {
    width: 140,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    textAlign: "center",
  },
});
