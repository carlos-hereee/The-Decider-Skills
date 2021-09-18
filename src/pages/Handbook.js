import React, { useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { HandbookContext } from "../utils/Context";
import lifeSkills from "../utils/data.json";
import HandbookSkill from "../components/HandbookSkill";
import Badge from "../components/Badge";

const Handbook = () => {
  const { makeActive, active, skills, earnedBadges } =
    useContext(HandbookContext);
  const { width, height } = Dimensions.get("window");

  return active ? (
    <HandbookSkill skills={skills} />
  ) : (
    <View style={styles.handbookMenu}>
      {lifeSkills.map((item) => (
        <Pressable
          key={item.key}
          onPress={() => makeActive(item)}
          style={[
            styles.handbookSkill,
            {
              backgroundColor: item.color,
              width: width / 2.2,
              height: height / 4,
            },
          ]}>
          <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>
            {item.title}
          </Text>
          <FlatList
            data={item.skills}
            numColumns={4}
            contentContainerStyle={styles.badgeBackground}
            renderItem={({ item }) => {
              return earnedBadges.includes(item.key) ? (
                <View style={styles.badge}>
                  <Badge
                    data={{
                      src: item.imageUrl,
                      iconSize: width / 30,
                      backgroundSize: width / 18,
                    }}
                  />
                </View>
              ) : (
                <View style={styles.badge}>
                  <Image
                    source={require("../../assets/badge.png")}
                    style={{ width: width / 18, height: width / 18 }}
                  />
                </View>
              );
            }}
          />
        </Pressable>
      ))}
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  handbookMenu: {
    flex: 1,
    backgroundColor: "#d4e2e6",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingVertical: "25%",
  },
  handbookSkill: {
    margin: 5,
    padding: 5,
    textAlign: "center",
    borderRadius: 4,
    elevation: 10,
  },
  badgeBackground: {
    backgroundColor: "rgba(0,0,0,0.15)",
    marginTop: "auto",
    borderRadius: 4,
  },
  badge: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
