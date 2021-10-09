import React, { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, View, Dimensions } from "react-native";
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
  const [accordion, setAccordion] = useState("1");

  const handlePress = (skills, data) => {
    makeActive(skills, data);
    navigate("Skills");
  };

  const Icon = ({ data }) => (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: data.imageUrl }}
        resizeMode="contain"
        style={{ width: width * 0.15, height: height * 0.07 }}
      />
      <Text style={{ textAlign: "center" }}>{data.name.toUpperCase()}</Text>
    </View>
  );

  return (
    <View style={styles.menu}>
      <GoBack />
      {lifeSkills.map((item) => (
        <Pressable
          key={item.key}
          disabled={item.key === accordion}
          style={[
            styles.handbookSkill,
            globalStyles.shadow,
            {
              zIndex: item.key === accordion ? 1 : 0,
              height: item.key === accordion ? height * 0.58 : null,
            },
          ]}
          onPress={() => setAccordion(item.key)}>
          <Text h5 style={{ color: "black", alignItems: "center" }}>
            {item.title.toUpperCase()}
          </Text>
          {item.key === accordion && (
            <View style={{ flexWrap: "wrap" }}>
              {item.skills.map((icon) => (
                <Pressable
                  key={icon.key}
                  onPress={() => handlePress(item.skills, icon)}
                  style={[styles.listItem, globalStyles.shadow]}>
                  {earnedBadges.filter((data) => data.key === icon.key).length >
                  0 ? (
                    <>
                      <Icon data={icon} />
                      <View style={styles.badge}>
                        <Badge
                          data={{
                            src: icon.imageUrl,
                            iconSize: width * 0.1,
                            backgroundSize: width * 0.15,
                          }}
                        />
                      </View>
                    </>
                  ) : (
                    <Icon data={icon} />
                  )}
                </Pressable>
              ))}
            </View>
          )}
        </Pressable>
      ))}
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  handbookSkill: {
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 5,
    borderRadius: 4,
    width: width * 0.95,
    height: height * 0.6,
    alignItems: "center",
  },
  listItem: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    backgroundColor: "#EFF5FA",
    margin: 5,
    borderRadius: 4,
    width: width * 0.27,
    height: height * 0.16,
  },
  badgeBackground: {
    backgroundColor: "rgba(0,0,0,0.15)",
    marginTop: "auto",
    borderRadius: 4,
  },
  badge: {
    position: "absolute",
    top: "-20%",
    right: "-20%",
  },
});
