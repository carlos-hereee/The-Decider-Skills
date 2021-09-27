import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { HandbookContext } from "../utils/Context";
import Card from "../components/Card";
import Badge from "../components/Badge";
import GoBack from "../components/GoBack";

const Skills = () => {
  const { earnedBadges, skills } = useContext(HandbookContext);
  const [activeSkill, setActiveSkill] = useState(skills[0]);

  const imageStyle = {
    width: Platform.OS === "web" ? 100 : 60,
    height: Platform.OS === "web" ? 100 : 60,
  };
  return (
    <View style={styles.container}>
      <GoBack />
      <Card data={activeSkill} />
      <FlatList
        data={skills}
        horizontal
        contentContainerStyle={{
          paddingVertical: 15,
          justifyContent: "center",
        }}
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
              style={imageStyle}
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
  container: {
    ...Platform.select({
      web: {
        width: "100%",
        maxWidth: 1000,
        marginHorizontal: "auto",
      },
    }),
  },
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
});
