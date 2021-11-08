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
import { navigate } from "../utils/RootNavigation";
import GoBack from "../components/GoBack";
import { globalStyles } from "../styles";
import Icon from "../components/Icon";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const Handbook = () => {
  const { makeActive } = useContext(HandbookContext);
  const [accordion, setAccordion] = useState("1");

  const handlePress = (skills, data) => {
    makeActive(skills, data);
    navigate("Skills");
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
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
              height: menu.key === accordion ? height * 0.59 : null,
            },
          ]}
          onPress={() => setAccordion(menu.key)}>
          <Text h4 style={{ color: "black", paddingVertical: 1 }}>
            {menu.title}
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
                      <Icon data={item} />
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
                    <Icon data={icon} />
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
    borderRadius: 4,
    width: width * 0.95,
    height: height * 0.6,
    alignItems: "center",
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
});
