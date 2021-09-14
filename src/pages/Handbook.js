import React, { useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HandbookContext } from "../utils/Context";
import lifeSkills from "../utils/data.json";
import HandbookSkill from "../components/HandbookSkill";
import Badge from "../components/Badge";

const Handbook = () => {
  const { makeActive, active, skills, earnedBadges } =
    useContext(HandbookContext);
  return active ? (
    <HandbookSkill skills={skills} />
  ) : (
    <View style={styles.handbookMenu}>
      <FlatList
        data={lifeSkills}
        numColumns={2}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => makeActive(item)}
            style={[styles.handbookSkill, { backgroundColor: item.color }]}>
            <Text
              style={{ fontSize: 18, fontWeight: "700", textAlign: "center" }}>
              {item.title}
            </Text>
            <FlatList
              horizontal
              data={item.skills}
              renderItem={({ item }) => {
                return earnedBadges.includes(item.key) ? (
                  <Badge
                    data={{
                      src: item.imageUrl,
                      iconSize: 10,
                      backgroundSize: 17,
                    }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/badge.png")}
                    style={{ width: 17, height: 17 }}
                  />
                );
              }}
            />
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
