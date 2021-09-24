import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HandbookContext } from "../utils/Context";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { navigationRef } from "../utils/RootNavigation";

const Skills = () => {
  const { resetActive, earnedBadges, skills } = useContext(HandbookContext);
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const { width, height } = Dimensions.get("window");

  const handlePress = () => {
    resetActive();
    navigationRef.goBack();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Pressable
        onPress={() => handlePress()}
        style={{ paddingTop: height / 40 }}>
        <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" size={45} />
      </Pressable>
      <Card data={activeSkill} />
      <FlatList
        data={skills}
        horizontal
        contentContainerStyle={{ paddingVertical: 15 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setActiveSkill(item)}
            style={
              activeSkill === item
                ? [styles.listItem, { backgroundColor: "#CBE9ED" }]
                : styles.listItem
            }>
            {earnedBadges.filter((data) => data.key === item.key).length ? (
              <View
                style={{
                  position: "absolute",
                  top: "-10%",
                  right: "-25%",
                  zIndex: 1,
                }}>
                <Badge
                  data={{
                    src: item.imageUrl,
                    iconSize: 40,
                    backgroundSize: 60,
                  }}
                />
              </View>
            ) : null}
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: width / 4, height: width / 4 }}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: "700", textAlign: "center" }}>
              {item.name.toUpperCase()}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};
export default Skills;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    position: "relative",
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF5FA",
    marginHorizontal: 10,
    padding: 5,
    width: 100,
    borderRadius: 4,
    elevation: 5,
  },
});
