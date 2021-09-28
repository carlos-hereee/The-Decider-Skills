import React, { useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import { Text } from "react-native-elements";
import { HandbookContext } from "../utils/Context";
import lifeSkills from "../utils/data.json";
import Badge from "../components/Badge";
import { navigate } from "../utils/RootNavigation";
import GoBack from "../components/GoBack";
import { globalStyles } from "../styles";

const Handbook = () => {
  const { makeActive, earnedBadges } = useContext(HandbookContext);

  const handlePress = (i) => {
    makeActive(i);
    navigate("Skills");
  };
  const badges = {
    iconSize: Platform.OS === "web" ? 30 : 15,
    backgroundSize: Platform.OS === "web" ? 40 : 20,
  };
  const badge = {
    width: Platform.OS === "web" ? 40 : 20,
    height: Platform.OS === "web" ? 40 : 20,
  };
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start", marginRight: "auto" }}>
        <GoBack />
      </View>
      <View style={styles.menu}>
        {lifeSkills.map((item) => (
          <View
            key={item.key}
            style={[
              styles.handbookSkill,
              globalStyles.shadow,
              {
                backgroundColor: item.color,
              },
            ]}>
            <Pressable
              style={{
                flex: 1,
                justifyContent: "space-between",
                width: "100%",
              }}
              onPress={() => handlePress(item)}>
              <Text h5 style={{ color: "white" }}>
                {item.title}
              </Text>
              <FlatList
                data={item.skills}
                numColumns={4}
                contentContainerStyle={styles.badgeBackground}
                renderItem={({ item }) => {
                  return earnedBadges.filter((data) => data.key === item.key)
                    .length ? (
                    <View style={styles.badge}>
                      <Badge data={{ ...badges, src: item.imageUrl }} />
                    </View>
                  ) : (
                    <View style={styles.badge}>
                      <Image
                        source={require("../../assets/badge.png")}
                        style={badge}
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
    ...Platform.select({
      web: {
        maxWidth: 1000,
        marginHorizontal: "auto",
      },
    }),
  },
  menu: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  handbookSkill: {
    margin: 10,
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        width: 300,
        height: 200,
      },
      android: {
        width: 140,
        height: 170,
      },
      ios: {
        width: 140,
        height: 170,
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
