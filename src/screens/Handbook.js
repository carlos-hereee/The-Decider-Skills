import React, { useContext } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { Text } from "react-native-elements";
import { HandbookContext } from "../utils/Context";
import lifeSkills from "../utils/data.json";
import Badge from "../components/Badge";
import { navigate } from "../utils/RootNavigation";
import GoBack from "../components/GoBack";
import { globalStyles } from "../styles";

const { width, height } = Dimensions.get("window");
const Handbook = () => {
  const { makeActive, earnedBadges } = useContext(HandbookContext);

  const handlePress = (skills, data) => {
    makeActive(skills, data);
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
    <View>
      <View style={{ justifyContent: "flex-start", marginRight: "auto" }}>
        <GoBack />
      </View>
      <View style={styles.menu}>
        <FlatList
          data={lifeSkills}
          numColumns={4}
          contentContainerStyle={styles.badgeBackground}
          renderItem={({ item }) => {
            <View>
              {/* <Pressable
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                  width: "100%",
                }}
                // onPress={() => handlePress(item.skills, item.skills[0])}
              > */}
              <Text h4 style={{ color: "white" }}>
                {item.title}
              </Text>
              {/* </Pressable> */}
            </View>;
          }}
        />
      </View>
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  menu: {
    // flex: 1,
    // flexWrap: "wrap",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  handbookSkill: {
    margin: 5,
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width: width / 2.2,
    height: height / 3,
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
