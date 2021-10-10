import React, { useContext, useState } from "react";
import {
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
import { globalStyles } from "../styles";
import Icon from "../components/Icon";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const Handbook = () => {
  const { makeActive, earnedBadges } = useContext(HandbookContext);
  const [accordion, setAccordion] = useState("1");

  const handlePress = (skills, data) => {
    makeActive(skills, data);
    navigate("Skills");
  };
  return (
    <View>
      <GoBack />
      {lifeSkills.map((menu) => (
        <Pressable
          key={menu.key}
          disabled={menu.key === accordion}
          style={[
            styles.handbookSkill,
            globalStyles.shadow,
            {
              zIndex: menu.key === accordion ? 1 : 0,
              height: menu.key === accordion ? height * 0.58 : null,
            },
          ]}
          onPress={() => setAccordion(menu.key)}>
          <Text h4 style={{ color: "black", textAlign: "center" }}>
            {menu.title.toUpperCase()}
          </Text>
          {menu.key === accordion &&
            (Platform.OS === "web" ? (
              <View style={styles.webMenu}>
                <FlatList
                  data={menu.skills}
                  numColumns={3}
                  renderItem={({ item }) => (
                    <Pressable
                      key={item.key}
                      onPress={() => handlePress(menu.skills, item)}
                      style={[styles.listItem, globalStyles.shadow]}>
                      {earnedBadges.filter((data) => data.key === item.key)
                        .length > 0 ? (
                        <>
                          <Icon data={item} />
                          <View style={styles.badge}>
                            <Badge
                              data={{
                                src: item.imageUrl,
                                iconSize: width * 0.1,
                                backgroundSize: width * 0.15,
                              }}
                            />
                          </View>
                        </>
                      ) : (
                        <Icon data={item} />
                      )}
                    </Pressable>
                  )}
                />
              </View>
            ) : (
              <View style={{ flexWrap: "wrap" }}>
                {menu.skills.map((icon) => (
                  <Pressable
                    key={icon.key}
                    onPress={() => handlePress(menu.skills, icon)}
                    style={[styles.listItem, globalStyles.shadow]}>
                    {earnedBadges.filter((data) => data.key === icon.key)
                      .length > 0 ? (
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
            ))}
        </Pressable>
      ))}
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  handbookSkill: {
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 5,
    borderRadius: 4,
    width: width * 0.95,
    height: height * 0.6,
  },
  webMenu: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
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
