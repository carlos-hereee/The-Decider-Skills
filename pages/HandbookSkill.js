import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const HandbookSkill = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Card data={activeSkill} />
      <View>
        <FlatList
          data={skills}
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setActiveSkill(item)}
              style={{ margin: 10 }}>
              <Text>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
export default HandbookSkill;

// const styles = StyleSheet.create({});
