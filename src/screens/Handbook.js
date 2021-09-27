import React, { useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { Text } from "react-native-elements";
import { HandbookContext } from "../utils/Context";
import lifeSkills from "../utils/data.json";
import Badge from "../components/Badge";
import { navigate } from "../utils/RootNavigation";
import GoBack from "../components/GoBack";

const Handbook = () => {
  const { makeActive, earnedBadges } = useContext(HandbookContext);
  const { width, height } = Dimensions.get("window");

  const handlePress = (i) => {
    makeActive(i);
    navigate("Skills");
  };
  return (
    <View style={styles.container}>
      <GoBack />
      <View style={styles.menu}>
        {lifeSkills.map((item) => (
          <View
            style={[
              styles.handbookSkill,
              {
                backgroundColor: item.color,
                width: width / 2.3,
                height: height / 4,
              },
            ]}>
            <Pressable
              key={item.key}
              style={{
                flex: 1,
                justifyContent: "space-between",
                width: "100%",
              }}
              onPress={() => handlePress(item)}>
              <Text style={{ color: "white" }}>{item.title}</Text>
              <FlatList
                data={item.skills}
                numColumns={4}
                contentContainerStyle={styles.badgeBackground}
                renderItem={({ item }) => {
                  return earnedBadges.filter((data) => data.key === item.key)
                    .length ? (
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
          </View>
        ))}
      </View>
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  menu: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  handbookSkill: {
    margin: 10,
    padding: "3%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      default: {
        elevation: 5,
      },
    }),
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
