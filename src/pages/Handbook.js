import React, { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { HandbookContext } from "../utils/Context";
import lifeSkills from "../utils/data.json";
import HandbookSkill from "../components/HandbookSkill";

const Handbook = ({ navigation }) => {
  const { makeActive, active, skills } = useContext(HandbookContext);
  const handlePress = (item) => {
    makeActive(item);
  };
  return active ? (
    <HandbookSkill skills={skills} navigation={navigation} />
  ) : (
    <View style={styles.handbookMenu}>
      <FlatList
        data={lifeSkills}
        numColumns={2}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={[styles.handbookSkill, { backgroundColor: item.color }]}>
            <Text
              style={{ fontSize: 18, fontWeight: "700", textAlign: "center" }}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  handbookMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4e2e6",
  },
  handbookSkill: {
    width: "45%",
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
    borderRadius: 4,
    elevation: 5,
  },
});
