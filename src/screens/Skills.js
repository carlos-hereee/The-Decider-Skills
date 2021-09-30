import React, { useContext } from "react";
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
import { globalStyles } from "../styles";

const Skills = () => {
  const { earnedBadges, skills, makeActive, active, resetActive } =
    useContext(HandbookContext);

  const handlePress = (skills, item) => {
    resetActive();
    makeActive(skills, item);
  };
  const imageStyle = {
    width: Platform.OS === "web" ? 100 : 60,
    height: Platform.OS === "web" ? 100 : 60,
  };
  return (
    <View style={styles.container}>
      <GoBack />
      <Card />
      <FlatList
        data={skills}
        horizontal
        contentContainerStyle={{
          paddingVertical: 15,
          justifyContent: "center",
        }}
        initialScrollIndex={skills.indexOf(active) || 0}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(skills, item)}
            style={
              active === item
                ? [
                    styles.listItem,
                    globalStyles.shadow,
                    { backgroundColor: "#CBE9ED" },
                  ]
                : [styles.listItem, globalStyles.shadow]
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
    height: 150,
    borderRadius: 4,
  },
});
