import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

export default function Categories() {
  return (
    <View style={styles.categories}>
      <Text style={styles.text}>Categories</Text>

      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <View style={styles.category}>
          <View style={styles.title}>
            <Text style={styles.text1}>Exercise</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/exercise.png")}
          />
        </View>

        <View style={styles.category}>
          <View style={styles.title}>
            <Text style={styles.text1}>Study</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/study.png")} />
        </View>

      
        <View style={styles.category}>
          <View style={styles.title}>
            <Text style={styles.text1}>Cook</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/cook.png")} />
        </View>

        <View style={styles.category}>
          <View style={styles.title}>
            <Text style={styles.text1}>Art</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/art.png")} />
        </View>

        <View style={styles.category}>
          <View style={styles.title}>
            <Text style={styles.text1}>Movies</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/movies.webp")}
          />
        </View>

      

        <View style={styles.category}>
          <View style={styles.title}>
            <Text style={styles.text1}>Swimming</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/swimming.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    paddingLeft: 30,
    marginTop: 35,
  },
  text: {
    // fontFamily: Lato
    fontSize: 20,
    fontWeight: "700",
  },

  scrollView: {
    marginTop: 10,
  },

  category: {
    height: 196,
    width: 186,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "rgba(251, 249, 247, 1)",
  },

  title: {
    marginLeft: 10,
    marginTop: 10,
  },

  text1: {
    fontSize: 16,
    fontWeight: "700",
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
  },

  image: {
    height: 145,
    width: 125,
    resizeMode: "contain",
    position: "absolute",
    left: 30,
    top: 40,
  },
});
