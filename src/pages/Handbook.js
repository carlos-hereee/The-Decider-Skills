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
            <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>
              {item.title}
            </Text>
            <FlatList
              horizontal
              data={item.skills}
              contentContainerStyle={styles.badgeShadow}
              renderItem={({ item }) => {
                return earnedBadges.includes(item.key) ? (
                  <View style={{ paddingHorizontal: 2, paddingVertical: 10 }}>
                    <Badge
                      data={{
                        src: item.imageUrl,
                        iconSize: 15,
                        backgroundSize: 18,
                      }}
                    />
                  </View>
                ) : (
                  <View style={{ paddingHorizontal: 2, paddingVertical: 10 }}>
                    <Image
                      source={require("../../assets/badge.png")}
                      style={{ width: 18, height: 18 }}
                    />
                  </View>
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
    width: "47%",
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 20,
    textAlign: "center",
    borderRadius: 4,
    elevation: 5,
  },
  badgeShadow: {
    backgroundColor: "rgba(0,0,0,0.2)",
    marginLeft: 5,
    marginTop: 10,
    borderRadius: 10,
  },
});
