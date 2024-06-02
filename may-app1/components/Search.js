import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

export default function Search() {
  return (
    <View style={styles.searchConatiner}>
      <View style={styles.search}>
        <View style={styles.icon}>
          <Icon.Search height={25} width={25} stroke={"black"} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="rgba(0,0,0,1)"
        />
      </View>

      <TouchableOpacity style={styles.sliders}>
        <Icon.Sliders height={25} width={25} stroke="white" strokeWidth={3} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 35,

    justifyContent: "space-between",
  },
  search: {
    backgroundColor: "#fff",
    height: 48,
    width: 260,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    paddingLeft: 10,
  },

  textInput: {
    flex: 1,
    height: 49,
    width: 353,
    paddingLeft: 10,
    fontWeight: "700",
  },
  sliders: {
    marginLeft: 8,
    backgroundColor: "rgba(240, 82, 47, 1)",
    height: 48,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
